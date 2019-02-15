const Regular = require('../src/regular_item')

describe('Regular Item', () => {
  let regular1 = new Regular("Sword", 0, 20)
  let regular2 = new Regular("Sword", -1, 20)
  let regular3 = new Regular("Sword", -1, 0)

  describe('#updateQuality', () => {
    test('if sellIn >= 0, decrement quality by 1', () => {
      regular1.updateQuality()
      expect(regular1.quality).toBe(19)
    })

    test('if sellIn < 0, decrement quality by 2', () => {
      regular2.updateQuality()
      expect(regular2.quality).toBe(18)
    })

    test('quality cannot decrease below 0', () => {
      regular3.updateQuality()
      expect(regular3.quality).toBe(0)
    })
  })
})
