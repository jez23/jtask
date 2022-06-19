import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";

import StatusCardTicket from "./StatusCardTicket";
import Context from "../contexts/Context";

interface Props {
  title: string,
  onDrag: any
  draggable_id: string
}

const DashBoardStatusCard: React.FC<Props> = ({
  title,
  onDrag,
  draggable_id }) => {

  const { allTickets, handleTicketEdit } =
    useContext(Context);

  const dragOver: React.DragEventHandler<HTMLDivElement> | undefined = useCallback((e: any) => {
    e.preventDefault();

    handleChange(title, draggable_id);
  }, [title, draggable_id]);


  function handleChange(changes: any, id: string) {
    let ticket = allTickets.find((ticket: { id: string }) => ticket.id === id);
    ticket.status = changes;
    handleTicketEdit(id, ticket);
  }

  return (
    <div className="statusCardContainer">
      <h3>{title}</h3>
      {allTickets && <div className="dashBoardStatusCard" onDragEnter={dragOver}>
        {allTickets.filter((ticket: { status: string }) => ticket.status === title)
          .map((ticket: {
            id: string;
            status: string;
            title: string;
          }) => (
            <StatusCardTicket
              ticket={ticket}
              key={ticket.id}
              onDrag={onDrag}
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
