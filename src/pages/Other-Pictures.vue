<template>
  <main-layout>
    <p style="text-align: center;">Other Pictures</p>
    <img src="images/rangs.jpg" class="rangos"><img>
    <img src="images/cute-dog.jpg" class="rangos"><img>
    <img src="images/grant-flowers.jpg" class="rangos"><img>
    <img src="images/prince-charming.jpg" class="rangos"><img>
    <img src="images/shrek-waffles.jpg" class="rangos"><img>
    <img src="images/speech.jpg" class="rangos"><img>


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
.rangos {
  max-width: 800px;
}

#calendar {
  max-width: 800px;
}
</style>