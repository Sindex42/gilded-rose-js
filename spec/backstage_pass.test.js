const BackstagePass = require('../src/backstage_pass')

describe('Backstage Passes', () => {
  let passes1 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 14, 20)
  let passes2 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 9, 20)
  let passes3 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 4, 20)
  let passes4 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", -1, 50)
  let passes5 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 1, 50)
  let passes6 = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", -1, 0)

  describe('#updateQuality', () => {
    test('if sellIn > 10, increment quality by 1', () => {
      passes1.updateQuality()
      expect(passes1.quality).toBe(21)
    })

    test('if sellIn > 10, increment quality by 2', () => {
      passes2.updateQuality()
      expect(passes2.quality).toBe(22)
    })

    test('if sellIn > 10, increment quality by 3', () => {
      passes3.updateQuality()
      expect(passes3.quality).toBe(23)
    })

    test('if sellIn < 0, quality is 0', () => {
      passes4.updateQuality()
      expect(passes4.quality).toBe(0)
    })

    test('quality cannot increase past 50', () => {
      passes5.updateQuality()
      expect(passes5.quality).toBe(50)
    })

    test('quality cannot decrease below 0', () => {
      passes6.updateQuality()
      expect(passes6.quality).toBe(0)
    })
  })
})
