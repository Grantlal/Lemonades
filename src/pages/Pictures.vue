<template>
    <main-layout>
      <p style="text-align: center;">Pictures</p>
      <img src="images/ceremony-1.jpeg" class="pictures"><img>
      <img src="images/luv.jpeg" class="pictures"><img>
      <img src="images/wedding-beauty-1.jpeg" class="pictures"><img>
      <img src="images/wedding-beauty-2.jpeg" class="pictures"><img>
      <img src="images/bridesmaids.jpeg" class="pictures"><img>
      <img src="images/bridesmaids-2.jpeg" class="pictures"><img>
      <img src="images/banjojo.jpeg" class="pictures"><img>
      <img src="images/da-look.jpg" class="rangos"><img>
      <img src="images/boards.jpeg" class="pictures"><img>
      <img src="images/looove.jpeg" class="pictures"><img>
      <img src="images/dancing.jpg" class="pictures"><img>

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
  #familia {
    max-width: 800px;
    align-self: center;
  }

  .pictures {
    max-width: 800px;
    align-self: center;
  }
  </style>