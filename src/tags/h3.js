const __Heading__ = require('./__Heading__')

class H3 extends __Heading__ {
  constructor (str, tagName = 'h3') {
    super(str, tagName)
  }

  beforeMergeSpace (content) {
    return '### ' + content
  }

  exec (prevGap = '\n', endGap = '\n') {
    return super.exec(prevGap, endGap)
  }
}

module.exports = H3
