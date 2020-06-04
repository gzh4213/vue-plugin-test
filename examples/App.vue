<template>
  <div id="app">
    Hello Vue
    <div class="container">
      <Button @click="onShowToast">Toast</Button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created () {
    console.log('this:',this)
  },
  methods: {
    onShowToast () {
      this.$toast.show('我是toast内容')
    }
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
