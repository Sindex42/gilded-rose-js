const Item = require('../src/item')
const Shop = require('../src/shop')

describe('Shop', () => {
  describe('sellIn is positive', () => {
    let items = [
      {name: "Sword", sellIn: 1, quality: 20},
      {name: "Aged Brie", sellIn: 1, quality: 20},
      {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 20},
      {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 20}
    ]

    let gildedRose = new Shop(items)
    gildedRose.updateQuality()

    test('Regular items decrement quality by 1', () => {
      expect(gildedRose.items[0].quality).toBe(19)
    })

    test('Aged Brie increments quality by 1', () => {
      expect(gildedRose.items[1].quality).toBe(21)
    })

    test("Sulfuras' quality does not change", () => {
      expect(gildedRose.items[2].quality).toBe(80)
    })

    test('SellIn > 10, Backstage Passes increment quality by 1', () => {
      expect(gildedRose.items[3].quality).toBe(21)
    })

    test('SellIn <= 10, Backstage Passes increment quality by 2', () => {
      expect(gildedRose.items[4].quality).toBe(22)
    })

    test('SellIn <= 5, Backstage Passes increment quality by 3', () => {
      expect(gildedRose.items[5].quality).toBe(23)
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
