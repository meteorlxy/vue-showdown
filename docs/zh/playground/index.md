---
sidebar: auto
---

# Playground :running:

## 输入你的 Markdown 代码

<textarea class="markdown-input" placeholder="在这里输入你的 Markdown 代码" :rows="rows" v-model="markdownText"/>

## 输出 HTML

<section class="markdown-output">
  <VueShowdown :markdown="markdownText" :options="options"/>
</section>

## 设置 showdown 的 options

<ul class="markdown-options">
  <li v-for="opt in Object.keys(options)">
    <input type="checkbox" v-model="options[opt]">
    <span>{{ opt }}</span>
  </li>
</ul>

<script>
export default {
  data () {
    return {
      markdownText: '### Hello, Vue Showdown! :tada: \n\n输入你的 Markdown 代码，立即得到相应的 HTML！\n\n开启下面的`emoji`选项，启用emoji解析！ :smile:',
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
        splitAdjacentBlockquotes: false
      }
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
@import '~@default-theme/styles/config.styl'

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
.markdown-options
  padding 0
  list-style-type none
</style>
