---
sidebar: auto
---

# Playground :running:

## Input your markdown here

<textarea
 class="markdown-input"
 placeholder="Input your markdown here"
 :rows="rows"
 v-model="markdownText"
/>

## Output HTML here

<section class="markdown-output">
  <VueShowdown
    :markdown="markdownText"
    :options="options"
    :vue-template="props.vueTemplate"/>
</section>

## Set vue-showdown props

<ul class="vue-showdown-props">
  <li
    v-for="prop in Object.keys(props)"
    :key="prop"
  >
    <span>{{ prop }}</span>
    <input
      v-model="props[prop]"
      :type="typeof props[prop] === 'boolean' ? 'checkbox' : 'text'">
  </li>
</ul>

## Set showdown options

<ul class="showdown-options">
  <li
    v-for="opt in Object.keys(options)"
    :key="opt">
    <span>{{ opt }}</span>
    <input
      v-model="options[opt]"
      :type="typeof options[opt] === 'boolean' ? 'checkbox' : 'text'">
  </li>
</ul>

<script setup>
import { computed, reactive, ref } from 'vue'

const markdownText = ref(`\
### Hello, Vue Showdown! :tada:

Input your markdown here and get the HTML right now!

Set the \`emoji\` option below to enable emoji parsing! :smile:

Set the \`vueTemplate\` prop below to enable vue template parsing!

<span v-for="n in 5" :key="n" v-text="n"/>`)

const props = reactive({
  vueTemplate: false,
})

const options = reactive({
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
})

const contentRows = computed(() => markdownText.value.split('\n').length - 1)

const rows = computed(() => contentRows.value < 3 ? 5 : contentRows.value + 2)
</script>
