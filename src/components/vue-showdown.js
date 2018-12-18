import showdown from 'showdown'

export default {
  name: 'VueShowdown',

  props: {
    /**
     * Raw markdown content
     */
    markdown: {
      type: String,
      required: false,
      default: null
    },

    /**
     * HTML tag of the markdown wrapper
     */
    tag: {
      type: String,
      required: false,
      default: 'div'
    },

    /**
     * Showdown flavor
     *
     * @see https://github.com/showdownjs/showdown#flavors
     */
    flavor: {
      type: String,
      required: false,
      default: 'vanilla',
      validator: flavor => ['original', 'vanilla', 'github'].includes(flavor)
    },

    /**
     * Showdown options
     *
     * @see https://github.com/showdownjs/showdown#valid-options
     *
     * @property {boolean=false} omitExtraWLInCodeBlocks
     * @property {boolean=false} noHeaderId
     * @property {boolean=false} customizedHeaderId
     * @property {boolean=false} ghCompatibleHeaderId
     * @property {boolean=false} prefixHeaderId
     * @property {boolean=false} rawPrefixHeaderId
     * @property {boolean=false} rawHeaderId
     * @property {boolean=false} parseImgDimensions
     * @property {number=1} headerLevelStart
     * @property {boolean=false} simplifiedAutoLink
     * @property {boolean=false} excludeTrailingPunctuationFromURLs
     * @property {boolean=false} literalMidWordUnderscores
     * @property {boolean=false} literalMidWordAsterisks
     * @property {boolean=false} strikethrough
     * @property {boolean=false} tables
     * @property {boolean=false} tablesHeaderId
     * @property {boolean=false} ghCodeBlocks
     * @property {boolean=false} tasklists
     * @property {boolean=false} smoothLivePreview
     * @property {boolean=false} smartIndentationFix
     * @property {boolean=false} disableForced4SpacesIndentedSublists
     * @property {boolean=false} simpleLineBreaks
     * @property {boolean=false} requireSpaceBeforeHeadingText
     * @property {boolean=false} ghMentions
     * @property {string=https://github.com/{u}} ghMentionsLink
     * @property {boolean=true} encodeEmails
     * @property {boolean=false} openLinksInNewWindow
     * @property {boolean=false} backslashEscapesHTMLTags
     * @property {boolean=false} emoji
     * @property {boolean=false} underline
     * @property {boolean=false} completeHTMLDocument
     * @property {boolean=false} metadata
     * @property {boolean=false} splitAdjacentBlockquotes
     *
     * Showdown extensions
     *
     * @see https://github.com/showdownjs/showdown#extensions
     *
     * @property {(Object|(Function|string)[])} extensions
     */
    options: {
      type: Object,
      required: false,
      default () {
        return Object.create(null)
      }
    }
  },

  computed: {
    converter () {
      return new showdown.Converter(this.options)
    },
    inputMarkdown () {
      return this.markdown === null ? this.$slots.default[0].text : this.markdown
    },
    outputHtml () {
      return this.converter ? this.converter.makeHtml(this.inputMarkdown) : ''
    }
  },

  render (h) {
    return h(this.tag, {
      domProps: {
        innerHTML: this.outputHtml
      }
    })
  }
}
