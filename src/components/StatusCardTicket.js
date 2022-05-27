import React, { useRef, useState, useContext } from "react";
import Context from "../contexts/Context";
import { Link } from "react-router-dom";

function StatusCardTicket(props) {
  const {
    selectedTicket,
    handleTicketEdit,
    handleTicketSelect
  } = useContext(Context);

  const date = new Date();
  const getYear = date.getFullYear();
  function dragStartHandlerStart(event) {
    props.onDrag(props.id);
  }
  function handleChange(changes) {
    handleTicketEdit(props.id, { ...selectedTicket, ...changes });
  }
  const statusButton = useRef();
  const [drop, dropFunction] = useState(false);
  function statusDropDown(status, e) {
    dropFunction(status);
  }
  function editModal() {
    handleTicketSelect(props.id);
  }
  function viewTicket() {
    handleTicketSelect(props.id);
  }
  function selectTicketOnHover() {
    handleTicketSelect(props.id);
    statusDropDown(true);
  }
  function handleOnHold() {
    statusDropDown(false);
    handleChange({ status: "On Hold" });
  }
  function handleBackLog() {
    statusDropDown(false);
    handleChange({ status: "Backlog" });
  }

  return (
    <div
      className="statusCardTicket"
      draggable="true"
      id={props.id}
      onDragStart={dragStartHandlerStart}
    >
      <div className="statusCardTicket__info">
        <div
          className={`statusCardTicket__priority ${
            props.status === "New"
              ? "status_new"
              : props.status === "Open"
              ? "status_open"
              : props.status === "In Progress"
              ? "status_progress"
              : props.status === "Resolved"
              ? "status_resolved"
              : "status_closed"
          }`}
        >
          <p className="statusUpdate">{props.status}</p>
        </div>
        <h3>{props.title}</h3>
        <p>Date: {getYear}</p>
        <p>{props.id}</p>
      </div>
      <div className="statusCardTicket__nav">
        <div className="viewTicket">
          <Link to="/ViewTicket" onClick={() => viewTicket()}>
            <i className="fa fa-eye"></i>
          </Link>
        </div>
        <div className="editTicket">
          <Link to="/editticket" onClick={() => editModal()}>
            <i className="fa fa-pencil"></i>
          </Link>
        </div>
        <div
          className="archiveButton"
          onMouseEnter={() => selectTicketOnHover()}
          onTouchStart={() => selectTicketOnHover()}
          onMouseLeave={(e) => statusDropDown(false, e)}
          onTouchCancel={(e) => statusDropDown(false, e)}
        >
          <i className="fa fa-archive" aria-hidden="true"></i>
          {drop && (
            <div className="reassignTicket" ref={statusButton}>
              <ul>
                <li onClick={(e) => handleOnHold()}>On Hold</li>
                <li onClick={(e) => handleBackLog()}>Add To BackLog</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatusCardTicket;
