<template>
  <main-layout>
    <p style="text-align: center;">Registry</p>
    <img src="images/fair.jpg" id="fairPic"><img>
    <ul id="registryList">
      <li><a href="https://www.target.com/p/kitchenaid-5-5-quart-bowl-lift-stand-mixer-ksm55/-/A-88857295?preselect=88347594#lnk=sametab">Ice Blue Mixer</a></li>
      <li>Burrito</li>
    </ul>

  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    components: {
      MainLayout
    }
  }
</script>

<style>
#registryList {
  list-style-type: upper-roman;
}

#fairPic {
  max-width: 600px;
}
</style>
