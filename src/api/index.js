import axios from "../utils/request";

/**
 * 路径地址
 */

const base = {
  baseUrl:"http://localhost:7788",
  homehot1:"/api/home/hot1",
  homehot2:"/api/home/hot2",
}

/**
 * 请求方法
 */

const api = {
  // 获取首页热门商品
  getHomeHot1() {
    return axios.get(base.baseUrl + base.homehot1)
  },
  getHomeHot2() {
    return axios.get(base.baseUrl + base.homehot2)
  }
}

export default api;