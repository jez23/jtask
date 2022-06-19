import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../contexts/Context";

interface Props {
  ticket: {
    id: number,
    status: string,
    title: string
  }
}

const StoredStatusCard: React.FC<Props> = ({ ticket }) => {
  const { handleTicketEdit } = useContext(Context);

  const [newStatusShow, setNewStatusShow] = useState(false);

  function handleChange(changes: any) {
    handleTicketEdit(ticket.id, { ...ticket, ...changes });
  }

  return (
    <div className="storedStatusCard">
      <div className="storedStatusCard__info">
        <div className="storedMeta">
          <p
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
            }
                `}
          >
            {ticket.status}
          </p>
          <h3>{ticket.title}</h3>
          <p>
            <i className="fa fa-id-badge" aria-hidden="true"></i> Ticket ID:
            {ticket.id}
          </p>
        </div>

        <div className="storedOption">
          <div className="storedOption__nav">
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
          </div>
        </div>
      </div>
      <div
        className="MoveDropDownContainer"
        onMouseEnter={() => setNewStatusShow(true)}
        onMouseLeave={() => setNewStatusShow(false)}
        onTouchCancel={() => setNewStatusShow(false)}
      >
        <button className="changeStatusStored">Change Status</button>
        {newStatusShow && (
          <div className="storedStatusCardMove">
            <ul>
              <li onClick={() => handleChange({ status: "New" })}>New</li>
              <li onClick={() => handleChange({ status: "Open" })}>Open</li>
              <li onClick={() => handleChange({ status: "In Progress" })}>
                In Progress
              </li>
              <li onClick={() => handleChange({ status: "Resolved" })}>
                Resolved
              </li>
              <li onClick={() => handleChange({ status: "Verified" })}>
                Verified
              </li>
              <li onClick={() => handleChange({ status: "Closed" })}>Closed</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoredStatusCard;
