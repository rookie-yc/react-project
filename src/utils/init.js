import store from "../redux/store"
import * as loginActions from "../redux/actions/login"

/**
 * 初始化登陆信息
 */

if (localStorage.getItem("zufang")) {
    store.dispatch(loginActions.setLogin(JSON.parse(localStorage.getItem("zufang"))))
}