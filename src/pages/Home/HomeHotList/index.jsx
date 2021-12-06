import React, { useState, useEffect} from "react";
import api from "../../../api";

const HomeHotList = () => {
  const [hot1List, setHot1List ] = useState([])
  const [hot2List, setHot2List ] = useState([])

  useEffect(() => {
    api.getHomeHot1().then(res => {
      if(res.data.status === 200) {
        console.log(res.data.result);
        setHot1List(res.data.result)
      }
    })
  }, [])

  useEffect(() => {
    api.getHomeHot2().then(res => {
      if(res.data.status === 200) {
        setHot2List(res.data.result)
      }
    })
  }, [])

  return(
    <div>

    </div>
  )
}

export default HomeHotList;