import React, { useState, useContext } from 'react';
import Context from '../contexts/Context';

function StoredStatusCard(props){


    const {  selectedTicket, handleTicketEdit, handleTicketSelect } = useContext(Context);

    function handleChange(changes){
        handleTicketEdit(selectedTicket.id,  {...selectedTicket, ...changes})
    }

    function setSelectedTicket(){
        setNewStatusShow(true);
        handleTicketSelect(props.id);
    }

    const [newStatusShow, setNewStatusShow] = useState(false);
    return (
        <div className="storedStatusCard">
             <p className="statusCardTicket__priority">{props.status}</p>
            <h3>{props.title}</h3>
            <p><i className="fa fa-id-badge" aria-hidden="true"></i> {props.id}</p>
            <div className="MoveDropDownContainer" onMouseLeave={() => setNewStatusShow(false)} onTouchCancel={() => setNewStatusShow(false)}>
                <button className="changeStatusStored" onMouseEnter={() => setSelectedTicket()} onTouchStart={() => setSelectedTicket()}>Change Status</button>
                { newStatusShow && 
                    <div className="storedStatusCardMove">
                        <ul>
                            <li onClick={() => handleChange({status: "New"})}>New</li>
                            <li onClick={() => handleChange({status: "Open"})}>Open</li>
                            <li onClick={() => handleChange({status: "In Progress"})}>In Progress</li>
                            <li onClick={() => handleChange({status: "Resolved"})}>Resolved</li>
                            <li onClick={() => handleChange({status: "Verified"})}>Verified</li>
                            <li onClick={() => handleChange({status: "Closed"})}>Closed</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default StoredStatusCard;