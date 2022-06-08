import React, { useState } from "react";
import DashBoardStatusCard from "../DashBoardStatusCard";

const lists = [
  { title: "New" },
  { title: "Open" },
  { title: "In Progress" },
  { title: "Resolved" },
  { title: "Verified" },
  { title: "Closed" },
];

const DashBoardOverView = () => {
  const [draggable_id, setDraggable_id] = useState("");

  return (
    <div className="center90">
      <h1>
        <i className="fa fa-list-alt" aria-hidden="true"></i> Sprint Dashboard
      </h1>
      <div className="dashBoardOverView">
        {lists.map((item) => (
          <DashBoardStatusCard
            key={item.title}
            title={item.title}
            draggable_id={draggable_id}
            onDrag={setDraggable_id}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoardOverView;
