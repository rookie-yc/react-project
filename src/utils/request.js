import axios from "axios"
import { info } from "console"
import { config } from "dotenv/types"
import qs from  "querystring"

/**
 * 处理失败的方法
 * status:状态吗
 * infor:信息
 */

const errorHandle = (status, info) => {
  switch(status) {
    case 400:
      console.log("语义有误，当前请求无法被服务器理解")
      break;
    case 401:
      console.log("服务器认证失败")
      break;
    case 403:
      console.log("服务器已理解请求，但是拒绝执行它")
      break;
    case 404:
      console.log("请检查网络请求地址")
      break;
    case 500:
      console.log("服务器遇到未知错误");
      break;
    case 502:
      console.log("请求超时");
      break;
    default:
      console.log(info)
      break;
    }
}

const instance = axios.create({
  timeout:5000
})

instance.interceptors.request.use(
  config => {
    if(config.method === "post") {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
  error => {
    const { response } = error;
    errorHandle(response.status, response.info)
  }
)