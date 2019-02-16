const Item = require('../src/item')
const Shop = require('../src/shop')

describe('Gilded Rose', () => {
  test('maintains the name of an item', () => {
    const gildedRose = new Shop([ new Item('foo', 0, 0) ])
    const items = gildedRose.advanceDay()
    expect(items[0].name).toBe('foo')
  })
})
