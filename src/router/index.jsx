import React from "react";

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "../pages/Home/HomeHotView";
import LifeService from "../pages/LifeService";
import Shop from "../pages/Shop";
import User from "../pages/User";

import BottomNav from "../components/BottomNav";

const AppRouter = () => {
  return (
    <Router>
      <BottomNav/>
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="life/*" element={ <LifeService/> }></Route>
        <Route path="shop/*" element={ <Shop/>}></Route>
        <Route path="user/*" element={ <User/> }></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;