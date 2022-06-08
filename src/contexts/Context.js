import React, { useState, useEffect } from "react";
import tickets from "../tickets.json";
import users from "../users.json";

const Context = React.createContext();

export function ConstProvider({ children }) {

  const [allTickets, setAllTickets] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(users[0]);

  const showSearchResultsOnPage = () => {
    return allTickets.filter((ticket) => {
      return (
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${ticket.id}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };
  const handleAddNewTicket = (newTicket) => {
    localStorage.setItem("allTickets", JSON.stringify([...allTickets, newTicket]));
    setAllTickets([...allTickets, newTicket]);
  };
  const handleTicketEdit = (id, ticket) => {
    const newTicket = [...allTickets];
    const index = newTicket.findIndex((ticket) => ticket.id === id);
    newTicket[index] = ticket;

    localStorage.setItem("allTickets", JSON.stringify([...newTicket]));
    setAllTickets(newTicket);
  };

  const handleAddUser = (newUser) => {
    localStorage.setItem("allUsers", JSON.stringify([...allUsers, newUser]));
    setAllUsers([...allUsers, newUser]);
  };

  useEffect(() => {
    const userList = localStorage.getItem("allUsers");
    const ticketList = localStorage.getItem("allTickets");
    userList? setAllUsers(JSON.parse(userList)): setAllUsers(users);
    ticketList? setAllTickets(JSON.parse(ticketList)) : setAllTickets(tickets);
  }, []);

  return (
    <Context.Provider
      value={{
        allTickets,
        setAllTickets,
        handleAddNewTicket,
        handleTicketEdit,
        displaySideBar,
        setDisplaySideBar,
        allUsers,
        setAllUsers,
        handleAddUser,
        searchTerm,
        setSearchTerm,
        showSearchResultsOnPage,
        selectedUser,
        setSelectedUser,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
