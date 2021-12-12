import React, { useState, useEffect} from "react";
import SearchView from "../SearchView";
import api from "../../../api";

const SearchList = (props) => {

  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    api.search({
      search:props.search
    }).then(res =>{
      if(res.status === 200) {
        setSearchData(res.data.result.data)
      }
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return(
    <div>
      {
        searchData.length > 0?
        <SearchView search= {searchData}/> :
        <div>等待数据加载</div>
      }
    </div>
  )
}

export default SearchList;