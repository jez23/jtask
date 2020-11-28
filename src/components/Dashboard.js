import React from 'react';
import {Route, Switch } from 'react-router-dom';

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
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import Error404 from './pages/Error404';



function Dashboard(props){
    return (
        <div className="dashBoard">
            <Header />
       
        <Switch >
            <Route path="/" exact component={DashBoardOverViewSection} />
            <Route path="/newticket" component={Modal} />
            <Route path="/editticket" component={EditModal} />
            <Route path="/onholdtickets" component={OnHoldModal} />
            <Route path="/backlog" component={BacklogModal} />
            <Route path="/ViewTicket" component={ViewTicketModal} />
            <Route path="/users" exact component={UserModal} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/users/add" component={AddUser} />
            <Route path="/user/edit" component={EditUser} />
            <Route path="/user/view" component={ViewUser}  /> 
            <Route component={Error404}  /> 
        </Switch>
        </div>
    )
}

export default Dashboard;