import React, { useRef, useState, useContext } from "react";
import Context from "../contexts/Context";
import { Link } from "react-router-dom";

function StatusCardTicket({ ticket, onDrag }) {
  const {
    handleTicketEdit
  } = useContext(Context);


  const date = new Date();
  const getYear = date.getFullYear();
  function dragStartHandlerStart(event) {
    onDrag(ticket.id);
  }

  const statusButton = useRef();
  const [drop, dropFunction] = useState(false);
  function statusDropDown(status, e) {
    dropFunction(status);
  }
  function selectTicketOnHover(id) {
    statusDropDown(true);
  }
  function handleOnHold() {
    statusDropDown(false);
    ticket.status = "On Hold";
    handleTicketEdit(ticket.id, { ...ticket });

  }
  function handleBackLog(id) {
    statusDropDown(false);

    ticket.status = "Backlog";
    handleTicketEdit(id, { ...ticket });
  }

 
  return (
    <div
      className="statusCardTicket"
      draggable="true"
      id={ticket.id}
      onDragStart={dragStartHandlerStart}
    >
      <div className="statusCardTicket__info" >
        <div
          className={`statusCardTicket__priority ${
            ticket.status === "New"
              ? "status_new"
              : ticket.status === "Open"
              ? "status_open"
              : ticket.status === "In Progress"
              ? "status_progress"
              : ticket.status === "Resolved"
              ? "status_resolved"
              : "status_closed"
          }`}
        >
          <p className="statusUpdate">{ticket.status}</p>
        </div>
        <h3>{ticket.title}</h3>
        <p>Date: {getYear}</p>
        <p>Ticket ID: {ticket.id}</p>
      </div>
      <div className="statusCardTicket__nav">
        <div className="viewTicket">
          <Link to={`/ViewTicket/${ticket.id}`}>
            <i className="fa fa-eye"></i>
          </Link>
        </div>
        <div className="editTicket">
          <Link to={`/edit-ticket/${ticket.id}`}>
            <i className="fa fa-pencil"></i>
          </Link>
        </div>
        <div
          className="archiveButton"
          onMouseEnter={() => selectTicketOnHover(ticket.id)}
          onTouchStart={() => selectTicketOnHover(ticket.id)}
          onMouseLeave={(e) => statusDropDown(false, e)}
          onTouchCancel={(e) => statusDropDown(false, e)}
        >
          <i className="fa fa-archive" aria-hidden="true"></i>
          {drop && (
            <div className="reassignTicket" ref={statusButton}>
              <ul>
                <li onClick={(e) => handleOnHold(ticket.id)}>On Hold</li>
                <li onClick={(e) => handleBackLog(ticket.id)}>Add To BackLog</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatusCardTicket;
