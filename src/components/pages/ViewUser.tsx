import React, { useContext,  useEffect, useState } from "react";
import Context from "../../contexts/Context";
import { useParams } from "react-router-dom";

type UserParams = {
  user_id: string;
};
type  UserObj = {
  img?: string,
  firstname?: string,
  lastname?: string,
  email?: string,
  jobTitle?: string
}

const ViewUser: React.FC = () => {
  const { allUsers } = useContext(Context); 
  const { user_id } = useParams<UserParams>(); 
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<UserObj[]>([]);

 useEffect(() => {
  const getCurrentUser = allUsers.filter((user: any) => user.id === +user_id);
  setCurrentUser(getCurrentUser)
  setIsLoading(false);
 }, [user_id, allUsers]);

  return (<>
    {isLoading? <p>Loading...</p>: <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i> USERS
      </h2>

      <div className="profileContainer__profile">
        <div className="profileContainer__profile__image">
         <img src={`${currentUser[0].img}`} alt="User Profile"/>
        </div>
        <div className="profileContainer__profile__name">
          <h3>{`${currentUser[0].firstname} ${currentUser[0].lastname}`}</h3>
          <h4>{currentUser[0].jobTitle || `Job Title Not Supplied.`}</h4>
        </div>
        <div className="profileContainer__profile__button">
          <a className="emailbtn" href={`mailto:${currentUser[0].email}`}>
            Email
          </a>
        </div>
      </div>
    </div>}
    </>
  );
};

export default ViewUser;
