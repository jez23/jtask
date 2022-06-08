import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import StatusCardTicket from "./StatusCardTicket";
import Context from "../contexts/Context";

function DashBoardStatusCard(props) {
  const { allTickets, handleTicketEdit } =
    useContext(Context);

  const dragOver = useCallback((e) => {
    e.preventDefault();

    handleChange(props.title, props.draggable_id);
  }, [props.title, props.draggable_id]);

 
  function handleChange(changes, id) {
    let ticket = allTickets.find((ticket) => ticket.id === id);
    ticket.status = changes;
    handleTicketEdit(id, ticket);
  }

  return (
    <div className="statusCardContainer">
      <h3>{props.title}</h3>
      {allTickets && <div className="dashBoardStatusCard" onDragEnter={dragOver}>
        {allTickets.filter((ticket) => ticket.status === props.title)
          .map((ticket) => (
            <StatusCardTicket
              ticket={ticket}
              key={ticket.id}
              onDrag={props.onDrag}
            />
          ))}
      </div>}
      <Link to="/new-ticket">
        <button className="btn">Add new ticket</button>
      </Link>
    </div>
  );
}

export default DashBoardStatusCard;
