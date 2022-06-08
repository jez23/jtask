import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Context from "../contexts/Context";

function SideNav() {
  const { setDisplaySideBar, displaySideBar } = useContext(Context);

  return ReactDOM.createPortal(
    <>
      {displaySideBar && (
        <div
          className="sideNavContainer"
          onClick={() => setDisplaySideBar(false)}
        >
          <div
            className="sideNavInnerContainer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sideNav">
              <div className="sideNavClose">
                <i
                  className="fa fa-window-close"
                  aria-hidden="true"
                  onClick={() => setDisplaySideBar(false)}
                ></i>
              </div>
              <Link to="/login" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">Login</button>
              </Link>
              <Link to="/" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">Dashboard</button>
              </Link>
              <Link to="/new-ticket" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">New Ticket</button>
              </Link>
              <Link to="/onholdtickets" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">On Hold</button>
              </Link>
              <Link to="/backlog" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">Backlog</button>
              </Link>
              <Link to="/users" onClick={() => setDisplaySideBar(false)}>
                <button className="btn">Users</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("mobile_nav")
  );
}

export default SideNav;
