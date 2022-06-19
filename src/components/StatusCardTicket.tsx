import React, { useRef, useState, useContext } from "react";
import Context from "../contexts/Context";
import { Link } from "react-router-dom";

interface Props {
  ticket: {
    id: string,
    status: string,
    title: string
  },
  onDrag: (string: string) => string
}


const StatusCardTicket: React.FC<Props> = ({ ticket, onDrag }) => {
  const {
    handleTicketEdit
  } = useContext(Context);


  const date = new Date();
  const getYear = date.getFullYear();
  function dragStartHandlerStart() {
    onDrag(ticket.id);
  }

  const statusButton = useRef<HTMLDivElement>(null);
  const [drop, dropFunction] = useState(false);
  function statusDropDown(status: boolean, e?: any) {
    dropFunction(status);
  }
  function selectTicketOnHover(id: any) {
    statusDropDown(true);
  }
  function handleOnHold(ticket: any) {
    statusDropDown(false);
    ticket.status = "On Hold";
    handleTicketEdit(ticket.id, { ...ticket });

  }
  function handleBackLog(id: string) {
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
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => statusDropDown(false, e)}
          onTouchCancel={(e: React.TouchEvent<HTMLDivElement>) => statusDropDown(false, e)}
        >
          <i className="fa fa-archive" aria-hidden="true"></i>
          {drop && (
            <div className="reassignTicket" ref={statusButton}>
              <ul>
                <li onClick={(e) => handleOnHold(ticket)}>On Hold</li>
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
