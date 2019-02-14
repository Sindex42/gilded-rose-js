const {Shop, Item} = require('../src/gilded_rose.js')

describe("Gilded Rose", () => {
  test("creates an item called 'foo'", () => {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toBe("foo")
  })
})
