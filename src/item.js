const legendaryItems = [
  'Sulfuras, Hand of Ragnaros'
]

const specialItems = [
  'Aged Brie',
  'Backstage passes to a TAFKAL80ETC concert'
]

class Item {
  constructor (name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateSellIn () {
    this.sellIn -= 1
  }

  isLegendary () {
    if (legendaryItems.includes(this.name)) { return true }
  }

  isSpecial () {
    if (this.name in specialItems) { return true }
  }
}

module.exports = Item
