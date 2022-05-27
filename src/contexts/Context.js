import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Context = React.createContext();

export function ConstProvider({children}){
  const [emptyTicketsWithState, setEmptyTicketsFunction] = useState(emptyTicket);
  const [selectedTicketId, setSelectedTicketIdFunction] = useState();
  const [ticketsWithState, setTicketsFunction] = useState(tickets);
  const [usersWithState, setUserFunction] = useState(users);
  const selectedTicket = ticketsWithState.find(ticket => ticket.id === selectedTicketId)
  const [sideNavUserState, setSideNavUserState] = useState(false);
  const [editModal, editModalFunction] = useState(false);
  const [newTicketModal, newTicketFunction] = useState(false);
  const [viewTicketModal, viewTicketFunction] = useState(false);
  const [sideBarState, setSideBarState] = useState(false);
  const [onHoldState, setOnHoldState] = useState(false);
  const [backLogState, setBackLogState] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

const showSearchResultsOnPage = () => {
    const results = ticketsWithState.filter( (ticket) => {
          return ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) || ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return results;
}

  function handleTicketAdd(newObject){
    const newTicket = {
        id : uuidv4(),
        title: newObject.title,
        date: '',
        summary: newObject.summary,
        type: newObject.type,
        priority: newObject.priority,
        status: newObject.status,
        resolution: false,
        points: newObject.points,
        sprint: newObject.sprint,
        assignedTo: newObject.assignedTo,
        comments: []
    }

    setTicketsFunction([...ticketsWithState, newTicket]);
    setEmptyTicketsFunction(emptyTicket);
  }
  function handleTicketEdit(id, ticket){
  
     
   const newTicket = [...ticketsWithState];
   const index = newTicket.findIndex(t => t.id === id);
   newTicket[index] = ticket;
    setTicketsFunction(newTicket)  
  }
   function handleTicketSelect(id){
        setSelectedTicketIdFunction(id)
  }
  function removeSelectedTicket(){
      setSelectedTicketIdFunction(null);
  }
  function handleAddUser(newUser){
    setUserFunction([...usersWithState, newUser])
  } 


  return(
    <Context.Provider value={{
      ticketsWithState,
      handleTicketAdd,
      handleTicketEdit,
      newTicketModal,
      handleTicketSelect,
      viewTicketFunction,
      newTicketFunction,
      setSideBarState,
      sideBarState,
      sideNavUserState,
      usersWithState,
      removeSelectedTicket,
      emptyTicketsWithState,
      handleAddUser,
      viewTicketModal,
      editModalFunction,
      editModal,
      setEmptyTicketsFunction,
      setSideNavUserState,
      selectedTicket,
      onHoldState,
      setOnHoldState,
      backLogState,
      setBackLogState,
      searchTerm,
      setSearchTerm,
      showSearchResultsOnPage,
      setUserFunction,
      selectedUser, 
      setSelectedUser
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context;



const tickets = [
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Blocker",
      status: "New",
      resolution: false,
      points: 1,
      sprint: 4,
      assignedTo: 'Sarah',
      comments: [
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "High",
      status: "New",
      resolution: false,
      points: 1,
      sprint: 4, 
      assignedTo: 'Mark',
      comments: [
        { userName: "Sarah",
          comment: "Great progression with this ticket so far, keep up the good work."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "New",
      resolution: false,
      points: 2,
      sprint: 4,
      assignedTo: 'Emily',
      comments: [
        { userName: "John",
          comment: "Can I have an update on this ticket please?"
        },
        { userName: "Emily",
          comment: "I've started this ticket, however, I'm having a few issues."
        },
        { userName: "John",
        comment: "OK, thank you, let me know when you're ready to progress."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "Open",
      resolution: false,
      points: 3,
      sprint: 4,
      assignedTo: 'Sarah',
      comments: [
        { userName: "Mark",
          comment: "Has this ticket been approved?"
        },
        { userName: "Emily",
          comment: "Yes, this ticket was discussed in the scrum meeting and has been approved."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "In Progress",
      resolution: false,
      points: 5,
      sprint: 4,
      assignedTo: 'Mark',
      comments: [
        { userName: "John",
          comment: "Could please change the priority of this ticket please? It's blocking other features."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "In Progress",
      resolution: false,
      points: 100,
      sprint: 4,
      assignedTo: 'John',
      comments: [
        { userName: "Mark",
          comment: "I'm moving this ticket to 'in progress' I'm hoping to have it finsihed by the end of the week."
        },
        { userName: "Sarah",
          comment: "Great! Thanks for the update."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "Resolved",
      resolution: false,
      points: 1,
      sprint: 4,
      assignedTo: 'Emily',
      comments: [
        { userName: "Sarah",
          comment: "I'm resolving this ticket as it has been fixed."
        },
        { userName: "Emily",
          comment: "Do you want me to 'verify' it?"
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "Closed",
      resolution: false,
      points: 2,
      sprint: 4,
      assignedTo: 'John',
      comments: [
        { userName: "John",
          comment: "This ticket has been completed, so I'm closing this ticket."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "On Hold",
      resolution: false,
      points: 3,
      sprint: 4,
      assignedTo: 'Admin',
      comments: [
        { userName: "Sarah",
          comment: "Why is this ticket on hold?"
        },
        { userName: "Mark",
          comment: "I spoke to the other team and they said this feature isn't ready yet."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "On Hold",
      resolution: false,
      points: 5,
      sprint: 4,
      assignedTo: 'Admin',
      comments: [
        { 
          userName: "Emily",
          comment: "Hello, should I start this ticket?"
        },
        { 
          userName: "Mark",
          comment: "No, don't start this ticket yet, we'll discuss this in the scrum meeting."
        },
        { 
          userName: "Sarah",
          comment: "Yes, I agree with Mark, don't start this ticket yet."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "Backlog",
      resolution: false,
      points: 1,
      sprint: 4,
      assignedTo: 'Admin',
      comments: [
        { userName: "Sarah",
          comment: "I'm moving this ticket to the backlog as it's not needed until next month."
        }
      ]
    },
    {
      id : uuidv4(),
      title: "As a [type of user], I want to [perform some task] so that I can [achieve some goal].",
      date: '',
      summary: "Given that [some context], when [some action is carried out], then [a set of observable outcomes should occur].",
      type: "Bug",
      priority: "Low",
      status: "Backlog",
      resolution: false,
      points: 2,
      sprint: 4,
      assignedTo: 'Admin',
      comments: [
        { userName: "Emily",
          comment: "This seems to be a bigger issue that we'll need to discuss."
        },
        { userName: "Mark",
          comment: "OK, I'll add this ticket to the backlog for now."
        }
      ]
    }
  ]
  
  
  const emptyTicket = {
    id : uuidv4(),
    title: '',
    summary: '',
    type: '',
    priority: '',
    points: 0,
    sprint: 0,
    status: '',
    assignedTo: '',
    comments: []
  }
  
  const users = [
    {
      id: uuidv4(),
      firstname: "Admin",
      lastname: '',
      jobTitle: '',
      email: 'Admin@company.com'
    },
    {
      id: uuidv4(),
      firstname: "Emily",
      lastname: '',
      jobTitle: '',
      email: 'Emily@company.com'
    },
    {
      id: uuidv4(),
      firstname: "Mark",
      lastname: '',
      jobTitle: '',
      email: 'Mark@company.com'
    },
    {
      id: uuidv4(),
      firstname: "John",
      lastname: '',
      jobTitle: '',
      email: 'John@company.com'
    },
    {
      id: uuidv4(),
      firstname: "Sarah",
      lastname: '',
      jobTitle: '',
      email: 'Sarah@company.com'
    }
  ];
  
  
  