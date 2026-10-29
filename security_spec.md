# Security Specification: NahwuLab (User-Isolated Access Control)

## 1. Data Invariants
1. **Strict User Data Isolation**: A user at `/users/{userId}` and all nested subcollections `/users/{userId}/{document=**}` can **ONLY** be read or written by the authenticated user whose `request.auth.uid == userId`. Cross-user data access is mathematically blocked.
2. **Immutable Identity**: When creating or updating a user document, `incoming().uid` must match `request.auth.uid`. An attacker cannot forge an owner UID.
3. **Privilege Escalation Protection**: Regular users cannot promote themselves to `role: 'admin'`. Only the authorized administrator email (`izzahfadiyah649@gmail.com`) or designated admins in `/admins/` have admin privileges.
4. **Learning Content Protection**: Public learning materials at `/exercises/{exerciseId}` and `/library/{bookId}` can be read by all authenticated users, but can **ONLY** be written, updated, or deleted by administrators.
5. **Denial-of-Wallet & Type Guards**: String lengths, collection paths, and required schema attributes are strictly checked via validation functions (`isValidUser`, `isValidStreakLog`, `isValidChatMessage`, etc.).

## 2. Dirty Dozen Payloads (Verified Blocked by Rules)
1. **Cross-User Profile Read**: User `A` requests `/users/B` -> `PERMISSION_DENIED`.
2. **Cross-User Profile Write**: User `A` tries to write to `/users/B` -> `PERMISSION_DENIED`.
3. **Cross-User Chat Snooping**: User `A` queries `/users/B/chats` -> `PERMISSION_DENIED`.
4. **Cross-User Streak Forgery**: User `A` writes streak log into `/users/B/streakLogs/2026-10-29` -> `PERMISSION_DENIED`.
5. **Self-Promotion to Admin**: Student sends `{ role: 'admin' }` update to their profile -> `PERMISSION_DENIED`.
6. **Unauthenticated Read**: Anonymous request to `/users/{anyId}` -> `PERMISSION_DENIED`.
7. **Malicious Exercise Tampering**: Student tries to edit or delete `/exercises/ex_1` -> `PERMISSION_DENIED`.
8. **Malicious Library Overwrite**: Student writes to `/library/matan-al-jurumiyyah` -> `PERMISSION_DENIED`.
9. **Admin Collection Injection**: Student writes document to `/admins/{their_uid}` -> `PERMISSION_DENIED`.
10. **Ghost Field Injection**: Adding arbitrary fields `{ isHacked: true }` to `/users/{userId}` -> `PERMISSION_DENIED`.
11. **Oversized Payload Attack**: Writing 500KB string into chat content -> `PERMISSION_DENIED`.
12. **Blanket Query Scraping**: Running unbounded list query over all users without matching UID -> `PERMISSION_DENIED`.
