import __Heading__ from './__Heading__'

class H2 extends __Heading__ {
  constructor(str: string, tagName = 'h2') {
    super(str, tagName)
  }

  beforeMergeSpace(content: string) {
    return '## ' + content
  }

  exec(prevGap = '\n', endGap = '\n') {
    return super.exec(prevGap, endGap)
  }
}

export default H2
