const NonUnique = require('../src/non_unique')

describe('Regular Item', () => {
  let regular1 = new NonUnique("Sword", 0, 20)
  let regular2 = new NonUnique("Sword", -1, 20)
  let regular3 = new NonUnique("Sword", -1, 0)

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

describe('Conjured Item', () => {
  let conjured1 = new NonUnique("Conjured Sword", 0, 20)
  let conjured2 = new NonUnique("Conjured Sword", -1, 20)
  let conjured3 = new NonUnique("Conjured Sword", -1, 0)

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
