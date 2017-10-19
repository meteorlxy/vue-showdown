<template>
  <section>
    <h3>Demo</h3>
    
    <hr>
    
    <div>
      <p>Input Markdown</p>
      
      <textarea
        v-model="inputMarkdown"
        class="form-control"
        rows="6"
      >
      </textarea>
    </div>
    
    <div class="mt-3">
      <p>Output HTML</p>
      
      <div class="card">
        <div class="card-body">
          <VueShowdown :markdown="inputMarkdown"></VueShowdown>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueShowdown from '@/components/VueShowdown'
export default {
  name: 'TheDemo',
  components: {
    VueShowdown,
  },
  data () {
    return {
      inputMarkdown: '### Usage\n\n---\n```html\n<vue-showdown>{{ markdownText }}</vue-showdown>\n```\nor\n```html\n<vue-showdown :markdown="markdownText" />\n```'
    }
  },
}
</script>