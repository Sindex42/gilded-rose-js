const Item = require('../src/item')
const Shop = require('../src/shop')

describe('Shop', () => {
  describe('sellIn is positive', () => {
    let items = [
      {name: "Sword", sellIn: 1, quality: 20},
      {name: "Aged Brie", sellIn: 1, quality: 0},
      {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49}
    ]

    let gildedRose = new Shop(items)
    gildedRose.updateQuality()

    test('Regular items decrement quality by 1', () => {
      expect(gildedRose.items[0].quality).toBe(19)
    })
  })

  describe('sellIn is 0 or less ', () => {
    let items = [
      {name: "Sword", sellIn: 0, quality: 20},
      {name: "Aged Brie", sellIn: 0, quality: 0},
      {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80},
      {name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20},
    ]

    let gildedRose = new Shop(items)
    gildedRose.updateQuality()

    test('Regular items decrement quality by 2', () => {
      expect(gildedRose.items[0].quality).toBe(18)
    })
  })
})
