import Vue from 'vue'
import App from './App.vue'

import { Button, Icon, Input, List, Checkbox } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)
Vue.component(List.name, List)
Vue.component(Checkbox.name, Checkbox)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)
Vue.use(List)
Vue.use(List.Item)
Vue.use(Checkbox)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')