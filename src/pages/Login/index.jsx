import React from "react";
import LoginView from "./LoginView";
import { useDispatch } from "react-redux";
import * as loginActions from "../../redux/actions/login";

const Login = () => {

  const dispatch = useDispatch();
  
  function onLoginHandle(user) {
    dispatch(loginActions.setLogin(user))
    localStorage.setItem("zufang", JSON.stringify(user))
    window.history.back()
  }

  return(
    <LoginView onLoginEvent={ onLoginHandle }/>
  )
}

export default Login;