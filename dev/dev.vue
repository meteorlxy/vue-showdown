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
    :vue-template="props.vueTemplate"
  >
  </VueShowdown>

  <hr />

  <p>Props:</p>

  <ul>
    <li v-for="prop in Object.keys(props)" :key="prop">
      <span>{{ prop }}</span>
      <input
        v-model="props[prop]"
        :type="typeof props[prop] === 'boolean' ? 'checkbox' : 'text'"
      />
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

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'Dev',

  setup() {
    const markdownInput = ref(`\
## Vue-showdown dev

- [ ] tasklists
- [ ] ghMentions: @meteorlxy
- [x] emoji: :tada:
- [x] simplifiedAutoLink: https://vue-showdown.js.org
- [ ] replaceMarkdownByShowdown: 'markdown' will be replaced by 'showdown'

<VueShowdown markdown="## Enable \`vueTemplate\` to parse vue template"/>

<span v-for="n in 5"> {{ n }}</span>
`);

    const validExtensions = ref(['replaceMarkdownByShowdown']);

    const props = reactive({
      vueTemplate: false,
    });

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
      completeHTMLDocument: false,
      metadata: false,
      splitAdjacentBlockquotes: false,
    });

    return {
      markdownInput,
      validExtensions,
      props,
      extensions,
      options,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}
textarea {
  resize: none;
  width: 100%;
}
</style>
