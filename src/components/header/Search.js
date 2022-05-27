import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../contexts/Context";

function Search() {
  const { searchTerm, setSearchTerm } = useContext(Context);
  const history = useHistory();

  const handleSearch = (word) => {
    setSearchTerm(word);
    history.push("/searchresults");
  };

  return (
    <div className="header__search">
      <div className="header__search_container">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => handleSearch(e.target.value)}
        ></input>
        <div className="searchIcon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Search;
