const Item = require('../src/item')
const MAX_QUALITY = 50

class AgedBrie extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality += 2 : this.quality += 1
    if (this.quality > MAX_QUALITY) { this.quality = MAX_QUALITY }
  }
}

module.exports = AgedBrie
