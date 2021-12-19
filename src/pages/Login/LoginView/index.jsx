import React, { useState } from "react";
import "./style.less"
import api from "../../../api";

const LoginView = (props) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function onSubmitHandle(e) {
    e.preventDefault();

    api.login({
      username,
      password
    }).then(res => {
      if(res.data.status === 200) {
        //登录成功
        props.onLoginEvent(res.data)
      } else {
        console.log("登录失败");
      }
    })
  }

  function changeHandle(e) {
    if (e.target.name === "username") {
        setUsername(e.target.value)
    }
    if (e.target.name === "password") {
        setPassword(e.target.value)
    }
  }
  return(
    <div id="login-container">
      <form onSubmit= { onSubmitHandle }>
          <div className='input-container phone-container'>
              <i className="icon-tablet"></i>
              <input
                  type="text"
                  name="username"
                  placeholder="用户名/手机号"
                  value={username}
                  onChange={changeHandle}
              />
          </div>
          <div className='input-container password-container'>
              <i className="icon-key"></i>
              <button>发送验证码</button>
              <input
                  type="password"
                  name="password"
                  placeholder="输入验证码"
                  value={password}
                  onChange={changeHandle}
              />
          </div>
          <button className="btn-login">登录</button>
      </form>
    </div>
  )
}

export default LoginView;