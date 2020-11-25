import React, { useState, useContext, useRef } from 'react';


import { Link } from 'react-router-dom';

import Context from '../contexts/Context';

function StoredStatusCard(props){


    const {  selectedTicket, handleTicketEdit, handleTicketSelect } = useContext(Context);


    const [drop, dropFunction] = useState(false)
    function handleChange(changes){
        handleTicketEdit(selectedTicket.id,  {...selectedTicket, ...changes})
    }
    const statusButton = useRef();
    function viewTicket(){
        handleTicketSelect(props.id);
       
    }
    function setSelectedTicket(){
        setNewStatusShow(true);
        handleTicketSelect(props.id);
    }
    function editModal(){
        handleTicketSelect(props.id);
    
    }
    function selectTicketOnHover(){
        handleTicketSelect(props.id);
        statusDropDown(true);
    }
    function statusDropDown(status, e){ 
        dropFunction(status)
}
function handleOnHold(){
    statusDropDown(false);
    handleChange({status: "On Hold"})
}
function handleBackLog(){
    statusDropDown(false);
    handleChange({status: "Backlog"})
}

    const [newStatusShow, setNewStatusShow] = useState(false);
    return (
        <div className="storedStatusCard">
            <div className="storedStatusCard__info">
                   
                <div className="storedMeta">
                    <p className="statusCardTicket__priority">{props.status}</p>
                    <h3>{props.title}</h3>
                    <p><i className="fa fa-id-badge" aria-hidden="true"></i> {props.id}</p>
                </div>
{/*  ########### */}
                <div className="storedOption">
                <div className="storedOption__nav">
                    <div className="viewTicket">
                        <Link to="/ViewTicket" onClick={() => viewTicket()}><i className="fa fa-eye" /* aria-hidden="true" */></i></Link>
                       
                    </div>
                    <div className="editTicket">
                        <Link to="/editticket" onClick={() => editModal()}><i className="fa fa-pencil" /* aria-hidden="true" */></i></Link>
                    </div>
                    <div className="archiveButton" onMouseEnter={() => selectTicketOnHover()} onTouchStart={() => selectTicketOnHover()} onMouseLeave={(e) => statusDropDown(false, e)} onTouchCancel={(e) => statusDropDown(false, e)}>
                        <i className="fa fa-archive" aria-hidden="true"></i>
                        { drop
                             &&   
                             <div className="reassignTicket" ref={statusButton}>
                                <ul>
                                    <li onClick={(e) => handleOnHold()}>On Hold</li>
                                    <li onClick={e => handleBackLog()}>Add To BackLog</li>
                                </ul>
                        </div>}
                    </div>
                  
            </div>

           {/*  ########### */}
                </div>    
            </div>
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