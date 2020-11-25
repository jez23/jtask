import React, { useContext } from 'react';

import Context from '../../contexts/Context';
import StoredStatusCard from '../StoredStatusCard';


const SearchResults = () => {

    const {  searchTerm, showSearchResultsOnPage } = useContext(Context);



    return (
        <div>
              <h3><i className="fa fa-pencil" aria-hidden="true"></i> Search Results</h3>
              <h4>{searchTerm}</h4>



              {showSearchResultsOnPage().map(ticket => {
                  return  <StoredStatusCard 
                  key={ticket.id} {...ticket}
              ></StoredStatusCard>
              })}
        </div>
    )
}

export default SearchResults;