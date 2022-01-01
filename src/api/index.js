import axios from "../utils/request"

/**
 * 路径地址
 */
const base = {
    baseUrl:"http://101.42.228.57:7788",
    cityUrl:"/api/aj/getcitycode",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    search:"/api/search",
    details:"/api/details",
    login:"/api/login",
    comment:"/api/comment",
    comentOrder:"/api/order/comment",
    submitComment:"/api/order/submit/comment"
}


/**
 * 请求方法
 */
const api = {
    /**
     * 获取首页热门产品1
     */
    getHomtHot1(params){
        return axios.get(base.baseUrl + base.homehot1,{
            params
        })
    },
    getHomtHot2(params){
        return axios.get(base.baseUrl + base.homehot2,{
            params
        })
    },
    /**
     * 城市列表
     */
    getCityLists(){
        return axios.get(base.cityUrl)
    },

    search(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    details(params){
        return axios.get(base.baseUrl + base.details,{
            params
        })
    },
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    comment(params){
        return axios.get(base.baseUrl + base.comment,{
            params
        })
    },
    comentOrder(params){
        return axios.get(base.baseUrl + base.comentOrder,{
            params
        })
    },
    submitComment(params){
        return axios.post(base.baseUrl + base.submitComment,params)
    }
}

export default api;