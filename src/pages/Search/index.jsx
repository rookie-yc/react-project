import React from "react";
import { useParams } from "react-router";
import SearchHeader from "./SearchHead";
import SearchList from "./SearchList";

const Search = () => {
  const params = useParams();
  return(
    <div>
      <SearchHeader/>
      <SearchList search={ params.keywords }/>
    </div>
  )
}
export default Search;