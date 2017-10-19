<template>
  <div
    :style="{ display: display }"
    v-html="outputHtml"
  >
  </div>
</template>

<script>
import showdown from 'showdown'
const converter = new showdown.Converter()
export default {
  name: 'VueShowdown',
  props: {
    markdown: {
      type: String,
      default: null,
    },
    display: {
      type: String,
      default: 'block',
    },
  },
  computed: {
    inputMarkdown () {
      return this.markdown === null ? this.$slots.default[0].text : this.markdown
    },
    outputHtml () {
      return converter.makeHtml(this.inputMarkdown)
    },
  },
}
</script>
