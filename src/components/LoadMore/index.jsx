import React, { useEffect, useRef, useState } from "react";
import "./style.less"

const LoadMore = (props) => {
  const more = useRef();
  const [getTop, setGetTop] = useState(10000);

  useEffect(() => {
    let winHeight = document.documentElement.clientHeight;
    let timer = null
    function scorllHandle() {
      if(more.current) {
        setGetTop(more.current.getBoundingClientRect().top);
        if(timer) {
          clearTimeout(timer)
        } else {
          timer = setTimeout(() => {
            if(winHeight > getTop) {
              props.onLoadMore();
            }
          },300)
        }
      }
    }
    window.addEventListener("scroll", scorllHandle)
    return () => {
      // window.removeEventListener("scroll",scorllHandle)
      // clearTimeout(timer)
    }
  },[getTop])
  return(
    <div className="load" ref={ more }>
      加载更多
    </div>
  )
}

export default LoadMore;