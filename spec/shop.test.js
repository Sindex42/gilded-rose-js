const Shop = require('../src/shop')

describe('Shop', () => {
  test('has an items property', () => {
    let gildedRose = new Shop()
    expect(gildedRose.items).toEqual([])
  })

  describe('#updateSellIn', () => {
    let sword = {name: "Sword", sellIn: 1}
    let brie = {name: "Aged Brie", sellIn: 0}
    let passes = {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15}

    let gildedRose = new Shop()

    test('Regular items decrement by 1', () => {
      gildedRose.updateSellIn(sword)
      expect(sword.sellIn).toBe(0)
    })

    test('Aged Brie decrements by 1', () => {
      gildedRose.updateSellIn(brie)
      expect(brie.sellIn).toBe(-1)
    })

    test('Backstage Passes decrement by 1', () => {
      gildedRose.updateSellIn(passes)
      expect(passes.sellIn).toBe(14)
    })
  })

  describe('#advanceDay', () => {
    describe('sellIn is greater than 0', () => {
      let items = [
        {name: "Sword", sellIn: 1, quality: 20},
        {name: "Aged Brie", sellIn: 1, quality: 20},
        {name: "Sulfuras, Hand of Ragnaros", sellIn: 1, quality: 80},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 48},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 47},
        {name: "Conjured Sword", sellIn: 1, quality: 20}
      ]

      let gildedRose = new Shop(items)
      gildedRose.advanceDay()

      test('Regular items decrement quality by 1', () => {
        expect(gildedRose.items[0].quality).toBe(19)
      })

      test('Aged Brie increments quality by 1', () => {
        expect(gildedRose.items[1].quality).toBe(21)
      })

      test("Sulfuras does not quality change", () => {
        expect(gildedRose.items[2].quality).toBe(80)
      })

      test('SellIn > 10, Backstage Passes increment quality by 1', () => {
        expect(gildedRose.items[3].quality).toBe(21)
      })

      test('SellIn <= 10, Backstage Passes increment quality by 2', () => {
        expect(gildedRose.items[4].quality).toBe(50)
      })

      test('SellIn <= 5, Backstage Passes increment by 3', () => {
        expect(gildedRose.items[5].quality).toBe(50)
      })

      test('Conjured items decrement quality by 2', () => {
        expect(gildedRose.items[6].quality).toBe(18)
      })
    })

    describe('sellIn is 0 or less ', () => {
      let items = [
        {name: "Sword", sellIn: 0, quality: 20},
        {name: "Aged Brie", sellIn: 0, quality: 20},
        {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80},
        {name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 50},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 20},
        {name: "Conjured Sword", sellIn: 0, quality: 20}
      ]

      let gildedRose = new Shop(items)
      gildedRose.advanceDay()

      test('Regular items decrement quality by 2', () => {
        expect(gildedRose.items[0].quality).toBe(18)
      })

      test('Aged Brie increments quality by 2', () => {
        expect(gildedRose.items[1].quality).toBe(22)
      })

      test("SellIn = 0, Sulfuras' quality does not change", () => {
        expect(gildedRose.items[2].quality).toBe(80)
      })

      test("SellIn = -1, Sulfuras' quality does not change", () => {
        expect(gildedRose.items[3].quality).toBe(50)
      })

      test('Backstage Passes quality is 0', () => {
        expect(gildedRose.items[4].quality).toBe(0)
      })

      test('Conjured items decrement quality by 4', () => {
        expect(gildedRose.items[5].quality).toBe(16)
      })
    })

    describe('Quality cannot increase past 50', () => {
      let items = [
        {name: "Aged Brie", sellIn: 0, quality: 50},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 50}
      ]

      let gildedRose = new Shop(items)
      gildedRose.advanceDay()

      test('Aged Brie', () => {
        expect(gildedRose.items[0].quality).toBe(50)
      })

      test('Backstage Passes', () => {
        expect(gildedRose.items[1].quality).toBe(50)
      })
    })

    describe('Quality cannot decrease below 0', () => {
      let items = [
        {name: "Sword", sellIn: -1, quality: 0},
        {name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0},
        {name: "Conjured Sword", sellIn: -1, quality: 0}
      ]

      let gildedRose = new Shop(items)
      gildedRose.advanceDay()

      test('Regular items', () => {
        expect(gildedRose.items[0].quality).toBe(0)
      })

      test('Backstage Passes', () => {
        expect(gildedRose.items[1].quality).toBe(0)
      })

      test('Conjured items', () => {
        expect(gildedRose.items[2].quality).toBe(0)
      })
    })
  })
})
