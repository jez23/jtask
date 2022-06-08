import React, { useContext,  useEffect, useState } from "react";
import Context from "../../contexts/Context";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { allUsers } = useContext(Context); 
  const { user_id } = useParams(); 
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState([]);

 useEffect(() => {
  const getCurrentUser = allUsers.filter(user => user.id === +user_id);
  setCurrentUser(getCurrentUser[0])
  setIsLoading(false);
 }, [user_id, allUsers]);

  return (<>
    {isLoading? <p>Loading...</p>: <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i> USERS
      </h2>

      <div className="profileContainer__profile">
        <div className="profileContainer__profile__image">
         <img src={`${currentUser.img}`} alt="User Profile"/>
        </div>
        <div className="profileContainer__profile__name">
          <h3>{`${currentUser.firstname} ${currentUser.lastname}`}</h3>
          <h4>{currentUser.jobTitle || `Job Title Not Supplied.`}</h4>
        </div>
        <div className="profileContainer__profile__button">
          <a className="emailbtn" href={`mailto:${currentUser.email}`}>
            Email
          </a>
        </div>
      </div>
    </div>}
    </>
  );
};

export default ViewUser;
