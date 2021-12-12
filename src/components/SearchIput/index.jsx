import React, { useState } from "react";
import "./style.less"
import { useNavigate  } from "react-router-dom"

const SearchIput = (props) => {
  const [keywords, setKeywords] = useState("");
  let navigate = useNavigate()

  function keyUpHandle(e) {
    if(keywords.length > 0) {
      if(e.keyCode === 13) {
        navigate("/search/"+keywords)
      }
    }
  }

  function handleChange(e) {
    setKeywords(e.target.value)
  }

  return(
    <input
      className="search-input"
      type="text"
      onKeyUp= { keyUpHandle }
      value={keywords}
      onChange={ handleChange }
    >
    </input>
  )
}

export default SearchIput;