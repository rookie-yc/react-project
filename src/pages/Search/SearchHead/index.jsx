import React from "react"
import "./style.less"
import SearchIput from "../../../components/SearchIput"
import LoadMore from "../../../components/LoadMore"

const SearchHeader = () => {

    function backHandle(){
        window.history.back();
    }

    return (
        <div id="search-header" className="clear-fix">
            <span className="back-icon float-left" onClick={ backHandle }>
                <i className="icon-chevron-left"></i>
            </span>
            <div className="input-container">
                <i className="icon-search"></i>
                <SearchIput/>
            </div>
        </div>
    )
}

export default SearchHeader