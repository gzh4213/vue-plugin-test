<template>
  <transition name="fade">
    <div v-if="show" class="mf-toast">
      <div class="mf-mask--transparent"></div>
      <div
        class="mf-toast-body"
        :style="{
          width: width ? `${width}vw` : 'auto',
          maxWidth: width ? `${width}vw` : '50vw'
        }"
        v-html="text"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    width: {
      type: Number // 手动设置宽度,rem
    }
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.mf-toast {
  transition: opacity 0.4s;
}
.mf-mask--transparent {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.mf-toast-body {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  padding: 12px 16px;
  border-radius: 8px;
  max-width: 230px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  font-weight: normal;
  /* animation: fadeIn 400ms ease; */
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
