# vue-plugin-test
vue组件库测试
## install
```
npm i vue-plugin-gzh-test
```

## examples
```
npm run serve
```

## usage

### toast
```
// pages/index.js: 打包入口

import { Toast } from 'vue-plugin-gzh-test'
import 'vue-plugin-gzh-test/lib/gzh-ui.css'
Vue.use(Toast)
```

```
// pages/index.vue: 页面组件
this.$toast.show('aaa')
```


