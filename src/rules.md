# Project Rules
Stack: Plain JavaScript (Node.js >= 18), Nothing else without asking.
Style: 2-space indent, ES Modules (import/export), named exports, no default exports.
Commands: npm test ; npm run gate
Scope: Only modify `src/cart.js`. All other files are read-only.
Contract:
- Function: cartTotal(items, options)
- Output: Must be a whole number (round to integer).
Never:
- Never install or add external npm dependencies.
- Never modify tests under `test/` or alter `package.json` scripts to pass checks.
- Never return a string (do not leave `toFixed()` as the return value).