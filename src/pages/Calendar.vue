<template>
  <main-layout>
    <p style="text-align: center;">Calendar</p>
    <img src="images/rangs.jpg" id="rangos"><img>
    <img src="images/calendar.jpg" id="calendar"><img>
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
#rangos {
  max-width: 800px;
}

#calendar {
  max-width: 800px;
}
</style>