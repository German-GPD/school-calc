# Changelog

All notable web-version changes are documented here.

## [2.1.0] — 2026-10-16

### Added
- Persistent grades and preferences using browser localStorage.
- A standalone grade calculation module with average, rounding, scale validation, and target planning.
- Automated Node.js tests for calculations and saved-state validation.
- CI test step before the GitHub Pages build and deployment.

### Changed
- The interface now tells users that data is saved locally on their device.
- README rewritten with setup, architecture, privacy, testing, and deployment instructions.

### Privacy
- No account or project-owned cloud storage was added. Clearing browser site data removes the locally saved state.
