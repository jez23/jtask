import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {

  return (
    <div className="header__nav">
        <Link to="/">Dashboard</Link>
        <Link to="/newticket">New Ticket</Link>
        <Link to="/onholdtickets">On Hold</Link>
        <Link to="/backlog">Backlog</Link>
        <Link to="/users">Users</Link>
    </div>
  );
}

export default Nav;
