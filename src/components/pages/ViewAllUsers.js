import React, { useContext } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";

function ViewAllUsers() {
  const { allUsers, setAllUsers, setSelectedUser, loggedInUser, setLoggedInUser, allTickets, setAllTickets } = useContext(Context);

  const removeUser = (id) => {
    const user = allUsers.find(user => user.id === id);
    if(+user.role === 1){
      return alert("You are not able to delete an admin account")
    }
    const existingUsers = allUsers.filter((user) => user.id !== id);
    setAllUsers([...existingUsers]);
    localStorage.setItem('allUsers', JSON.stringify([...existingUsers]));
    
    const assignDeleteUsersTicketsToAdmin = allTickets.map(ticket => {
      if( +ticket.assignedTo === +user.id){
        ticket.assignedTo = 1
      }
      return ticket;
    });
    localStorage.setItem("allTickets", JSON.stringify([...assignDeleteUsersTicketsToAdmin]));
    setAllTickets([...assignDeleteUsersTicketsToAdmin])

    if(loggedInUser.id === id){
      setLoggedInUser("");
    }
  };

  return (
    <div className="center60">
      <div className="titleUser">
        <h2>
          <i className="fa fa-user-plus" aria-hidden="true"></i> USERS
        </h2>
      </div>
      <div>
        <Link to="/users/add">
          <button className="btn">Add New User</button>
        </Link>
      </div>
      <div>
        {allUsers.map((user) => {
          return (
            <div className="addedUser" key={user.id}>
              <div className="addUserImage">
                <img src={user.img} alt={`${user.firstname} profile`}/>
              </div>
              <div className="addUserMeta">
                <div className="userName">
                  <p>{user.firstname}</p>
                </div>
                <div className="userEmail">
                  <p>{user.email}</p>
                </div>
                <div className="removeEdit">
                  <Link
                    to={`/user/view/${user.id}`}
                    onClick={() => setSelectedUser([user])}
                  >
                    <i className="fa fa-eye"></i>
                  </Link>
                  {(loggedInUser.role === 1 || loggedInUser.id === user.id) && <Link to={`/user/edit/${user.id}`} onClick={() => setSelectedUser([user])}>
                    <i className="fa fa-pencil"></i>
                  </Link>}
                  {(loggedInUser.role === 1 || loggedInUser.id === user.id) && <i
                    className="fa fa-window-close"
                    aria-hidden="true"
                    onClick={() => removeUser(user.id)}
                  ></i>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewAllUsers;
