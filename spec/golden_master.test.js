const Item = require('../src/item')
const Shop = require('../src/shop')
const fs = require('fs')

describe('Golden master test', () => {
  test('text log should match', () => {
    let log = ""
    let master = fs.readFileSync('./lib/golden_master.txt', 'utf-8')

    let items = [
      new Item("Sword", 10, 20),
      new Item("Shield", 5, 7),
      new Item("Aged Brie", 2, 0),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    ]

    let gildedRose = new Shop(items)

    for (let i = 0; i <= 20; i++) {
      log += `\n-------- day ${i} --------\n`
      log += "name, sellIn, quality\n"

      items.forEach((item) => {
        log += `${item.name}, ${item.sellIn}, ${item.quality}\n`
      })

      gildedRose.advanceDay()
    }

    expect(log).toBe(master)
  })
})
