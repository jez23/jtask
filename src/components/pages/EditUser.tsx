import React, { useContext, useState, useEffect } from "react";
import Context from "../../contexts/Context";
import { useParams } from "react-router-dom";

type UserParams = {
  user_id: string;
};
type updatedUser = {
  id: number;
  firstname: string;
  lastname: string;
  jobTitle: string;
  email: string;
  img: string;
  role: string;
};

const EditUser: React.FC = () => {
  const { allUsers, setAllUsers } = useContext(Context);

  const { user_id } = useParams<UserParams>();

  const [selectedUser, setSelectedUser] = useState<updatedUser>(
    {} as updatedUser
  );
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleEditUser = (e: React.FormEventHandler<HTMLFormElement> | any) => {
    e.preventDefault();
    const updatedUser: updatedUser = {
      id: selectedUser.id,
      firstname: firstName,
      lastname: lastName,
      jobTitle: jobTitle,
      email: email,
      img: selectedUser.img,
      role: selectedUser.role,
    };
    const IndexOfUserToUpdate: number = allUsers.findIndex(
      (user: any) => user.id === selectedUser.id
    )[0];
    const allUsersCopy: any[] = [...allUsers];
    allUsersCopy.splice(+IndexOfUserToUpdate, 1, updatedUser);

    localStorage.setItem("allUsers", JSON.stringify([...allUsersCopy]));
    setAllUsers(allUsersCopy);
  };

  useEffect(() => {
    const chosen = allUsers.filter(
      (user: { id: number }) => user.id === +user_id
    );

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
