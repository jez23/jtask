import React, { useContext } from 'react';

import Context from '../../contexts/Context';
import StoredStatusCard from '../StoredStatusCard';


const SearchResults = () => {

    const {  searchTerm, showSearchResultsOnPage } = useContext(Context);

    return (
        <div className="searchResultsContainer">
             <div className="searchResults">
                <h2><i class="fa fa-user-plus" aria-hidden="true"></i> SEARCH RESULTS</h2>
                {searchTerm && <h4>Showing Results for: "{searchTerm}"</h4>}

                {showSearchResultsOnPage().map(ticket => {
                    return  <StoredStatusCard 
                    key={ticket.id} {...ticket}
                ></StoredStatusCard>
                })}
              </div>
        </div>
    )
}

export default SearchResults;