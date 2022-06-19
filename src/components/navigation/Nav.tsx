import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <div className="header__nav">
        <Link to="/">Dashboard</Link>
        <Link to="/new-ticket">New Ticket</Link>
        <Link to="/onholdtickets">On Hold</Link>
        <Link to="/backlog">Backlog</Link>
        <Link to="/users">Users</Link>
    </div>
  );
}

export default Nav;
