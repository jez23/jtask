import React, { useContext, useEffect, useState  } from "react";
import StoredStatusCard from "../StoredStatusCard";
import Context from "../../contexts/Context";

function OnHoldModal() {
  const { allTickets } = useContext(Context);

  const [ticketOnHold, setTicketsOnHold] = useState([]);

  useEffect(() => {
    const onHold = allTickets.filter((ticket) => ticket.status === "On Hold");
    setTicketsOnHold(onHold);
  }, [allTickets])

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-hourglass-end" aria-hidden="true"></i> Tickets On
        Hold
      </h2>
      {ticketOnHold.length > 0 ? ticketOnHold.map((ticket) => (
          <StoredStatusCard key={ticket.id} ticket={ticket}></StoredStatusCard>
        )) : <h2>No tickets currently on hold.</h2>}
    </div>
  );
}

export default OnHoldModal;
