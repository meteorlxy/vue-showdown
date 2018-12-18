---
sidebar: auto
---

# Playground :running:

## Input your markdown here

<textarea class="markdown-input" placeholder="Input your markdown here" :rows="rows" v-model="markdownText"/>

## Output HTML here

<section class="markdown-output">
  <VueShowdown
    :markdown="markdownText"
    :options="options"/>
</section>

## Set showdown options

<ul class="showdown-options">
  <li v-for="opt in Object.keys(options)">
    <span>{{ opt }}</span>
    <input
      v-model="options[opt]"
      :type="typeof options[opt] === 'boolean' ? 'checkbox' : 'text'">
  </li>
</ul>

<script>
export default {
  data () {
    return {
      markdownText: '### Hello, Vue Showdown! :tada: \n\nInput your markdown here and get the HTML right now!\n\nSet the `emoji` option below to enable emoji parsing! :smile:',

      options: {
        omitExtraWLInCodeBlocks: false,
        noHeaderId: false,
        prefixHeaderId: false,
        rawPrefixHeaderId: false,
        ghCompatibleHeaderId: false,
        rawHeaderId: false,
        headerLevelStart: false,
        parseImgDimensions: false,
        simplifiedAutoLink: false,
        excludeTrailingPunctuationFromURLs: false,
        literalMidWordUnderscores: false,
        literalMidWordAsterisks: false,
        strikethrough: false,
        tables: false,
        tablesHeaderId: false,
        ghCodeBlocks: true,
        tasklists: false,
        smoothLivePreview: false,
        smartIndentationFix: false,
        disableForced4SpacesIndentedSublists: false,
        simpleLineBreaks: false,
        requireSpaceBeforeHeadingText: false,
        ghMentions: false,
        ghMentionsLink: 'https://github.com/{u}',
        encodeEmails: true,
        openLinksInNewWindow: false,
        backslashEscapesHTMLTags: false,
        emoji: false,
        underline: false,
        completeHTMLDocument: false,
        metadata: false,
        splitAdjacentBlockquotes: false,
      },
    }
  },

  computed: {
    contentRows () {
      return this.markdownText.split('\n').length - 1
    },

    rows () {
      return this.contentRows < 3 ? 5 : this.contentRows + 2
    },
  }
}
</script>

<style lang="stylus" scoped>
@import '~@app/style/config.styl'

.markdown-input
  resize none
  outline none
  width 100%
  margin 15px 0
  padding 15px
  font-size 16px
  background-color #fdfdfd
  border 1px solid $borderColor
  border-radius 5px
  box-sizing border-box
  &:focus
    background-color #ffffff
    box-shadow 0 0 1px 1px lighten($accentColor, 50%)
  &::placeholder
    color $textLightColor
.markdown-output
  padding 10px 15px
  margin 15px 0
  background-color #fafbfc
  border 1px solid $borderColor
  border-radius 5px
</style>
