<template>
    <main-layout>
      <p style="text-align: center;">Pictures</p>
      <img src="images/familia.jpg" id="familia"><img>
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
  </style>