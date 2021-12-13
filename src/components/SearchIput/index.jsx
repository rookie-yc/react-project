import React, { useState, useRef, useEffect } from "react";
import "./style.less"
import { useNavigate  } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import * as searchAction from "../../redux/actions/search"
import { useParams } from "react-router";


const SearchIput = (props) => {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate()
  const searchKey = useRef()
  const dispatch = useDispatch()
  const params = useParams()
  const reduxKeywords = useSelector(state => state.search)

  function keyUpHandle(e) {
    if(keywords.length > 0) {
      if(e.keyCode === 13) {
        navigate("/search/"+keywords)
        dispatch( searchAction.updaetSearch(keywords))
      }
    }
  }

  useEffect(() =>{
    if(params.keywords){
        dispatch(searchAction.updaetSearch(params.keywords))
    }else{
        dispatch(searchAction.updaetSearch(""))
    }
    setKeywords(reduxKeywords.search)
  },[reduxKeywords.search,params.keywords])

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
      ref= {searchKey}
    >
    </input>
  )
}

export default SearchIput;