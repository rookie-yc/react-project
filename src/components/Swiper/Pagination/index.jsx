import React from "react";
import classNames from "classnames";
import "./style.less"

const Pagination = (props) => {
  const arr = new Array(props.len).fill(1);
  let currentIndex = props.currentIndex
  return (
    <div className="swiper-pagination">
      <ul>
        {
          arr.map((ele, index) => {
            return <li key={index} className={ classNames({'selected': currentIndex === index})}></li>
          })
        }
      </ul>
    </div>
  )
}

export default Pagination