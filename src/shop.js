const AgedBrie = require('../src/aged_brie')
const BackstagePass = require('../src/backstage_pass')
const Regular = require('../src/regular_item')

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.forEach((item) => {
      let newitem
      if (item.name === 'Sulfuras, Hand of Ragnaros') { return }
      item.sellIn -= 1

      if (item.name === 'Aged Brie') {
        newitem = new AgedBrie(item.name, item.sellIn, item.quality)
      }

      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        newitem = new BackstagePass(item.name, item.sellIn, item.quality)
      }

      else {
        newitem = new Regular(item.name, item.sellIn, item.quality)
      }

      newitem.updateQuality()
      item.quality = newitem.quality
    })

    return this.items
  }
}

module.exports = Shop
