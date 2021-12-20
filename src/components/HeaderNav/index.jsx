import React from "react";
import "./style.less"
import SearchIput from "../SearchIput";
import { Link } from "react-router-dom";

const HeaderNav = (props) => {

  return(
    <div id="home-header" className="clear-fix">
      <div className="home-header-left float-left">
        <Link to="/city">
          <span>{props.cityName}</span>
          <i className="icon-angle-down"></i>
        </Link>
      </div>
      <div className="home-header-right float-right">
        <Link to="/order">
          <i className="iconfont icon-car"></i>
        </Link>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <i className="icon-search"></i>
          <SearchIput />
        </div>
      </div>
    </div>
  )
}

export default HeaderNav;