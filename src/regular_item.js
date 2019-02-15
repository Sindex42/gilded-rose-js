const Item = require('../src/item')

class Regular extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1
  }
}

module.exports = Regular
