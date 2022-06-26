import React, { useState, useEffect } from "react";
import tickets from "../tickets.json";
import users from "../users.json";

const Context = React.createContext<any>(null);

type comment = {
  id: any;
  comment: any;
};
type ticket = {
  id: number;
  title: string;
  date?: string;
  summary: string;
  type: string;
  priority: string;
  status: string;
  resolution?: boolean;
  points: number;
  sprint?: number;
  assignedTo: number;
  comments: comment[];
};
type UserObj = {
  img?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  jobTitle?: string;
};

interface Props {
  children: React.ReactNode;
}

export const ConstProvider: React.FC<Props> = ({ children }) => {
  const [allTickets, setAllTickets] = useState<ticket[]>([]);
  const [allUsers, setAllUsers] = useState<UserObj[]>([]);
  const [displaySideBar, setDisplaySideBar] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [loggedInUser, setLoggedInUser] = useState(users[0]);

  const showSearchResultsOnPage = () => {
    return allTickets.filter((ticket: ticket) => {
      return (
        ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${ticket.id}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };
  const handleAddNewTicket = (newTicket: ticket) => {
    localStorage.setItem(
      "allTickets",
      JSON.stringify([...allTickets, newTicket])
    );
    setAllTickets([...allTickets, newTicket]);
  };
  const handleTicketEdit = (id: number, ticket: ticket) => {
    const newTicket = [...allTickets];
    const index = newTicket.findIndex((ticket) => +ticket.id === id);
    newTicket[index] = ticket;

    localStorage.setItem("allTickets", JSON.stringify([...newTicket]));
    setAllTickets(newTicket);
  };

  const handleAddUser = (newUser: UserObj) => {
    localStorage.setItem("allUsers", JSON.stringify([...allUsers, newUser]));
    setAllUsers([...allUsers, newUser]);
  };

  useEffect(() => {
    const userList = localStorage.getItem("allUsers");
    const ticketList = localStorage.getItem("allTickets");
    userList ? setAllUsers(JSON.parse(userList)) : setAllUsers(users);
    ticketList ? setAllTickets(JSON.parse(ticketList)) : setAllTickets(tickets);
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
        setLoggedInUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
