## 2026-09-30 — rules.md and gate script
Tool: Slide, Gemini.
Asked for: Draft project rules according to the example provided in an attached slide in src/rules.md and add a gate script in package.json.
Changed: it suggested installing prettier and eslint for gate check - replaced with built-in `node --check src/cart.js && npm test` to keep zero external dependencies.
Not used: suggested devDependencies and external config files.

## 2026-09-30 — GitHub Actions CI setup
Tool: Gemini.
Asked for: GitHub Actions workflow file .github/workflows/ci.yml running the harness gate on push and pull_request to main/master.
Changed: it added `npm ci` and matrix build across multiple Node versions - simplified to Node 20 and direct `npm run gate`.
Not used: actions/cache step for node_modules and matrix strategy.

## 2026-09-30 — task brief
Tool: Antigravity.
Asked for: Detailed prompt brief in src/brief.md specifying contract, validation, calculation logic, and edge cases for cartTotal.
Changed: it used snake_case property names (vat_rate, ship_fee) — aligned to exact camelCase options (vatRate, freeShipFrom, shipFee) matching README.md.
Not used: extra discount/coupon handling and complex tax exemption rules it suggested.

## 2026-09-30 — implement cartTotal and unit tests
Tool: Antigravity.
Asked for: Implement cartTotal in src/cart.js following brief.md, and write unit tests in test/cart.test.js for all rubric criteria.
Changed: it used `toFixed(0)` for rounding - replaced with `Math.round()` so the return type is strictly a number.
Not used: it bundled all assertions in one test block; I split them into separate tests so each test fails for exactly one reason.
