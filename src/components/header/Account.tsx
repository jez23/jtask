import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Account: React.FC = () => {

    const { loggedInUser, setLoggedInUser } = useContext(Context);
    const history = useHistory();

    return(<div className="header__account">
        {!loggedInUser && <button className="btn" onClick={() => history.push("/login")}>Login</button>}
        {loggedInUser && <div className="header__account__loggedIn">
            <Link to={`/user/view/${loggedInUser.id}`}><img src={loggedInUser.img} alt="logged in user"/></Link>
            <div className="header__account__loggedIn__btn"><button className="btn" onClick={() => setLoggedInUser("")}>Log Out</button></div>
        </div>}
    </div>)
}

export default Account;
