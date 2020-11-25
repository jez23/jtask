import React from 'react';
import {Route } from 'react-router-dom';


import SearchWidget from './SearchWidget';
import Header from './Header';
import DashBoardOverViewSection from './pages/DashBoardOverViewSection';
import Modal from './pages/Modal';
import EditModal from './pages/EditModal';
import OnHoldModal from './pages/OnHoldModal';
import BacklogModal from './pages/BacklogModal';
import ViewTicketModal from './pages/ViewTicketModal';
import UserModal from './pages/UserModal';
import SearchResults from './pages/SearchResults';
import AddUser from './pages/AddUser';



function Dashboard(props){
    return (
        <div className="dashBoard">
            <Header />
           {/*  <h1><i className="fa fa-list-alt" aria-hidden="true"></i> Sprint Dashboard</h1> */}
            <Route path="/" exact component={DashBoardOverViewSection} />
            <Route path="/newticket" component={Modal} />
            <Route path="/editticket" component={EditModal} />
            <Route path="/onholdtickets" component={OnHoldModal} />
            <Route path="/backlog" component={BacklogModal} />
            <Route path="/ViewTicket" component={ViewTicketModal} />
            <Route path="/users" exact component={UserModal} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/users/add" component={AddUser} />

        </div>
    )
}

export default Dashboard;