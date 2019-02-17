const AgedBrie = require('./aged_brie')
const BackstagePass = require('./backstage_pass')

const specialItems = {
  'Aged Brie': AgedBrie,
  'Backstage passes to a TAFKAL80ETC concert': BackstagePass,
}

const legendaryItems = [
  'Sulfuras, Hand of Ragnaros'
]

module.exports = {
  specialItems,
  legendaryItems
}
