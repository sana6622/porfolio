<template>
  <div class="home">
    <h1>Hello, This is Home Page. 試了好幾次終於成功了</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
</style>
