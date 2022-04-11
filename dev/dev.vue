<template>
  <p>Input:</p>

  <textarea
    v-model="markdownInput"
    :rows="markdownInput.split('\n').length + 2"
  >
  </textarea>

  <p>Output:</p>

  <VueShowdown
    :markdown="markdownInput"
    :options="options"
    :extensions="extensions"
    :vue-template="vueTemplate"
    :vue-template-data="vueTemplateData"
  >
  </VueShowdown>

  <hr />

  <p>Props:</p>

  <ul>
    <li>
      <span>vueTemplate</span>
      <input v-model="vueTemplate" type="checkbox" />
    </li>

    <li>
      <span>vueTemplateData</span>
      <textarea
        :value="vueTemplateDataJson"
        :rows="vueTemplateDataJson.split('\n').length + 2"
        @input="onVueTemplateDataInput"
      />
      <button @click="onVueTemplateDataSet">set</button>
    </li>
  </ul>

  <hr />

  <p>Extensions:</p>

  <ul>
    <li v-for="ext in validExtensions" :key="ext">
      <span>{{ ext }}</span>

      <input v-model="extensions" type="checkbox" :value="ext" />
    </li>
  </ul>

  <hr />

  <p>Options:</p>

  <ul>
    <li v-for="opt in Object.keys(options)" :key="opt">
      <span>{{ opt }}</span>

      <input
        v-model="options[opt]"
        :type="typeof options[opt] === 'boolean' ? 'checkbox' : 'text'"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';

const markdownInput = ref(`\
## Vue-showdown dev

- [ ] tasklists
- [ ] ghMentions: @meteorlxy
- [x] emoji: :tada:
- [x] simplifiedAutoLink: https://vue-showdown.js.org
- [ ] replaceMarkdownByShowdown: 'markdown' will be replaced by 'showdown'

<VueShowdown markdown="## Enable \`vueTemplate\` to parse vue template"/>

<span v-for="n in 5"> {{ n }}</span>

{{ message }}
`);

const validExtensions = ref(['replaceMarkdownByShowdown']);

const vueTemplate = ref(false);
const vueTemplateData = ref({ message: 'hello' });
const vueTemplateDataJson = computed(() =>
  JSON.stringify(vueTemplateData.value, null, 2),
);
const vueTemplateDataText = ref('');
const onVueTemplateDataInput = (event): void => {
  vueTemplateDataText.value = event.target?.value;
  event.preventDefault();
};
const onVueTemplateDataSet = (): void => {
  vueTemplateData.value = JSON.parse(vueTemplateDataText.value);
};

const extensions = ref([]);

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
  ellipsis: true,
  completeHTMLDocument: false,
  metadata: false,
  splitAdjacentBlockquotes: false,
});
</script>

<style>
* {
  box-sizing: border-box;
}
textarea {
  width: 100%;
}
</style>
