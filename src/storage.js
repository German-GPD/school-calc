/**
 * Persists interface preferences only. Grades intentionally remain in memory for this session.
 * All access is guarded because storage can be disabled or unavailable in private contexts.
 */
import { isValidScale } from './grade-engine.js';

export const STORAGE_KEY = 'school-calc.state.v1';

const DEFAULT_STATE = Object.freeze({
  grades: [],
  gradingScale: 10,
  language: 'en',
  theme: 'light',
  accent: 'green',
});

function getStorage() {
  try {
    return typeof window !== 'undefined' ? window.localStorage : null;
  } catch {
    return null;
  }
}

export function normalizeState(input) {
  const value = input && typeof input === 'object' ? input : {};
  const gradingScale = isValidScale(value.gradingScale) ? value.gradingScale : DEFAULT_STATE.gradingScale;
  const grades = []; // Never restore or persist grades between sessions.

  return {
    grades,
    gradingScale,
    language: value.language === 'ru' || value.language === 'en' ? value.language : DEFAULT_STATE.language,
    theme: value.theme === 'dark' || value.theme === 'light' ? value.theme : DEFAULT_STATE.theme,
    accent: ['green', 'blue', 'red', 'yellow', 'purple'].includes(value.accent) ? value.accent : DEFAULT_STATE.accent,
  };
}

export function loadAppState() {
  const storage = getStorage();
  if (!storage) return null;

  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalizeState(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function saveAppState(state) {
  const storage = getStorage();
  if (!storage) return false;

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
    return true;
  } catch {
    return false;
  }
}

export function clearAppState() {
  const storage = getStorage();
  if (!storage) return false;

  try {
    storage.removeItem(STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
