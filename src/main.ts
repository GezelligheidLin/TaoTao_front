import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import Store, {key} from "./store"

const app = createApp(App);
/*定义全局axios变量$http*/
app.config.globalProperties.$http = axios
/*axios拦截器自动将token加入请求头*/
axios.interceptors.request.use((config: any) => {
    // 在发送请求之前做些什么
    // 判断是否存在token,如果存在将每个页面header添加token
    if (sessionStorage.getItem('token')) {
        //  注意config.headers.后的变量名要与后端设置的变量名相统一 : authorization
        config.headers.authorization = sessionStorage.getItem('token');
    }
    return config
})

app.use(Store,key).use(router).mount('#app');
