import React from "react";
import Item from "./Item";


const SearchView = (props) => {
  console.log(props.search)
  return(
    <div>
      {
        props.search.map((ele, index) => {
          return <Item  data={ele} key={index}/>
        })
      }
    </div>
  )
}

export default SearchView;