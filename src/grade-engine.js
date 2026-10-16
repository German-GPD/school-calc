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

export function validateGrades(grades, scale) {
  return Array.isArray(grades)
    && isValidScale(scale)
    && grades.every((grade) => Number.isInteger(grade) && grade >= 0 && grade <= scale);
}

/**
 * Finds the smallest number of maximum marks needed to reach a target average.
 * The result is a planning estimate, not a prediction of school grading rules.
 */
export function calculateTargetPlan(grades, target, scale) {
  if (!validateGrades(grades, scale) || !Number.isFinite(target) || target < 0 || target > scale) {
    throw new RangeError('Provide valid grades, target, and grading scale.');
  }

  const current = calculateAverage(grades);
  if (current !== null && current >= target) {
    return { status: 'reached', current, target, gradesNeeded: 0, nextGradeNeeded: null };
  }

  if (grades.length === 0) {
    return {
      status: 'empty',
      current: null,
      target,
      gradesNeeded: 1,
      nextGradeNeeded: Math.ceil(target),
    };
  }

  const nextGradeNeeded = Math.ceil(target * (grades.length + 1) - grades.reduce((sum, grade) => sum + grade, 0) - Number.EPSILON);
  if (nextGradeNeeded <= scale) {
    return { status: 'one-grade', current, target, gradesNeeded: 1, nextGradeNeeded: Math.max(0, nextGradeNeeded) };
  }

  for (let count = 2; count <= 1000; count += 1) {
    if ((grades.reduce((sum, grade) => sum + grade, 0) + count * scale) / (grades.length + count) >= target) {
      return { status: 'multiple-grades', current, target, gradesNeeded: count, nextGradeNeeded: null };
    }
  }

  return { status: 'unreachable', current, target, gradesNeeded: null, nextGradeNeeded: null };
}
