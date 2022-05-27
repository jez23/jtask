import React, { useContext } from "react";
import Context from "../../contexts/Context";

const EditUser = () => {
  const { selectedUser, setSelectedUser, usersWithState, setUserFunction } =
    useContext(Context);

  const editUser = (update) => {
    setSelectedUser([{ ...selectedUser[0], ...update }]);
    const indexOfUserToUpdate = usersWithState.findIndex((user) => {
      return user.id === selectedUser[0].id;
    });
    const newProp = { ...usersWithState[indexOfUserToUpdate], ...update };
    const copyOfUsersWithState = [...usersWithState];
    copyOfUsersWithState.splice([indexOfUserToUpdate], 1, newProp);
    setUserFunction(copyOfUsersWithState);
  };

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i>EDIT USER
      </h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          title="firstName"
          placeholder="First Name"
          value={selectedUser[0].firstname}
          onChange={(e) => editUser({ firstname: e.target.value })}
        ></input>
        <label htmlFor="LastName">Last Name</label>
        <input
          title="LastName"
          placeholder="Last Name"
          value={selectedUser[0].lastname}
          onChange={(e) => editUser({ lastname: e.target.value })}
        ></input>
        <label htmlFor="JobTitle">Job Title</label>
        <input
          title="JobTitle"
          placeholder="Job Title"
          value={selectedUser[0].jobTitle}
          onChange={(e) => editUser({ jobTitle: e.target.value })}
        ></input>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          title="emailAddress"
          placeholder="Email Addess"
          value={selectedUser[0].email}
          onChange={(e) => editUser({ email: e.target.value })}
        ></input>
      </form>
    </div>
  );
};

export default EditUser;
