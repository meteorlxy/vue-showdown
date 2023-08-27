<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import CustomComponent from './CustomComponent.vue';

const markdownInput = ref(`\
## Vue-showdown dev

- [ ] tasklists
- [ ] ghMentions: @meteorlxy
- [x] emoji: :tada:
- [x] simplifiedAutoLink: https://vue-showdown.js.org
- [ ] replaceMarkdownByShowdown: 'markdown' will be replaced by 'showdown'

<VueShowdown markdown="## Enable \`vueTemplate\` to parse vue template"/>

<CustomComponent />

<span v-for="n in 5"> {{ n }}</span>

{{ message }}
`);

const validExtensions = ref(['replaceMarkdownByShowdown']);

const vueTemplate = ref(false);
const vueTemplateData = ref<Record<string, unknown>>({ message: 'hello' });
const vueTemplateDataJson = computed(() =>
  JSON.stringify(vueTemplateData.value, null, 2),
);
const vueTemplateDataText = ref('');
const onVueTemplateDataInput = (event: Event): void => {
  vueTemplateDataText.value =
    (event.target as HTMLInputElement | null)?.value ?? '';
  event.preventDefault();
};
const onVueTemplateDataSet = (): void => {
  vueTemplateData.value = JSON.parse(vueTemplateDataText.value) as Record<
    string,
    unknown
  >;
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

<template>
  <div class="container">
    <div class="container-item left">
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
    </div>

    <div class="right">
      <div class="container-item right-top">
        <p>Input:</p>

        <textarea
          v-model="markdownInput"
          :rows="markdownInput.split('\n').length + 2"
        >
        </textarea>
      </div>

      <div class="container-item right-bottom">
        <p>Output:</p>

        <VueShowdown
          :markdown="markdownInput"
          :options="options"
          :extensions="extensions"
          :vue-template="vueTemplate"
          :vue-template-data="vueTemplateData"
          :vue-template-components="{ CustomComponent }"
        >
        </VueShowdown>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
textarea {
  width: 100%;
}
.container {
  display: flex;
}
.container-item {
  padding: 10px;
  overflow: auto;
}
.left {
  height: 100vh;
  width: 30vw;
}
.right {
  height: 100vh;
  width: 70vw;
}
.right-top,
.right-bottom {
  width: 70vw;
}
.right-top {
  height: 40vh;
  border-bottom: 1px solid #aaaaaa;
}
.right-bottom {
  height: 60vh;
  border-bottom: 1px solid #aaaaaa;
}
</style>
