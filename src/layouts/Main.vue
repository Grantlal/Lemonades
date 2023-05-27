<template>
  <div class="container">
      <li id="routerList">
        <v-link href="/">Home</v-link>
        <v-link href="/calendar">Calendar</v-link>
        <v-link href="/registry">Registry</v-link>
        <v-link href="/pictures">Pictures</v-link>
      </li>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #d9f5c3;
  }
  #routerList {
    list-style-type: none;
    list-style-position: inside;
    margin: 1px;
  }
</style>
