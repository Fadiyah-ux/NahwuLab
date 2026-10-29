import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateStreak, calculateUserLevel, getDaysDifference } from './streak';

test('getDaysDifference accurately counts difference between dates', () => {
  assert.equal(getDaysDifference('2026-10-28', '2026-10-29'), 1);
  assert.equal(getDaysDifference('2026-10-25', '2026-10-29'), 4);
  assert.equal(getDaysDifference('2026-10-29', '2026-10-29'), 0);
});

test('calculateStreak initializes to 1 on first visit', () => {
  const result = calculateStreak(null, 0, '2026-10-29');
  assert.equal(result.newStreak, 1);
  assert.equal(result.isNewDay, true);
  assert.equal(result.streakMaintained, true);
});

test('calculateStreak preserves streak when logging in on the same day', () => {
  const result = calculateStreak('2026-10-29', 5, '2026-10-29');
  assert.equal(result.newStreak, 5);
  assert.equal(result.isNewDay, false);
  assert.equal(result.streakMaintained, true);
});

test('calculateStreak increments streak on consecutive day login', () => {
  const result = calculateStreak('2026-10-28', 5, '2026-10-29');
  assert.equal(result.newStreak, 6);
  assert.equal(result.isNewDay, true);
  assert.equal(result.streakMaintained, true);
});

test('calculateStreak resets streak to 1 after missing a day', () => {
  const result = calculateStreak('2026-10-26', 10, '2026-10-29');
  assert.equal(result.newStreak, 1);
  assert.equal(result.isNewDay, true);
  assert.equal(result.streakMaintained, false);
});

test('calculateUserLevel returns correct level and title based on XP', () => {
  const lvl1 = calculateUserLevel(50);
  assert.equal(lvl1.level, 1);
  assert.equal(lvl1.title, "Santri Mubtadi' (Pemula)");

  const lvl2 = calculateUserLevel(150);
  assert.equal(lvl2.level, 2);
  assert.equal(lvl2.title, "Santri Mutawassith (Menengah)");

  const lvl5 = calculateUserLevel(2000);
  assert.equal(lvl5.level, 5);
  assert.equal(lvl5.title, "Musyrif Nahwu (Pakar Bahasa)");
});
