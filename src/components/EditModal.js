import React from 'react';

function EditModal(props){
   
    function handleChange(changes){
          props.handleTicketEdit(props.selectedTicket.id,  {...props.selectedTicket, ...changes})
    }

    function closeEditModal(e){
       // e.preventDefault();
        props.editModalFunction(false);
    }
    return (
        <div className="editModalContainer" onClick={() => closeEditModal()}>
            <div className="editModal" onClick={(e) => e.stopPropagation()}>
                <div className="editModalClose">
                     <i className="fa fa-window-close" aria-hidden="true" onClick={() => closeEditModal()}></i>
                </div>
                <h3><i class="fa fa-pencil" aria-hidden="true"></i> Edit TASK</h3>
                <form>
                <label htmlfor="editTitle">Edit Title</label>
                <input id="editTitle" type="text" placeholder="Title" value={props.selectedTicket.title} onChange={e => handleChange({title: e.target.value})} required/>
                <label htmlfor="editSummary">Edit Summary</label>
                <input id="editSummary" type="text" placeholder="Summary" value={props.selectedTicket.summary} onChange={e => handleChange({summary: e.target.value})}/>
                <label htmlfor="editType">Edit Type</label>
                <select id="editType" onChange={e => handleChange({type: e.target.value})}>
                        <option value="Bug">Bug</option>
                        <option value="Improvement">Improvement</option>
                        <option value="New Feature">New Feature</option>
                        <option value="Task">Task</option>
                </select>    
                <label htmlfor="editPriority">Edit Priority</label>
                <select id="editPriority" onChange={e => handleChange({priority: e.target.value})}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Blocker">Blocker</option>
                </select>
                <label htmlfor="editPoints">Edit Story Points</label>
                <select placeholder="Points" onChange={e => handleChange({ points: e.target.value})}>
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
                <label htmlFor="editAssignee">Edit Assignee</label>
                <select id="editAssignee" onChange={e => handleChange({assignedTo: e.target.value})}>
                       { props.usersWithState.map(el => (
                           <option value={el} key={el}>{el}</option>
                       ))}
                </select>
                <label htmlFor="editStatus">Edit Status</label>
                <select id="editStatus" onChange={e => handleChange({status: e.target.value})}>
                    <option value="New">Change Status</option>
                    <option value="New">New</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Verified">Verified</option>
                    <option value="Closed">Closed</option>
                </select>
                <button type="submit" className="modalSave" onClick={(e) => closeEditModal(e)}>Save</button>
                </form>
            </div>
        </div>
    );
}

export default EditModal;