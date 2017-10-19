<template>
  <div id="app">
    <TheHeader />
    
    <main class="container">
      <TheDemo class="my-3" />
    </main>
    
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/docs/components/TheHeader'
import TheFooter from '@/docs/components/TheFooter'
import TheDemo from '@/docs/components/TheDemo'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheDemo,
  },
}
</script>

<style type="text/css" lang="scss" scoped>
#docs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


