import React from "react";

import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from "../pages/Main/Layout";

import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import City from "../pages/City";
import Search from "../pages/Search"

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Home/> }></Route>
          <Route path="life/*" element={ <LifeService/> }></Route>
          <Route path="shop/*" element={ <Shop/> }></Route>
          <Route path="user/*" element={ <User/> }></Route>
        </Route>
        <Route path="city/*" element={ <City/> }></Route>
        <Route path="search/:keywords" element={ <Search/> }></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;