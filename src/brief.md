# Brief: Implement cartTotal

## Objective
Implement the function `cartTotal(items, options)` in `src/cart.js`.

## Constraints & Scope
- Files allowed to touch: ONLY `src/cart.js`. Do not modify test files or package.json.
- Zero dependencies: Use only plain JavaScript built-in APIs (no external npm packages).

## Contract
- Function signature: `cartTotal(items, options)`
- Parameters:
  - `items`: Array of objects, each containing:
    - `name`: product name (optional/string)
    - `price`: unit price (number)
    - `qty`: quantity (number)
  - `options`: Object containing:
    - `vatRate`: VAT tax rate (number, e.g. 0.08 for 8%)
    - `freeShipFrom`: Free shipping threshold (number)
    - `shipFee`: Standard shipping fee (number)
- Return value: Must ALWAYS be a `number` rounded to the whole đồng (integer). Do NOT return a formatted string.

## Business Logic & Rules
1. Empty Cart: If `items` is empty (length === 0), undefined, or null, return `0`.
2. Validation:
   - Throw `RangeError` if any item has a negative price (`price < 0`).
   - Throw `RangeError` if any item has a `qty` that is not a positive integer (`!Number.isInteger(qty) || qty <= 0`).
3. Calculations:
   - `subtotal` = sum of (`price * qty`) for all items.
   - `vat` = `subtotal * options.vatRate` (default to 0 if not provided).
   - `shipping` = if `subtotal >= options.freeShipFrom`, shipping is 0; otherwise, use `options.shipFee` (default to 0).
   - `total` = `Math.round(subtotal + vat + shipping)`.

## Verification Case
- Worked example: Must return exactly `467400` as a number.