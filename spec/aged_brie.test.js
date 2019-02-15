const AgedBrie = require('../src/aged_brie')

describe('Aged Brie', () => {
  let brie1 = new AgedBrie("Aged Brie", 0, 20)
  let brie2 = new AgedBrie("Aged Brie", -1, 20)
  let brie3 = new AgedBrie("Aged Brie", 1, 50)

  describe('#updateQuality', () => {
    test('if sellIn >= 0, decrement quality by 1', () => {
      brie1.updateQuality()
      expect(brie1.quality).toBe(21)
    })

    test('if sellIn < 0, decrement quality by 2', () => {
      brie2.updateQuality()
      expect(brie2.quality).toBe(22)
    })

    test('quality cannot increase past 50', () => {
      brie3.updateQuality()
      expect(brie3.quality).toBe(50)
    })
  })
})
