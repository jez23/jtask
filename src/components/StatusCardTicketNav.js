import React, { useRef, useState, useContext} from 'react';
import { Link } from 'react-router-dom';

import Context from '../contexts/Context';

const StatusCardTicketNav = (props) => {

    const { selectedTicket,
        handleTicketEdit,
        handleTicketSelect,
      /*   viewTicketFunction, */
    /*     editModalFunction */ } = useContext(Context);

    function handleChange(changes){
        handleTicketEdit(props.key,  {...selectedTicket, ...changes})
    }

    const statusButton = useRef();
    const [drop, dropFunction] = useState(false)
    function statusDropDown(status, e){ 
             dropFunction(status)
    }
    function editModal(){
        handleTicketSelect(props.key);
    
    }
    function viewTicket(){
        handleTicketSelect(props.key);
       
    }
    function selectTicketOnHover(){
        handleTicketSelect(props.key);
        statusDropDown(true);
    }
    function handleOnHold(){
        statusDropDown(false);
        handleChange({status: "On Hold"})
    }
    function handleBackLog(){
        statusDropDown(false);
        handleChange({status: "Backlog"})
    }
    return (
        <div className="statusCardTicket__nav">
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
    )
}

export default StatusCardTicketNav;