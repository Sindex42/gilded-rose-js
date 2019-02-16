const Conjured = require('../src/conjured_item')

describe('Conjured Item', () => {
  let conjured1 = new Conjured("Conjured Sword", 0, 20)
  let conjured2 = new Conjured("Conjured Sword", -1, 20)
  let conjured3 = new Conjured("Conjured Sword", -1, 0)

  describe('#updateQuality', () => {
    test('if sellIn >= 0, decrement quality by 2', () => {
      conjured1.updateQuality()
      expect(conjured1.quality).toBe(18)
    })

    test('if sellIn < 0, decrement quality by 4', () => {
      conjured2.updateQuality()
      expect(conjured2.quality).toBe(16)
    })

    test('quality cannot decrease below 0', () => {
      conjured3.updateQuality()
      expect(conjured3.quality).toBe(0)
    })
  })
})
