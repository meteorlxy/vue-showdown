<template>
  <header>
    <div class="jumbotron jumbotron-fluid text-center bg-transparent m-0">
      <img src="/static/img/logo.png">
      
      <h1 class="my-4">
        Vue Component for 
        <a
          class="card-link"
          href="https://github.com/showdownjs/showdown"
          target="_blank"
        >
          showdown.js
        </a>
      </h1>
      
      <a
        class="btn btn-outline-secondary btn-lg my-3"
        href="https://github.com/meteorlxy/vue-showdown"
        target="_blank"
      >
        <i class="fa fa-github"></i> GitHub
      </a>
      
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style type="text/css" lang="scss" scoped>
header {
  background: linear-gradient(to top ,#fff , #d5ffc1);
}
</style>