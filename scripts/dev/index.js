import Vue from 'vue'
import VueShowdown, { showdown } from 'vue-showdown'

showdown.extension('replaceMarkdownByShowdown', () => [{
  type: 'lang',
  regex: /markdown/g,
  replace: 'showdown',
}])

Vue.use(VueShowdown)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      markdownInput: `\
## Vue-showdown dev

- [ ] tasklists
- [ ] ghMentions: @meteorlxy
- [x] emoji: :tada:
- [x] simplifiedAutoLink: https://vue-showdown.js.org
- [ ] replaceMarkdownByShowdown: 'markdown' will be replaced by 'showdown'

<VueShowdown markdown="## Enable \`vueTemplate\` to parse vue template"/>

<span v-for="n in 5"> {{ n }}</span>
`,

      validExtensions: [
        'replaceMarkdownByShowdown',
      ],

      props: {
        vueTemplate: false,
      },

      extensions: [],

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
})
