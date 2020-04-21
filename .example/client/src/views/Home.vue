<template>
  <div class="home">
    <img alt="ArsanDev" width="400" src="../assets/logo-fw.png">
    <HelloWorld msg="Welcome to Your Vue.js Front End App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
