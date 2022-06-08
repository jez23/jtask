import React, { Suspense } from 'react';
import { ConstProvider } from '../contexts/Context';
import {Route, Switch} from "react-router-dom";
import RequireAuth from "../components/RequireAuth";

import spinner from "../img/loader/Spinner-1s-200px.svg";
import '../css/imports.css';

import Header from './header/Header';
import SideNav from "./SideNav";
import Error404 from './pages/Error404';

const DashBoardOverViewSection = React.lazy(() => import('./pages/DashBoardOverView'));
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
const Login  = React.lazy(() => import( './pages/Login'));

function App() {
  return (
      <ConstProvider>
         <Suspense
          fallback={
            <div className="loaderSpinner">
              <img alt="Loading Spinner" src={spinner} />
            </div>
          }
        >
      <Header />
      <SideNav  />
      <div className="container"> 
      <Switch >
            <Route path="/" exact render={() => <RequireAuth><DashBoardOverViewSection /></RequireAuth>}/>
            <Route path="/login" component={Login} />
            <Route path="/new-ticket" render={() => <RequireAuth><NewTicket/></RequireAuth>}/>
            <Route path="/edit-ticket/:ticket_id" render={() => <RequireAuth><EditTicket/></RequireAuth>}/>
            <Route path="/onholdtickets" render={() => <RequireAuth><OnHold/></RequireAuth>}/>
            <Route path="/backlog" render={() => <RequireAuth><BackLog/></RequireAuth>}/>
            <Route path="/ViewTicket/:ticket_id" render={() => <RequireAuth><ViewTicket/></RequireAuth>}/>
            <Route path="/users" exact render={() => <RequireAuth><ViewAllUsers/></RequireAuth>}/>
            <Route path="/searchresults" render={() => <RequireAuth><SearchResults/></RequireAuth>}/>
            <Route path="/users/add" render={() => <RequireAuth><AddNewUser/></RequireAuth>}/>
            <Route path="/user/edit/:user_id" render={() => <RequireAuth><EditUser/></RequireAuth>}/>
            <Route path="/user/view/:user_id" render={() => <RequireAuth><ViewUser/></RequireAuth>}/>
            <Route component={Error404}  /> 
        </Switch>

     
        </div>
        </Suspense>
      </ConstProvider>
      
   
  );
}

export default App;

