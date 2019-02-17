const NonUnique = require('./non_unique')
const { specialItems, legendaryItems } = require('./item_groups')

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateSellIn (item) {
    item.sellIn -= 1
  }

  advanceDay () {
    this.items.forEach((item) => {
      if (this._isLegendary(item)) { return }

      this.updateSellIn(item)
      let newItem = this.assignItemType(item)
      newItem.updateQuality()
      item.quality = newItem.quality
    })

    return this.items
  }

  assignItemType (item) {
    let newItem
    if (this._isSpecial(item)) {
      newItem = new specialItems[item.name](item.name, item.sellIn, item.quality)
    } else {
      newItem = new NonUnique(item.name, item.sellIn, item.quality)
    }

    return newItem
  }

  _isLegendary (item) {
    if (legendaryItems.includes(item.name)) { return true }
  }

  _isSpecial (item) {
    if (item.name in specialItems) { return true }
  }
}

module.exports = Shop
