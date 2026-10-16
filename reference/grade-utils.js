/**
 * SCHOOL CALC — JavaScript reference utilities.
 * The published app logic currently lives inside index.html.
 * These functions document the core grade calculations in a separate file.
 */

/**
 * Calculate the arithmetic mean of valid school grades.
 * @param {number[]} grades
 * @returns {number|null} Mean rounded to two decimal places, or null for no grades.
 */
export function calculateAverage(grades) {
  const validGrades = grades.filter(
    (grade) => Number.isFinite(grade) && grade >= 1 && grade <= 10
  );

  if (validGrades.length === 0) return null;

  const total = validGrades.reduce((sum, grade) => sum + grade, 0);
  return Math.round((total / validGrades.length) * 100) / 100;
}

/**
 * Add a grade without mutating the original array.
 * @param {number[]} grades
 * @param {number} grade
 * @returns {number[]}
 */
export function addGrade(grades, grade) {
  if (!Number.isInteger(grade) || grade < 1 || grade > 10) {
    throw new RangeError("Grade must be an integer from 1 to 10.");
  }

  return [...grades, grade];
}

/**
 * Return a compact summary for a list of grades.
 * @param {number[]} grades
 * @returns {{count: number, average: number|null, highest: number|null, lowest: number|null}}
 */
export function summarizeGrades(grades) {
  const validGrades = grades.filter(
    (grade) => Number.isFinite(grade) && grade >= 1 && grade <= 10
  );

  return {
    count: validGrades.length,
    average: calculateAverage(validGrades),
    highest: validGrades.length ? Math.max(...validGrades) : null,
    lowest: validGrades.length ? Math.min(...validGrades) : null
  };
}
