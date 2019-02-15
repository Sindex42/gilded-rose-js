const AgedBrie = require('../src/aged_brie')
const BackstagePass = require('../src/backstage_pass')
const Regular = require('../src/regular_item')

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') { return }
      item.sellIn = item.sellIn - 1

      if (item.name === 'Aged Brie') {
        let brie = new AgedBrie(item.name, item.sellIn, item.quality)
        brie.updateQuality()

        item.quality = brie.quality
      }

      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        let passes = new BackstagePass(item.name, item.sellIn, item.quality)
        passes.updateQuality()

        item.quality = passes.quality
      }

      else {
        let regular = new Regular(item.name, item.sellIn, item.quality)
        regular.updateQuality()

        item.quality = regular.quality
      }
    })

    return this.items
  }
}

module.exports = Shop
