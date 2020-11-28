import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../contexts/Context';

function Search(){

    const {  searchTerm, setSearchTerm } = useContext(Context);
    const history = useHistory();

  
    const searchInput = (word) => {
            setSearchTerm(word);
            history.push('/searchresults')
    }
    return (
        <div className="search">
            <div className="searchContainer"> 
                <input type="text" value={searchTerm} placeholder="search..." onChange={(e) => searchInput(e.target.value)}></input>
                <div className="searchIcon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>    
        </div>
    )
}

export default Search;