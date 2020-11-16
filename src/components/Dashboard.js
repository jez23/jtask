import React from 'react';
import DashBoardOverViewSection from './DashBoardOverViewSection';
/* import SearchWidget from './SearchWidget'; */
import Header from './Header';



function Dashboard(props){
    return (
        <div className="dashBoard">
            <Header />
            {/*    <SearchWidget /> */}
            <h1><i className="fa fa-list-alt" aria-hidden="true"></i> Sprint Dashboard</h1>
            <DashBoardOverViewSection 
            />
        </div>
    )
}

export default Dashboard;