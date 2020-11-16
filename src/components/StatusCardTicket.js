import React, { useRef, useState, useContext} from "react";
import Context from '../contexts/Context';





function StatusCardTicket(props){

    const { selectedTicket , handleTicketEdit , handleTicketSelect, viewTicketFunction , editModalFunction } = useContext(Context);
 
    const date = new Date();
    const getYear = date.getFullYear();
    function dragStartHandlerStart(event) {
        props.onDrag(props.id)
    }
    function handleChange(changes){
        handleTicketEdit(props.id,  {...selectedTicket, ...changes})
    }
    const statusButton = useRef();
    const [drop, dropFunction] = useState(false)
    function statusDropDown(status, e){ 
             dropFunction(status)
    }
    function editModal(){
        handleTicketSelect(props.id);
        editModalFunction(true);
    }
    function viewTicket(){
        handleTicketSelect(props.id);
        viewTicketFunction(true);
    }
    function selectTicketOnHover(){
        handleTicketSelect(props.id);
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
        <div className="statusCardTicket" draggable="true" id={props.id}  onDragStart={dragStartHandlerStart}>
            <div className="statusCardTicket__info">
                <div className="statusCardTicket__priority">
                <p className="statusUpdate">{props.status}</p>
                </div>
                <h3>{props.title}</h3>
                <p>Date: {getYear}</p>
                <p>{props.id}</p>
            </div>
            <div className="statusCardTicket__nav">
                    <div className="viewTicket">
                        <i className="fa fa-eye" aria-hidden="true" onClick={() => viewTicket()}></i>
                    </div>
                    <div className="editTicket">
                        <i className="fa fa-pencil" aria-hidden="true" onClick={() => editModal()}></i>
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
        </div>
    )

}

export default StatusCardTicket;