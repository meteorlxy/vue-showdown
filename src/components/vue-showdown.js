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
      default: null,
    },

    /**
     * HTML tag of the markdown wrapper
     */
    tag: {
      type: String,
      required: false,
      default: 'div',
    },

    /**
     * Showdown flavor
     *
     * @see https://github.com/showdownjs/showdown#flavors
     */
    flavor: {
      type: String,
      required: false,
      default: null,
      validator: flavor => [null, 'original', 'vanilla', 'github'].includes(flavor),
    },

    /**
     * Showdown options
     *
     * @see https://github.com/showdownjs/showdown#valid-options
     *
     * @property {boolean} omitExtraWLInCodeBlocks
     * @property {boolean} noHeaderId
     * @property {boolean} customizedHeaderId
     * @property {boolean} ghCompatibleHeaderId
     * @property {boolean} prefixHeaderId
     * @property {boolean} rawPrefixHeaderId
     * @property {boolean} rawHeaderId
     * @property {boolean} parseImgDimensions
     * @property {number} headerLevelStart
     * @property {boolean} simplifiedAutoLink
     * @property {boolean} excludeTrailingPunctuationFromURLs
     * @property {boolean} literalMidWordUnderscores
     * @property {boolean} literalMidWordAsterisks
     * @property {boolean} strikethrough
     * @property {boolean} tables
     * @property {boolean} tablesHeaderId
     * @property {boolean} ghCodeBlocks
     * @property {boolean} tasklists
     * @property {boolean} smoothLivePreview
     * @property {boolean} smartIndentationFix
     * @property {boolean} disableForced4SpacesIndentedSublists
     * @property {boolean} simpleLineBreaks
     * @property {boolean} requireSpaceBeforeHeadingText
     * @property {boolean} ghMentions
     * @property {String} ghMentionsLink
     * @property {boolean} encodeEmails
     * @property {boolean} openLinksInNewWindow
     * @property {boolean} backslashEscapesHTMLTags
     * @property {boolean} emoji
     * @property {boolean} underline
     * @property {boolean} completeHTMLDocument
     * @property {boolean} metadata
     * @property {boolean} splitAdjacentBlockquotes
     */
    options: {
      type: Object,
      required: false,
      default: () => ({}),
    },

    /**
     * Showdown extensions
     *
     * @see https://github.com/showdownjs/showdown#extensions
     */
    extensions: {
      type: [Object, Array],
      required: false,
      default: null,
    },

    /**
     * Treat the HTML string as Vue template. Require full build of Vue (runtime + complier)
     */
    vueTemplate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    converter () {
      // converter instance of showdown
      const converter = new showdown.Converter({
        extensions: this.extensions || undefined,
      })

      // set flavor of this instance
      if (this.flavor !== null) {
        converter.setFlavor(this.flavor)
      }

      // set options of this instance (override flavor)
      for (const key in this.options) {
        converter.setOption(key, this.options[key])
      }

      return converter
    },

    inputMarkdown () {
      return this.markdown === null ? this.$slots.default[0].text : this.markdown
    },

    outputHtml () {
      return this.converter ? this.converter.makeHtml(this.inputMarkdown) : ''
    },
  },

  render (h) {
    if (this.vueTemplate) {
      return h({
        template: `<${this.tag}>${this.outputHtml}</${this.tag}>`,
      })
    }

    return h(this.tag, {
      domProps: {
        innerHTML: this.outputHtml,
      },
    })
  },
}
