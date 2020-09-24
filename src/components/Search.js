import React from 'react';

function Search(){
    return (
        <div className="search">
            <div className="searchContainer"> 
                <input type="text" placeholder="search..."></input>
                <div className="searchIcon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>    
        </div>
    )
}

export default Search;