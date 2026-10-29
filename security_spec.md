# Security Specification: NahwuLab

## 1. Data Invariants
1. **User Identity Invariant**: A user document at `/users/{userId}` can only be read or written by the authenticated user whose `request.auth.uid == userId`, or read/managed by an admin.
2. **Streak and Chat Ownership Invariant**: Subcollections `/users/{userId}/streakLogs/{date}` and `/users/{userId}/chats/{chatId}` are strictly owned by `{userId}`. An attacker cannot write logs or chat messages to another user's path.
3. **Role Escalation Protection**: Regular users cannot promote themselves to `role: 'admin'`. Only authorized admins can write to `/admins/{adminId}` or set `role: 'admin'`.
4. **Content Management Invariant**: Public learning content at `/exercises/{exerciseId}` and `/library/{bookId}` is readable by authenticated users, but writable only by admins.
5. **Admin Identity**: Admin is determined by existence in `/admins/$(request.auth.uid)` or authenticated token email `izzahfadiyah649@gmail.com`.

## 2. The Dirty Dozen Payloads (Designed to Break Identity, Integrity & State)
1. **Identity Spoofing**: Attacker `user_xyz` writes to `/users/target_user` with `uid: "target_user"`. Expectation: PERMISSION_DENIED.
2. **Self-Promotion to Admin**: Regular user updates their own profile `/users/{my_uid}` with `role: "admin"`. Expectation: PERMISSION_DENIED.
3. **Ghost Field Poisoning**: Inserting unexpected schema field `{ backdoorAdmin: true }` into `/users/{my_uid}`. Expectation: PERMISSION_DENIED.
4. **Chat History Theft**: User A queries `/users/UserB/chats` to eavesdrop on private AI queries. Expectation: PERMISSION_DENIED.
5. **Cross-User Streak Forgery**: User A writes a streak log into `/users/UserB/streakLogs/2026-10-29`. Expectation: PERMISSION_DENIED.
6. **Denial-of-Wallet Payload**: Inserting a 500KB string into chat content exceeding max limit. Expectation: PERMISSION_DENIED.
7. **Unauthenticated Read of User PII**: Anonymous client requests `/users/target_user`. Expectation: PERMISSION_DENIED.
8. **Malicious Exercise Injection**: Non-admin user creates an exercise at `/exercises/tampered_question`. Expectation: PERMISSION_DENIED.
9. **Exercise Deletion Attack**: Student deletes `/exercises/ex_1`. Expectation: PERMISSION_DENIED.
10. **Library Content Overwrite**: Student mutates Matan Al-Jurumiyyah text in `/library/jurumiyyah`. Expectation: PERMISSION_DENIED.
11. **Admin Document Creation Attack**: Normal user writes to `/admins/{my_uid}`. Expectation: PERMISSION_DENIED.
12. **Blanket Query Scraping**: Requesting list of all users without matching UID. Expectation: PERMISSION_DENIED.
