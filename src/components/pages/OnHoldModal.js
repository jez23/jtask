import React, { useContext } from "react";
import StoredStatusCard from "../StoredStatusCard";
import Context from "../../contexts/Context";

function OnHoldModal(props) {
  const { ticketsWithState } = useContext(Context);
  return (
    <div className="center60">
      <h2>
        <i className="fa fa-hourglass-end" aria-hidden="true"></i> Tickets On
        Hold
      </h2>
      {ticketsWithState
        .filter((ticket) => ticket.status === "On Hold")
        .map((el) => (
          <StoredStatusCard key={el.id} {...el}></StoredStatusCard>
        ))}
    </div>
  );
}

export default OnHoldModal;
