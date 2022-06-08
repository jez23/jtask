import React, { Suspense } from 'react';
import { ConstProvider } from '../contexts/Context';
import {Route, Switch} from "react-router-dom";
import RequireAuth from "../components/RequireAuth";


import '../css/imports.css';

import Header from './header/Header';
import SideNav from "./SideNav";
import Error404 from './pages/Error404';

/* const DashBoardOverViewSection = React.lazy(() => import('./pages/DashBoardOverView'));
const NewTicket = React.lazy(() => import('./pages/NewTicket'));
const EditTicket = React.lazy(() => import('./pages/EditTicket'));
const OnHold = React.lazy(() => import('./pages/OnHold'));
const BackLog = React.lazy(() => import('./pages/BackLog'));
const ViewTicket = React.lazy(() => import('./pages/ViewTicket'));
const ViewAllUsers = React.lazy(() => import('./pages/ViewAllUsers'));
const SearchResults = React.lazy(() => import('./pages/SearchResults'));
const AddNewUser = React.lazy(() => import('./pages/AddNewUser'));
const EditUser = React.lazy(() => import('./pages/EditUser'));
const ViewUser = React.lazy(() => import('./pages/ViewUser'));
const Login  = React.lazy(() => import( './pages/Login')); */

import DashBoardOverViewSection  from './pages/DashBoardOverView';
import NewTicket from './pages/NewTicket';
import EditTicket from './pages/EditTicket';
import OnHold from './pages/OnHold';
import BackLog from './pages/BackLog';
import ViewTicket from './pages/ViewTicket';
import ViewAllUsers from './pages/ViewAllUsers';
import SearchResults from './pages/SearchResults';
import AddNewUser from './pages/AddNewUser';
import EditUser from './pages/EditUser';
import ViewUser from './pages/ViewUser';
import Login  from './pages/Login';

function App() {
  return (
      <ConstProvider>
         <Suspense
          fallback={
            <div className="loaderSpinner">
              <img alt="Loading Spinner" src={'https://jezblackmore.com/jtask/fakeUsers/Spinner.svg'} />
            </div>
          }
        >
      <Header />
      <SideNav  />
      <div className="container"> 
      <Switch >
            <Route path="/" exact component={() => <RequireAuth><DashBoardOverViewSection /></RequireAuth>}/>
            <Route path="/login" component={Login} />
            <Route path="/new-ticket" component={() => <RequireAuth><NewTicket/></RequireAuth>}/>
            <Route path="/edit-ticket/:ticket_id" component={() => <RequireAuth><EditTicket/></RequireAuth>}/>
            <Route path="/onholdtickets" component={() => <RequireAuth><OnHold/></RequireAuth>}/>
            <Route path="/backlog" component={() => <RequireAuth><BackLog/></RequireAuth>}/>
            <Route path="/ViewTicket/:ticket_id" component={() => <RequireAuth><ViewTicket/></RequireAuth>}/>
            <Route path="/users" exact component={() => <RequireAuth><ViewAllUsers/></RequireAuth>}/>
            <Route path="/searchresults" component={() => <RequireAuth><SearchResults/></RequireAuth>}/>
            <Route path="/users/add" component={() => <RequireAuth><AddNewUser/></RequireAuth>}/>
            <Route path="/user/edit/:user_id" component={() => <RequireAuth><EditUser/></RequireAuth>}/>
            <Route path="/user/view/:user_id" component={() => <RequireAuth><ViewUser/></RequireAuth>}/>
            <Route component={() => <RequireAuth><DashBoardOverViewSection /></RequireAuth>}/>  
        </Switch>

     
        </div>
        </Suspense>
      </ConstProvider>
      
   
  );
}

export default App;

