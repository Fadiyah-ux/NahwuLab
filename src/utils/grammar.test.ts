import test from 'node:test';
import assert from 'node:assert/strict';
import { stripArabicHarakat, hasAlifLam, hasTanwin, categorizeIrabCase, evaluateQuizScore } from './grammar';

test('stripArabicHarakat removes all diacritics', () => {
  assert.equal(stripArabicHarakat('جَاءَ زَيْدٌ عَالِمًا'), 'جاء زيد عالما');
  assert.equal(stripArabicHarakat('الْحَمْدُ لِلَّهِ'), 'الحمد لله');
});

test('hasAlifLam detects definite article', () => {
  assert.equal(hasAlifLam('الْكِتَابُ'), true);
  assert.equal(hasAlifLam('كِتَابٌ'), false);
  assert.equal(hasAlifLam('ال'), false); // too short
});

test('hasTanwin identifies tanwin markers', () => {
  assert.equal(hasTanwin('زَيْدٌ'), true);
  assert.equal(hasTanwin('عَالِمًا'), true);
  assert.equal(hasTanwin('الرَّجُلُ'), false);
});

test('categorizeIrabCase handles various case terms', () => {
  assert.equal(categorizeIrabCase("Marfu' bi Dhommah"), 'marfu');
  assert.equal(categorizeIrabCase('Manshub bil Fathah'), 'manshub');
  assert.equal(categorizeIrabCase('Majrur bi Harfi Jarr'), 'majrur');
  assert.equal(categorizeIrabCase('Majzum bi Sukun'), 'majzum');
  assert.equal(categorizeIrabCase('Mabni alal Fath'), 'mabni');
});

test('evaluateQuizScore calculates percentage, XP and grade', () => {
  const result = evaluateQuizScore([
    { selectedIndex: 0, correctIndex: 0 },
    { selectedIndex: 1, correctIndex: 1 },
    { selectedIndex: 2, correctIndex: 2 },
    { selectedIndex: 0, correctIndex: 1 },
  ]);

  assert.equal(result.total, 4);
  assert.equal(result.correct, 3);
  assert.equal(result.percentage, 75);
  assert.equal(result.xpEarned, 45);
  assert.equal(result.grade, 'Jayyid Jiddan');
});
