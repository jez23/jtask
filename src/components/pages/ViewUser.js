import React, { useContext } from "react";
import Context from "../../contexts/Context";

const ViewUser = () => {
  const { selectedUser } = useContext(Context);

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i> USERS
      </h2>

      <div className="profileContainer__profile">
        <div className="profileContainer__profile__image">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <div className="profileContainer__profile__name">
          <h3>{`${selectedUser[0].firstname} ${selectedUser[0].lastname}`}</h3>
          <h4>{selectedUser[0].jobTitle || `Job Title Not Supplied.`}</h4>
        </div>
        <div className="profileContainer__profile__button">
          <a className="emailbtn" href={`mailto:${selectedUser[0].email}`}>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
