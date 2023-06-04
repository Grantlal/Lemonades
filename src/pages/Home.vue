<template>
  <main-layout>
    <p style="text-align: center;">The LaLondes</p>
    <img src="images/ceremony-2.jpeg" id="tacos"><img>
    <div  style="text-align: center;">
    <p>HELLO EVERYONE!!!</p>
    <p>Thank you for coming to celebrate the union of Maria and Grant</p>
    <p>At this point we've gotten married, but will use this space to share a bunch of the pictures!</p>
    <p>It was a phenominal time, and we are still waiting for more pictures. So stay tuned! </p>
    </div>
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
#tacos {
  max-width: 800px;
}

</style>