import React, { useContext } from 'react';
import Context from '../contexts/Context';

function Modal(props){

    const { handleTicketAdd, newTicketFunction , usersWithState , emptyTicketsWithState , setEmptyTicketsFunction } = useContext(Context);
  
   function saveButton(e){
      // e.preventDefault();
      handleTicketAdd(emptyTicketsWithState);
      newTicketFunction(false);
   }
 
    return (
        <div className="modalContainer" onClick={() => newTicketFunction(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modalCloserButton">
                    <i className="fa fa-window-close" aria-hidden="true" onClick={() => newTicketFunction(false)}></i>
                </div>
                <h3><i className="fa fa-file-text-o" aria-hidden="true"></i> Create a new task</h3>
                <form>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Title" value={emptyTicketsWithState.title} onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, title: e.target.value})} required/>
                    <label htmlFor="summary">Summary</label>
                    <input id="Summary" type="text" placeholder="summary" value={emptyTicketsWithState.summary} onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, summary: e.target.value})}/>
                    <label htmlFor="type">Type</label>
                    <select id="type" onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, type: e.target.value})}>
                        <option value="Bug">Bug</option>
                        <option value="Improvement">Improvement</option>
                        <option value="New Feature">New Feature</option>
                        <option value="Task">Task</option>
                    </select>    
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, priority: e.target.value})}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Blocker">Blocker</option>
                    </select>
                    <label htmlFor="points">Story Points</label>
                    <select id="points" placeholder="points" onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, points: e.target.value})}>
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
                   <select id="assignee" onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, assignedTo: e.target.value})}>
                       { usersWithState.map(el => (
                           <option value={el} key={el}>{el}</option>
                       ))}
                    </select>
                    <label htmlFor="status">Status</label>
                    <select id="status" onChange={e => setEmptyTicketsFunction({...emptyTicketsWithState, status: e.target.value})} required>
                        <option value="New">Change Status</option>
                        <option value="New">New</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Verified">Verified</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <button type="sumbit" className="modalSave" onClick={(e) => saveButton(e)}>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;