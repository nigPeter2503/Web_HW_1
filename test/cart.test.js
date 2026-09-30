import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})
test('empty cart', () => {
  const items = []
  const options = {}
  assert.equal(cartTotal(items, options), 0)
})
test('Free Shipping', () => {
  const items = [
    { name: 'Áo thun', price: 200000, qty: 2 },
    { name: 'Sổ tay', price: 100000, qty: 1 },
  ]
  const options = { vatRate: 0.00, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 500000)
})
test('Negative Price', () => {
  const items = [
    { name: 'Áo thun', price: -180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
test('Negative Qty', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: -2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
test('Non-integer Qty', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2.5 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})