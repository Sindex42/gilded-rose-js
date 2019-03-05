const NonUnique = require('./non_unique')
const specialItems = require('./item_groups')

class Shop {
  constructor (items = []) {
    this.items = items
  }

  advanceDay () {
    this.items.forEach((item) => {
      if (item.isLegendary()) { return }

      item.updateSellIn()
      let newItem = this.assignItemType(item)
      newItem.updateQuality()
      item.quality = newItem.quality
    })

    return this.items
  }

  assignItemType (item) {
    let newItem
    if (item.isSpecial()) {
      newItem = new specialItems[item.name](item.name, item.sellIn, item.quality)
    } else {
      newItem = new NonUnique(item.name, item.sellIn, item.quality)
    }

    return newItem
  }
}

module.exports = Shop
