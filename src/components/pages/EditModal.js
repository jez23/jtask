import React, { useContext } from 'react';
import Context from '../../contexts/Context';

function EditModal(props){
   

    const { selectedTicket , handleTicketEdit , usersWithState  } = useContext(Context);


    function handleChange(changes){
        handleTicketEdit(selectedTicket.id,  {...selectedTicket, ...changes})
    }


    return (
        <div className="editModalContainer">
            <div className="editModal">
                <h2><i className="fa fa-pencil" aria-hidden="true"></i> Edit TASK</h2>
                <form>
                <label htmlFor="editTitle">Edit Title</label>
                <input id="editTitle" type="text" placeholder="Title" value={selectedTicket.title} onChange={e => handleChange({title: e.target.value})} required/>
                <label htmlFor="editSummary">Edit Summary</label>
                <input id="editSummary" type="text" placeholder="Summary" value={selectedTicket.summary} onChange={e => handleChange({summary: e.target.value})}/>
                <label htmlFor="editType">Edit Type</label>
                <select id="editType" value={selectedTicket.type} onChange={e => handleChange({type: e.target.value})}>
                        <option value="Bug">Bug</option>
                        <option value="Improvement">Improvement</option>
                        <option value="New Feature">New Feature</option>
                        <option value="Task">Task</option>
                </select>    
                <label htmlFor="editPriority">Edit Priority</label>
                <select id="editPriority" value={selectedTicket.priority} onChange={e => handleChange({priority: e.target.value})}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Blocker">Blocker</option>
                </select>
                <label htmlFor="editPoints">Edit Story Points</label>
                <select placeholder="Points" value={selectedTicket.points} onChange={e => handleChange({ points: e.target.value})}>
                        <option value={0.5}>0.5</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={8}>8</option>
                        <option value={13}>13</option>
                        <option value={20}>20</option>
                        <option value={40}>40</option>
                        <option value={100}>100</option>
                </select>
                <label htmlFor="editAssignee">Edit Assignee</label>
                <select id="editAssignee" value={selectedTicket.assignedTo} onChange={e => handleChange({assignedTo: e.target.value})}>
                       { usersWithState.map(el => (
                           <option value={el.firstname} key={el.id}>{el.firstname}</option>
                       ))}
                </select>
                <label htmlFor="editStatus">Edit Status</label>
                <select id="editStatus"  value={selectedTicket.status} onChange={e => handleChange({status: e.target.value})}>
                    <option value="New">New</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Verified">Verified</option>
                    <option value="Closed">Closed</option>
                </select>
             
                </form>
            </div>
        </div>
    );
}

export default EditModal;