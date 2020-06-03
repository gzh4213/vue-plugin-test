<template>
  <div class="test">
    hello world
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.test {
  font-size: 20px;
  color: red;
}
</style>