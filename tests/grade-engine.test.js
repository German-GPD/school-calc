import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateAverage,
  roundGrade,
  isValidScale,
  validateGrades,
  calculateTargetPlan,
} from '../src/grade-engine.js';
import { normalizeState } from '../src/storage.js';

test('average handles empty lists and fractional results', () => {
  assert.equal(calculateAverage([]), null);
  assert.equal(calculateAverage([7, 8, 9]), 8);
  assert.equal(calculateAverage([5, 6]), 5.5);
});

test('rounding uses standard half-up behavior', () => {
  assert.equal(roundGrade(null), null);
  assert.equal(roundGrade(6.49), 6);
  assert.equal(roundGrade(6.5), 7);
});

test('only supported grading scales are accepted', () => {
  assert.equal(isValidScale(5), true);
  assert.equal(isValidScale(10), true);
  assert.equal(isValidScale(12), true);
  assert.equal(isValidScale(100), false);
  assert.equal(validateGrades([0, 5], 5), true);
  assert.equal(validateGrades([6], 5), false);
});

test('target plan detects reached goals and required extra grades', () => {
  assert.equal(calculateTargetPlan([8, 9], 8, 10).status, 'reached');
  assert.deepEqual(calculateTargetPlan([6, 8], 8, 10), {
    status: 'one-grade',
    current: 7,
    target: 8,
    gradesNeeded: 1,
    nextGradeNeeded: 10,
  });
  assert.equal(calculateTargetPlan([2, 3], 8, 10).status, 'multiple-grades');
});

test('invalid target plans fail explicitly', () => {
  assert.throws(() => calculateTargetPlan([13], 8, 10), RangeError);
});

test('stored state is normalized and invalid grades are discarded', () => {
  assert.deepEqual(normalizeState({
    grades: [8, 9],
    gradingScale: 10,
    language: 'ru',
    theme: 'dark',
    accent: 'purple',
  }), {
    grades: [8, 9],
    gradingScale: 10,
    language: 'ru',
    theme: 'dark',
    accent: 'purple',
  });

  assert.deepEqual(normalizeState({
    grades: [99, '7'],
    gradingScale: 5,
    language: 'fr',
    theme: 'neon',
    accent: 'orange',
  }), {
    grades: [],
    gradingScale: 5,
    language: 'en',
    theme: 'light',
    accent: 'green',
  });
});
