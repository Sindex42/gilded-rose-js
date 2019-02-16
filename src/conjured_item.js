const Item = require('./item')
const { MIN_QUALITY } = require('./constants')

class Conjured extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality -= 4 : this.quality -= 2
    if (this.quality < MIN_QUALITY ) { this.quality = MIN_QUALITY }
  }
}

module.exports = Conjured
