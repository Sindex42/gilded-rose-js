const Item = require('./item')
const { MIN_QUALITY } = require('./constants')

class NonUnique extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    let MULTIPLIER = 1
    if (this._isConjured()) { MULTIPLIER = 2 }

    if (this.sellIn < 0) {
      this.quality -= 2 * MULTIPLIER
    } else {
      this.quality -= 1 * MULTIPLIER
    }

    if (this.quality < MIN_QUALITY ) { this.quality = MIN_QUALITY }
  }

  _isConjured () {
    if (this.name.includes('Conjured')) { return true }
  }
}

module.exports = NonUnique
