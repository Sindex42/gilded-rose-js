const Item = require('./item')
const { MAX_QUALITY } = require('./constants')
const DOUBLE_VALUE = 10
const TRIPLE_VALUE = 5

class BackstagePass extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    if (this.sellIn < 0) { this.quality = 0; return }

    this.quality += 1
    if (this.sellIn < DOUBLE_VALUE) { this.quality += 1 }
    if (this.sellIn < TRIPLE_VALUE) { this.quality += 1 }

    if (this.quality > MAX_QUALITY) { this.quality = MAX_QUALITY }
  }
}

module.exports = BackstagePass
