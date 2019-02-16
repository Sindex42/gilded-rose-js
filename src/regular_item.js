const Item = require('./item')
const { MIN_QUALITY } = require('./constants')

class Regular extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1
    if (this.quality < MIN_QUALITY ) { this.quality = MIN_QUALITY }
  }
}

module.exports = Regular
