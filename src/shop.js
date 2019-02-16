const AgedBrie = require('../src/aged_brie')
const BackstagePass = require('../src/backstage_pass')
const Regular = require('../src/regular_item')
const { specialItems, legendaryItems } = require('./constants')

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateSellIn (item) {
    item.sellIn -= 1
  }

  advanceDay () {
    this.items.forEach((item) => {
      if (this._isLegendary(item)) { return }
      this.updateSellIn(item)

      let newItem
      if (item.name === 'Aged Brie') {
        newItem = new AgedBrie(item.name, item.sellIn, item.quality)
      }

      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        newItem = new BackstagePass(item.name, item.sellIn, item.quality)
      }

      else {
        newItem = new Regular(item.name, item.sellIn, item.quality)
      }

      newItem.updateQuality()
      item.quality = newItem.quality
    })

    return this.items
  }

  _isLegendary (item) {
    if (legendaryItems.includes(item.name)) { return true }
  }
}

module.exports = Shop
