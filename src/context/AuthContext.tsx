import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, googleProvider, testFirestoreConnection } from '../firebase/config';
import { handleFirestoreError, OperationType } from '../firebase/errorHandler';
import { UserProfile, StreakLogItem, StreakRecoveryData, StreakRecoveryLog } from '../types';
import {
  getJakartaDateString,
  evaluateStreakStatus,
  calculateActivityStreak,
} from '../utils/streak';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  isAdmin: boolean;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  registerWithEmail: (email: string, pass: string, name: string) => Promise<void>;
  loginAsDemoAdmin: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUserProfile: () => Promise<void>;
  incrementExercisesCompleted: (xpGain?: number) => Promise<void>;
  recordActivity: (activityType: 'chat' | 'exercise' | 'library') => Promise<void>;
  startStreakRecovery: () => Promise<void>;
  saveRecoveryProgress: (data: Partial<StreakRecoveryData>) => Promise<void>;
  completeStreakRecovery: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'izzahfadiyah649@gmail.com';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Synchronize user profile and evaluate streak state WITHOUT false increments
  const syncUserStreakAndProfile = async (
    uid: string,
    email: string,
    displayName?: string | null,
    photoURL?: string | null
  ) => {
    const userDocRef = doc(db, 'users', uid);
    const todayStr = getJakartaDateString();

    try {
      const snap = await getDoc(userDocRef);
      const isUserAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

      if (!snap.exists()) {
        // New user starts streak strictly from 0
        const newProfile: UserProfile = {
          uid,
          email,
          displayName: displayName || (isUserAdmin ? 'Ustadzah Izzah Fadiyah (Admin)' : 'Santri SmartKib'),
          photoURL: photoURL || '',
          role: isUserAdmin ? 'admin' : 'student',
          currentStreak: 0,
          longestStreak: 0,
          lastLoginDate: todayStr,
          lastActiveDate: undefined,
          streakStatus: 'idle',
          missedDays: 0,
          streakRecovery: null,
          recoveryHistory: [],
          totalExercisesCompleted: 0,
          xp: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        await setDoc(userDocRef, newProfile);
        setUserProfile(newProfile);

        if (isUserAdmin) {
          try {
            await setDoc(doc(db, 'admins', uid), { uid, email });
          } catch (e) {
            console.warn('Admin record write check:', e);
          }
        }
      } else {
        const data = snap.data() as UserProfile;
        let updatedData = { ...data };

        if (isUserAdmin && updatedData.role !== 'admin') {
          updatedData.role = 'admin';
        }
        if (typeof updatedData.xp !== 'number') {
          updatedData.xp = 0;
        }

        // Evaluate streak state (broken detection, missed days calculation)
        const evaluated = evaluateStreakStatus(updatedData);
        updatedData = {
          ...updatedData,
          currentStreak: evaluated.currentStreak,
          longestStreak: evaluated.longestStreak,
          streakStatus: evaluated.streakStatus,
          missedDays: evaluated.missedDays,
          streakRecovery: evaluated.streakRecovery ?? updatedData.streakRecovery ?? null,
          lastLoginDate: todayStr,
          updatedAt: new Date().toISOString(),
        };

        if (evaluated.needsUpdate) {
          try {
            await updateDoc(userDocRef, {
              currentStreak: updatedData.currentStreak,
              longestStreak: updatedData.longestStreak,
              streakStatus: updatedData.streakStatus,
              missedDays: updatedData.missedDays,
              streakRecovery: updatedData.streakRecovery,
              lastLoginDate: todayStr,
              updatedAt: updatedData.updatedAt,
            });
          } catch (e) {
            console.warn('Could not auto-update evaluated streak:', e);
          }
        }

        setUserProfile(updatedData);
      }
    } catch (err) {
      console.error('Error syncing user profile:', err);
      const isUserAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      setUserProfile({
        uid,
        email,
        displayName: displayName || (isUserAdmin ? 'Ustadzah Izzah Fadiyah (Admin)' : 'Santri SmartKib'),
        photoURL: photoURL || '',
        role: isUserAdmin ? 'admin' : 'student',
        currentStreak: 0,
        longestStreak: 0,
        lastLoginDate: todayStr,
        streakStatus: 'idle',
        missedDays: 0,
        totalExercisesCompleted: 0,
        xp: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  };

  useEffect(() => {
    testFirestoreConnection();

    // Check for saved local admin session
    const localSession = localStorage.getItem('smartkib_admin_session') || localStorage.getItem('nahwulab_admin_session');
    if (localSession) {
      try {
        const parsed: UserProfile = JSON.parse(localSession);
        if (parsed.email === ADMIN_EMAIL) {
          const evaluated = evaluateStreakStatus(parsed);
          const activeAdmin = {
            ...parsed,
            streakStatus: evaluated.streakStatus,
            missedDays: evaluated.missedDays,
            streakRecovery: evaluated.streakRecovery ?? parsed.streakRecovery ?? null,
          };
          setUserProfile(activeAdmin);
          setLoading(false);
          return;
        }
      } catch {
        localStorage.removeItem('smartkib_admin_session');
        localStorage.removeItem('nahwulab_admin_session');
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user && user.email) {
        await syncUserStreakAndProfile(user.uid, user.email, user.displayName, user.photoURL);
      } else {
        const storedAdmin = localStorage.getItem('smartkib_admin_session') || localStorage.getItem('nahwulab_admin_session');
        if (!storedAdmin) {
          setUserProfile(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      if (cred.user && cred.user.email) {
        await syncUserStreakAndProfile(cred.user.uid, cred.user.email, cred.user.displayName, cred.user.photoURL);
      }
    } catch (error) {
      console.error('Google Sign-in failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();

    // Special check for admin credentials
    if (cleanEmail === ADMIN_EMAIL.toLowerCase() && pass === 'Faza4321') {
      try {
        const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
        if (cred.user) {
          await syncUserStreakAndProfile(cred.user.uid, cleanEmail, 'Ustadzah Izzah Fadiyah (Admin)');
          setLoading(false);
          return;
        }
      } catch (fbErr: any) {
        console.warn('Firebase Email Auth fallback for admin:', fbErr?.code);
        const adminProfile: UserProfile = {
          uid: 'admin_izzah_fadiyah_01',
          email: ADMIN_EMAIL,
          displayName: 'Ustadzah Izzah Fadiyah (Admin)',
          role: 'admin',
          currentStreak: 5,
          longestStreak: 12,
          lastLoginDate: getJakartaDateString(),
          lastActiveDate: getJakartaDateString(),
          streakStatus: 'active',
          missedDays: 0,
          totalExercisesCompleted: 8,
          xp: 450,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        localStorage.setItem('smartkib_admin_session', JSON.stringify(adminProfile));
        setUserProfile(adminProfile);
        setLoading(false);
        return;
      }
    }

    try {
      const cred = await signInWithEmailAndPassword(auth, cleanEmail, pass);
      if (cred.user && cred.user.email) {
        await syncUserStreakAndProfile(cred.user.uid, cred.user.email, cred.user.displayName);
      }
    } catch (error: any) {
      console.error('Email sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const registerWithEmail = async (email: string, pass: string, name: string) => {
    setLoading(true);
    const cleanEmail = email.trim().toLowerCase();
    try {
      const cred = await createUserWithEmailAndPassword(auth, cleanEmail, pass);
      if (cred.user) {
        await syncUserStreakAndProfile(cred.user.uid, cleanEmail, name);
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginAsDemoAdmin = async () => {
    await loginWithEmail(ADMIN_EMAIL, 'Faza4321');
  };

  const logout = async () => {
    localStorage.removeItem('smartkib_admin_session');
    localStorage.removeItem('nahwulab_admin_session');
    try {
      await signOut(auth);
    } catch (err) {
      console.warn('Sign out error:', err);
    }
    setCurrentUser(null);
    setUserProfile(null);
  };

  const refreshUserProfile = async () => {
    if (!userProfile) return;
    try {
      const snap = await getDoc(doc(db, 'users', userProfile.uid));
      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        setUserProfile(data);
      }
    } catch (e) {
      console.warn('Could not refresh user profile:', e);
    }
  };

  /**
   * Records a verified learning activity (exercise, chat/tarkib, or library).
   * Calculates streaks accurately based on WIB calendar days.
   */
  const recordActivity = async (activityType: 'chat' | 'exercise' | 'library') => {
    if (!userProfile) return;
    const todayStr = getJakartaDateString();
    const currentXp = typeof userProfile.xp === 'number' ? userProfile.xp : 0;
    const pointsGained = activityType === 'exercise' ? 20 : activityType === 'library' ? 15 : 10;
    const newXp = currentXp + pointsGained;

    // Evaluate streak upon verified learning activity
    const streakResult = calculateActivityStreak(userProfile);

    const updated: UserProfile = {
      ...userProfile,
      xp: newXp,
      currentStreak: streakResult.newStreak,
      longestStreak: streakResult.newLongest,
      lastActiveDate: streakResult.newLastActiveDate,
      lastLoginDate: todayStr,
      streakStatus: streakResult.streakStatus,
      missedDays: streakResult.missedDays,
      updatedAt: new Date().toISOString(),
    };

    setUserProfile(updated);

    if (currentUser) {
      try {
        const ref = doc(db, 'users', userProfile.uid);
        await updateDoc(ref, {
          xp: newXp,
          currentStreak: streakResult.newStreak,
          longestStreak: streakResult.newLongest,
          lastActiveDate: streakResult.newLastActiveDate,
          lastLoginDate: todayStr,
          streakStatus: streakResult.streakStatus,
          missedDays: streakResult.missedDays,
          updatedAt: new Date().toISOString(),
        });

        const logRef = doc(db, 'users', userProfile.uid, 'streakLogs', `${todayStr}_${activityType}`);
        await setDoc(logRef, {
          userId: userProfile.uid,
          date: todayStr,
          activityType,
          points: pointsGained,
          timestamp: new Date().toISOString(),
        } as StreakLogItem);
      } catch (e) {
        console.warn('Log activity error:', e);
      }
    } else {
      localStorage.setItem('smartkib_admin_session', JSON.stringify(updated));
    }
  };

  const incrementExercisesCompleted = async (xpGain: number = 20) => {
    if (!userProfile) return;
    const todayStr = getJakartaDateString();
    const newCount = (userProfile.totalExercisesCompleted || 0) + 1;
    const currentXp = typeof userProfile.xp === 'number' ? userProfile.xp : 0;
    const newXp = currentXp + xpGain;

    const streakResult = calculateActivityStreak(userProfile);

    const updated: UserProfile = {
      ...userProfile,
      totalExercisesCompleted: newCount,
      xp: newXp,
      currentStreak: streakResult.newStreak,
      longestStreak: streakResult.newLongest,
      lastActiveDate: streakResult.newLastActiveDate,
      lastLoginDate: todayStr,
      streakStatus: streakResult.streakStatus,
      missedDays: streakResult.missedDays,
      updatedAt: new Date().toISOString(),
    };

    setUserProfile(updated);

    if (currentUser) {
      try {
        const ref = doc(db, 'users', userProfile.uid);
        await updateDoc(ref, {
          totalExercisesCompleted: newCount,
          xp: newXp,
          currentStreak: streakResult.newStreak,
          longestStreak: streakResult.newLongest,
          lastActiveDate: streakResult.newLastActiveDate,
          lastLoginDate: todayStr,
          streakStatus: streakResult.streakStatus,
          missedDays: streakResult.missedDays,
          updatedAt: new Date().toISOString(),
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${userProfile.uid}`);
      }
    } else {
      localStorage.setItem('smartkib_admin_session', JSON.stringify(updated));
    }
  };

  /**
   * Initializes or resumes a streak recovery session.
   */
  const startStreakRecovery = async () => {
    if (!userProfile) return;
    const missed = userProfile.missedDays || 1;
    const prev = userProfile.currentStreak > 0 ? userProfile.currentStreak : 1;

    const recoveryData: StreakRecoveryData = userProfile.streakRecovery || {
      inProgress: true,
      missedDays: missed,
      previousStreak: prev,
      targetQuestions: missed,
      currentQuestionIndex: 0,
      solvedQuestionIds: [],
      usedQuestionIds: [],
      lastBreakDate: getJakartaDateString(),
    };

    recoveryData.inProgress = true;

    const updated: UserProfile = {
      ...userProfile,
      streakRecovery: recoveryData,
      updatedAt: new Date().toISOString(),
    };

    setUserProfile(updated);

    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', userProfile.uid), {
          streakRecovery: recoveryData,
          updatedAt: updated.updatedAt,
        });
      } catch (e) {
        console.warn('startStreakRecovery error:', e);
      }
    } else {
      localStorage.setItem('smartkib_admin_session', JSON.stringify(updated));
    }
  };

  /**
   * Saves intermediate progress during streak recovery (e.g. after answering a question correctly).
   */
  const saveRecoveryProgress = async (partial: Partial<StreakRecoveryData>) => {
    if (!userProfile || !userProfile.streakRecovery) return;
    const updatedRecovery: StreakRecoveryData = {
      ...userProfile.streakRecovery,
      ...partial,
    };

    const updated: UserProfile = {
      ...userProfile,
      streakRecovery: updatedRecovery,
      updatedAt: new Date().toISOString(),
    };

    setUserProfile(updated);

    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', userProfile.uid), {
          streakRecovery: updatedRecovery,
          updatedAt: updated.updatedAt,
        });
      } catch (e) {
        console.warn('saveRecoveryProgress error:', e);
      }
    } else {
      localStorage.setItem('smartkib_admin_session', JSON.stringify(updated));
    }
  };

  /**
   * Finalizes successful streak recovery:
   * - Restores previousStreak
   * - Clears streakRecovery and missedDays
   * - Logs to recoveryHistory
   */
  const completeStreakRecovery = async () => {
    if (!userProfile || !userProfile.streakRecovery) return;
    const todayStr = getJakartaDateString();
    const restoredStreak = userProfile.streakRecovery.previousStreak || 1;
    const missedDays = userProfile.streakRecovery.missedDays || 1;
    const newlyUsed = userProfile.streakRecovery.solvedQuestionIds || [];

    const historyEntry: StreakRecoveryLog = {
      id: 'rec_' + Date.now(),
      date: todayStr,
      missedDays,
      restoredStreak,
      timestamp: new Date().toISOString(),
    };

    const updatedHistory = [...(userProfile.recoveryHistory || []), historyEntry];

    const updated: UserProfile = {
      ...userProfile,
      currentStreak: restoredStreak,
      longestStreak: Math.max(userProfile.longestStreak || 0, restoredStreak),
      lastActiveDate: todayStr,
      streakStatus: 'recovered',
      missedDays: 0,
      streakRecovery: null,
      recoveryHistory: updatedHistory,
      updatedAt: new Date().toISOString(),
    };

    setUserProfile(updated);

    if (currentUser) {
      try {
        await updateDoc(doc(db, 'users', userProfile.uid), {
          currentStreak: restoredStreak,
          longestStreak: Math.max(userProfile.longestStreak || 0, restoredStreak),
          lastActiveDate: todayStr,
          streakStatus: 'recovered',
          missedDays: 0,
          streakRecovery: null,
          recoveryHistory: updatedHistory,
          updatedAt: updated.updatedAt,
        });
      } catch (e) {
        console.warn('completeStreakRecovery error:', e);
      }
    } else {
      localStorage.setItem('smartkib_admin_session', JSON.stringify(updated));
    }
  };

  const isAdmin = Boolean(
    userProfile?.role === 'admin' ||
    userProfile?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() ||
    currentUser?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()
  );

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        isAdmin,
        loading,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        loginAsDemoAdmin,
        logout,
        refreshUserProfile,
        incrementExercisesCompleted,
        recordActivity,
        startStreakRecovery,
        saveRecoveryProgress,
        completeStreakRecovery,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
