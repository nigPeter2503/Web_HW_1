// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options = {}) {
  if (!items || items.length === 0) {
    return 0
  }

  let subtotal = 0
  for (const item of items) {
    if (typeof item.price !== 'number' || item.price < 0) {
      throw new RangeError('Item price must be a non-negative number')
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Item quantity must be a positive integer')
    }
    subtotal += item.price * item.qty
  }

  const vatRate = typeof options.vatRate === 'number' ? options.vatRate : 0
  const vat = subtotal * vatRate

  let shipping = 0
  const shipFee = typeof options.shipFee === 'number' ? options.shipFee : 0
  if (options.freeShipFrom !== undefined && options.freeShipFrom !== null) {
    shipping = subtotal >= options.freeShipFrom ? 0 : shipFee
  } else {
    shipping = shipFee
  }

  return Math.round(subtotal + vat + shipping)
}
