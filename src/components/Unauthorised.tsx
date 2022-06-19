import React from "react";
import { Link } from "react-router-dom";

const Unauthorised: React.FC = () => {
  return (
    <div className="container-center">
      <div className="center60 centerContent">
        <h1>Unauthorised</h1>
        <p>You are not authorised to see this board.</p>
        <p>Please login to continue</p>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Unauthorised;
