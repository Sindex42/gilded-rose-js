class Regular {
  constructor (sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality () {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1
  }
}

module.exports = Regular
