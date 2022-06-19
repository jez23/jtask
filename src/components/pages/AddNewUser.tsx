import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Context from "../../contexts/Context";

const AddNewUser: React.FC = () => {
  const { handleAddUser, allUsers } = useContext(Context);
  const history = useHistory();

  const [firstName, setFirstname] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState<any | null>("");
  const [role, setRole] = useState<string>("");

  const addUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regEx = /\S+@\S+\.\S+/gi;

    if (!email.match(regEx)) {
      return alert("Please provide a valid email address.");
    }

    const convertedImage = URL.createObjectURL(image);

    const newUser = {
      id: allUsers.length + 1,
      firstname: firstName,
      lastname: lastName,
      jobTitle: jobTitle,
      email: email,
      img: convertedImage,
      role: role,
    };

    handleAddUser(newUser);
    history.push("/users");
  };

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-user-plus" aria-hidden="true"></i>ADD USER
      </h2>

      <form className="addUserDetails__form__input" onSubmit={addUser}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          placeholder="First Name"
          required
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="LastName">Last Name</label>
        <input
          id="LastName"
          placeholder="Last Name"
          value={lastName}
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="JobTitle">Job Title</label>
        <input
          id="JobTitle"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <label htmlFor="emailAddress">Email Address</label>
        <input
          id="emailAddress"
          placeholder="Email Addess"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="permissionRole">Permission Role</label>
        <select
          id="permissionRole"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Choose Role</option>
          <option value="1">Admin</option>
          <option value="2">Team Member</option>
        </select>
        <label htmlFor="profileImage">Profile Image</label>
        <input
          id="profileImage"
          required
          onChange={(e: any) => setImage(e.target.files[0])}
          type="file"
        />

        <button type="submit" className="btn">
          Create User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
