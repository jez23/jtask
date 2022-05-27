import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";

function UserModal(props) {
  const { usersWithState, setUserFunction, setSelectedUser } =
    useContext(Context);

  const removeUser = (id) => {
    const removeCurrentUser = usersWithState.filter((user) => {
      return user.id !== id;
    });
    setUserFunction([...removeCurrentUser]);
  };

  const storeUser = (user) => {
    const userArray = [user];
    setSelectedUser(userArray);
  };

  return (
    <div className="center60">
      <div className="titleUser">
        <h2>
          <i className="fa fa-user-plus" aria-hidden="true"></i> USERS
        </h2>
      </div>
      <div>
        {usersWithState.map((el) => {
          return (
            <div className="addedUser" key={el.id}>
              <div className="addUserImage">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
              <div className="addUserMeta">
                <div className="userName">
                  <p>{el.firstname}</p>
                </div>
                <div className="userEmail">
                  <p>{el.email}</p>
                </div>
                <div className="removeEdit">
                  <Link to="/user/view" onClick={() => storeUser(el)}>
                    <i className="fa fa-eye"></i>
                  </Link>
                  <Link to="/user/edit" onClick={() => storeUser(el)}>
                    <i className="fa fa-pencil"></i>
                  </Link>
                  <i
                    className="fa fa-window-close"
                    aria-hidden="true"
                    onClick={() => removeUser(el.id)}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Link to="/users/add">
          <button className="btn">Add New User</button>
        </Link>
      </div>
    </div>
  );
}

export default UserModal;
