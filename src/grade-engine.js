/**
 * SCHOOL CALC — pure grade calculations.
 * No DOM or browser dependencies, so the same engine can be tested and reused.
 */

export function calculateAverage(grades) {
  if (!Array.isArray(grades) || grades.length === 0) return null;
  if (grades.some((grade) => !Number.isFinite(grade))) {
    throw new TypeError('Grades must contain only finite numbers.');
  }
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

export function roundGrade(value) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  return Math.floor(value + 0.5 + Number.EPSILON);
}

export function isValidScale(scale) {
  return [5, 10, 12].includes(scale);
}
