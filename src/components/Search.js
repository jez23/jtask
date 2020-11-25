import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../contexts/Context';

function Search(){

    const {  searchTerm, setSearchTerm } = useContext(Context);
    const history = useHistory();

  
    const search = (word) => {
        if(word.length === 0){
           
                history.goBack();
           
        }else {
            setSearchTerm(word);
            history.push('/searchresults')
        }
    }
    return (
        <div className="search">
            <div className="searchContainer"> 
                <input type="text" value={searchTerm} placeholder="search..." onChange={(e) => search(e.target.value)}></input>
                <div className="searchIcon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>    
        </div>
    )
}

export default Search;