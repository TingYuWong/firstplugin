<template>
  <HelloWorld />
  <Plugin :txt="txt">
    <div class="hi">Hi</div>
  </Plugin>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      txt: 'Outside Text',
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.hi {
  width: 300px;
  height: 200px;
  border: 1px solid salmon;
}
</style>
