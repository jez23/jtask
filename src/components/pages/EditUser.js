import React, { useContext, useState, useEffect } from "react";
import Context from "../../contexts/Context";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { allUsers, setAllUsers } = useContext(Context);

  const { user_id } = useParams();

  const [selectedUser, setSelectedUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleEditUser = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: selectedUser.id,
      firstname: firstName,
      lastname: lastName,
      jobTitle: jobTitle,
      email: email,
      img: selectedUser.img,
      role: selectedUser.role,
    };
    const IndexOfUserToUpdate = allUsers.findIndex(
      (user) => user.id === selectedUser.id
    );
    const allUsersCopy = [...allUsers];
    allUsersCopy.splice([IndexOfUserToUpdate], 1, updatedUser);

    localStorage.setItem('allUsers', JSON.stringify([...allUsersCopy]));
    setAllUsers(allUsersCopy);
  };

  useEffect(() => {
    const chosen = allUsers.filter((user) => user.id === +user_id);

    setFirstName(chosen[0].firstname);
    setLastName(chosen[0].lastname);
    setJobTitle(chosen[0].jobTitle);
    setEmail(chosen[0].email);

    setSelectedUser(chosen[0]);
    setIsLoading(false);
  }, [user_id, allUsers]);

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i>EDIT USER
      </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleEditUser}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="LastName">Last Name</label>
          <input
            id="LastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label htmlFor="JobTitle">Job Title</label>
          <input
            id="JobTitle"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          ></input>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            placeholder="Email Addess"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
