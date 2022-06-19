import React, { useContext, useEffect, useState } from "react";
import StoredStatusCard from "../StoredStatusCard";
import Context from "../../contexts/Context";


type TicketType = {
  id: number,
  status: string,
  title: string
}

const BackLog: React.FC = () => {
  const { allTickets } = useContext(Context);

  const [ticketBackLog, setTicketsBackLog] = useState<TicketType[]>([]);

  useEffect(() => {
    const backLog = allTickets.filter((ticket: {status: string}) => ticket.status === "Backlog");
    setTicketsBackLog(backLog);
  }, [allTickets])

  return (
    <div className="center60">
      <h2>
        <i className="fa fa-calculator" aria-hidden="true"></i> Tickets in the
        Backlog
      </h2>
      {ticketBackLog.length > 0 ? ticketBackLog.map(ticket => (
          <StoredStatusCard key={ticket.id} ticket={ticket}></StoredStatusCard>
        )): <h2>No tickets currently in the backlog</h2>}
    </div>
  );
}

export default BackLog;
