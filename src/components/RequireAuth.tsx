import React, { useContext } from "react";
import Context from "../contexts/Context";
import Unauthorised from "./Unauthorised";

interface Props {
  children: JSX.Element
}

const RequireAuth: React.FC<Props> = ({ children }) => {

    const {
        loggedInUser
      } = useContext(Context);
    
        if (!loggedInUser) {
            return <Unauthorised />;
        }
    
       return children;
}
export default RequireAuth;