import React from 'react';
import { ConstProvider } from '../contexts/Context';
import {Route, Switch} from "react-router-dom";

import '../css/imports.css';
import Header from './header/Header';
import DashBoardOverViewSection from './pages/DashBoardOverViewSection';
import NewTicket from './pages/NewTicket';
import EditModal from './pages/EditModal';
import OnHoldModal from './pages/OnHoldModal';
import BacklogModal from './pages/BacklogModal';
import ViewTicketModal from './pages/ViewTicketModal';
import UserModal from './pages/UserModal';
import SearchResults from './pages/SearchResults';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import SideNav from "./SideNav";

import Error404 from './pages/Error404';



function App() {
  return (
   
   
      <ConstProvider>
      <Header />
      <SideNav  />
      <div className="container"> 
      <Switch >
            <Route path="/" exact component={DashBoardOverViewSection} />
            <Route path="/newticket" component={NewTicket} />
            <Route path="/editticket" component={EditModal} />
            <Route path="/onholdtickets" component={OnHoldModal} />
            <Route path="/backlog" component={BacklogModal} />
            <Route path="/ViewTicket" component={ViewTicketModal} />
            <Route path="/users" exact component={UserModal} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/users/add" component={AddUser} />
            <Route path="/user/edit" component={EditUser} />
            <Route path="/user/view" component={ViewUser}  /> 
            <Route component={DashBoardOverViewSection}  /> 
        </Switch>

     
        </div>
      </ConstProvider>
      
   
  );
}

export default App;

