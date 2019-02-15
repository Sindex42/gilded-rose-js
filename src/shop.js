class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') { return }

      item.sellIn = item.sellIn - 1

      if (item.name === 'Aged Brie') {
        item.sellIn < 0 ? item.quality += 2 : item.quality += 1
      }

      else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 0) { item.quality = 0; return }

        item.quality += 1
        if (item.sellIn < 10) { item.quality += 1 }
        if (item.sellIn < 5) { item.quality += 1 }
      }

      else {
        item.sellIn < 0 ? item.quality -= 2 : item.quality -= 1
        if (item.quality < 0) { item.quality = 0 }
      }

      if (item.quality > 50) { item.quality = 50 }
    })

    return this.items
  }
}

module.exports = Shop
