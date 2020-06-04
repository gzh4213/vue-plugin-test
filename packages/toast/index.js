import ToastComponent from './src/toast.vue'

let $vm

const plugin = {
  install (vue) {
    const Toast = vue.extend(ToastComponent)

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    const toast = {
      show (options = {}) {
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          $vm.text = options.text
        }
        $vm.show = true
        $vm.width = options.width
        // eslint-disable-next-line no-return-assign
        setTimeout(() => $vm.show = false, options.delay || 2000)
      },
      hide () {
        $vm.show = false
      }
    }

    if (!vue.$toast) {
      vue.$toast = toast
    }

    vue.mixin({
      created () {
        this.$toast = toast
      }
    })
  }
}

export default plugin
export const install = plugin.install
