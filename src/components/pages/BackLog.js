import React, { useContext, useEffect, useState } from "react";
import StoredStatusCard from "../StoredStatusCard";
import Context from "../../contexts/Context";

const BackLog = () => {
  const { allTickets } = useContext(Context);

  const [ticketBackLog, setTicketsBackLog] = useState([]);

  useEffect(() => {
    const backLog = allTickets.filter((ticket) => ticket.status === "Backlog");
    setTicketsBackLog(backLog);
  }, [allTickets])

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-calculator" aria-hidden="true"></i> Tickets in the
        Backlog
      </h2>
      {ticketBackLog.length > 0 ? ticketBackLog.map((ticket) => (
          <StoredStatusCard key={ticket.id} ticket={ticket}></StoredStatusCard>
        )): <h2>No tickets currently in the backlog</h2>}
    </div>
  );
}

export default BackLog;
