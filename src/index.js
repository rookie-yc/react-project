import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/common.less"
import "./assets/css/font.css"
import "./assets/css/iconfont.css"
import AppRouter from "./router"


ReactDOM.render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


