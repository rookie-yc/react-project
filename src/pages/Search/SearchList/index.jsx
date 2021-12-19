import React, { useState, useEffect} from "react";
import SearchView from "../SearchView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";


const SearchList = (props) => {

  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  function loadMoreHandle() {
    http();
  }

  function http() {
    console.log(props.search);
    api.search({
      search:props.search
    }).then(res =>{
      if(res.status === 200) {
        setSearchData(searchData.concat(res.data.result.data));
        setHasMore(res.data.result.hasMore);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    http();

    return () => {
      setSearchData([]);
      setHasMore(false);
    }
  }, [props.search])

  return(
    <div>
      {
        searchData.length > 0?
        <SearchView search= {searchData}/> :
        <div>等待数据加载</div>
      }
      {
        hasMore ?
        <LoadMore onLoadMore= { loadMoreHandle }/> :
        <div>
          被你看完了
        </div>
      }
    </div>
  )
}

export default SearchList;