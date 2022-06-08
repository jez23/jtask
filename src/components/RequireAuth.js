import React, { useContext } from "react";
import Context from "../contexts/Context";
import Unauthorised from "../components/Unauthorised";

const RequireAuth = ({ children }) => {

    const {
        loggedInUser
      } = useContext(Context);
    
        if (!loggedInUser) {
            return <Unauthorised />;
        }
    
       return children;
}
export default RequireAuth;