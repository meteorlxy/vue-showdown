---
sidebar: auto
---

# Playground :running:

## 输入你的 Markdown 代码

<textarea
  class="markdown-input"
  placeholder="在这里输入你的 Markdown 代码"
  :rows="rows"
  v-model="markdownText"
/>

## 输出 HTML

<section class="markdown-output">
  <VueShowdown
    :markdown="markdownText"
    :options="options"
    :vue-template="props.vueTemplate"/>
</section>

## 设置 vue-showdown props

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

## 设置 showdown options

<ul class="showdown-options">
  <li v-for="opt in Object.keys(options)">
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

输入你的 Markdown 代码，立即得到相应的 HTML！

开启下面的 \`emoji\` 选项，启用 emoji 解析！ :smile:

开启下面的 \`vueTemplate\` Prop，启用 Vue 模板解析！

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
