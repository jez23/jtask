import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Context from "../../contexts/Context";

const NewTicket: React.FC = () => {
  
  const history = useHistory();

  const {
    handleAddNewTicket,
    allUsers,
    allTickets
  } = useContext(Context);

  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [points, setPoints] = useState<string>("");
  const [assignee, setAssignee] = useState<number | string>(1);
  const [status, setStatus] = useState<string>("");
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newTicket = {
      id : allTickets.length + 1,
      title: title, 
      summary: summary,
      type: type,
      priority: priority,
      points: points,
      sprint: 0,
      status: status,
      assignedTo: assignee,
      comments: []
    }

    handleAddNewTicket(newTicket);

    setTitle("");
    setSummary("");
    setType("");
    setPriority("");
    setPoints("");
    setAssignee("");
    setStatus("");

    history.push("/");
  }

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-file-text-o" aria-hidden="true"></i> Create a new
        task
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          required
          id="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="summary">Summary</label>
        <textarea
        rows={5}
        cols={5}
          id="summary"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Bug">Bug</option>
          <option value="Improvement">Improvement</option>
          <option value="New Feature">New Feature</option>
          <option value="Task">Task</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Blocker">Blocker</option>
        </select>
        <label htmlFor="points">Story Points</label>
        <select
          id="points"
          placeholder="points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
          <option value="13">13</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="100">100</option>
        </select>
        <label htmlFor="assignee">Assignee</label>
        <select
          id="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          {allUsers.map((user: { id: string, firstname: string, lastname: string}) => (
            <option value={user.id} key={user.id}>
              {`${user.firstname} ${user.lastname}`}
            </option>
          ))}
        </select>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Choose Status</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        <button type="submit" className="btn">
          Create Ticket
        </button>
      </form>
    </div>
  );
}

export default NewTicket;
