import React from "react";
import { Outlet } from "react-router";
import BottomNav from "../../components/BottomNav"

const Layout = (props) => {
  console.log(props.children);
  return (
    <div>
      <Outlet/>
      <BottomNav/>
    </div>
  )
} 

export default Layout;