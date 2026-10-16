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

/**
 * Normalize user input before storing it.
 * Empty values and values outside the Belarusian 10-point scale are rejected.
 * @param {unknown} value
 * @returns {number|null}
 */
export function normalizeGrade(value) {
  if (typeof value === "string" && value.trim() === "") return null;
  const grade = Number(value);
  return Number.isInteger(grade) && grade >= 1 && grade <= 10 ? grade : null;
}

/**
 * Build a distribution map for grades 1 through 10.
 * Grades with a count of zero are included to simplify chart rendering.
 * @param {number[]} grades
 * @returns {Record<number, number>}
 */
export function gradeDistribution(grades) {
  const distribution = Object.fromEntries(
    Array.from({ length: 10 }, (_, index) => [index + 1, 0])
  );

  for (const value of grades) {
    const grade = normalizeGrade(value);
    if (grade !== null) distribution[grade] += 1;
  }

  return distribution;
}

/**
 * Calculate the number of points needed to reach a target average.
 * Returns null when the target cannot be reached with a single new grade.
 * @param {number[]} grades
 * @param {number} target
 * @returns {number|null}
 */
export function pointsNeededForTarget(grades, target) {
  const validTarget = Number(target);
  if (!Number.isFinite(validTarget) || validTarget < 1 || validTarget > 10) {
    return null;
  }

  const validGrades = grades
    .map(normalizeGrade)
    .filter((grade) => grade !== null);

  if (validGrades.length === 0) {
    return validTarget <= 10 ? Math.ceil(validTarget) : null;
  }

  const currentTotal = validGrades.reduce((sum, grade) => sum + grade, 0);
  const required = Math.ceil(validTarget * (validGrades.length + 1) - currentTotal);
  return required >= 1 && required <= 10 ? required : null;
}

/**
 * Format an average using the requested locale.
 * @param {number|null} average
 * @param {string} locale
 * @returns {string}
 */
export function formatAverage(average, locale = "ru-RU") {
  if (average === null || !Number.isFinite(average)) return "—";

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(average);
}

/**
 * Safely read a list of grades from a storage-like object.
 * This helper can also be tested with a mock object in Node.js.
 * @param {{getItem: (key: string) => string|null}} storage
 * @param {string} key
 * @returns {number[]}
 */
export function readGrades(storage, key = "school-calc-grades") {
  try {
    const raw = storage.getItem(key);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.map(normalizeGrade).filter((grade) => grade !== null);
  } catch {
    return [];
  }
}

/**
 * Save validated grades using a storage-like object.
 * @param {{setItem: (key: string, value: string) => void}} storage
 * @param {number[]} grades
 * @param {string} key
 * @returns {boolean}
 */
export function writeGrades(storage, grades, key = "school-calc-grades") {
  const safeGrades = grades
    .map(normalizeGrade)
    .filter((grade) => grade !== null);

  try {
    storage.setItem(key, JSON.stringify(safeGrades));
    return true;
  } catch {
    return false;
  }
}

/**
 * Create a short, readable progress message from a summary.
 * @param {{count: number, average: number|null, highest: number|null, lowest: number|null}} summary
 * @returns {string}
 */
export function describeProgress(summary) {
  if (!summary.count || summary.average === null) {
    return "Добавь первую оценку, чтобы увидеть статистику.";
  }

  if (summary.average >= 9) {
    return "Отличный результат — продолжай в том же духе!";
  }

  if (summary.average >= 7) {
    return "Хороший результат. Есть возможность улучшить средний балл.";
  }

  if (summary.average >= 5) {
    return "Результат можно улучшить: посмотри, какие оценки влияют на среднее.";
  }

  return "Начни с небольших целей и постепенно улучшай результат.";
}
