const Tag = require('../Tag')
const __Ignore__ = require('./__ignore__')
const { getTagConstructor } = require('../utils')
const { aliasTags } = require('../config').get()

class Ul extends Tag {
  constructor (str, tagName = 'ul', options) {
    super(str, tagName, options)
  }

  beforeReturn (content) {
    return super.beforeReturn(content)
  }

  parseValidSubTag (subTagStr, subTagName, options) {
    const SubTagClass = getTagConstructor(subTagName)
    if (subTagName !== 'li' && aliasTags[subTagName] !== 'li' && SubTagClass !== __Ignore__) {
      console.error('Should not have tags except <li> inside ul, current tag is ' + subTagName + ', current tagStr is' + subTagStr)
      return ''
    } else {
      const subTag = new SubTagClass(subTagStr, subTagName, {
        calcLeading: true,
        leadingSpace: this.leadingSpace,
        layer: this.layer,
        match: '* '
      })
      return subTag.exec('', '\n')
    }
  }

  parseOnlyString (subTagStr, subTagName, options) {
    return ''
  }

  exec (prevGap = '\n', endGap = '\n') {
    return super.exec(prevGap, endGap)
  }
}

module.exports = Ul
