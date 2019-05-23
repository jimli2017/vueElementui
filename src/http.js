import axios from 'axios'
import { Loading, Message} from 'element-ui';

let loading;
function startloading(){
    loading=Loading.service({
        lock:true,//是否锁定
        text:'拼命加载中...',
        background:'rgba(0.0.0.0.7)'
    })
}
function stoploading(){
    loading.close()
}
//请求拦截
axios.interceptors.request.use(config=>{
    //加载动画
    console.log("请求拦截");
    startloading();
    return config;
},error=>{
    return Promise.reject(error)
})


//响应拦截
axios.interceptors.response.use(response=>{
    //结束加载动画
    console.log("响应拦截");
    stoploading();
    return response;
},error=>{
    stoploading();
    Message.error(error.response.data);
    return Promise.reject(error);
})

export default axios;