import React, { useRef, useContext } from "react";
import Context from "../../contexts/Context";

function ViewTicketModal(props) {
  const {
    selectedTicket,
    handleTicketEdit,
    viewTicketFunction,
    removeSelectedTicket,
  } = useContext(Context);

  function handleChange(changes) {
    selectedTicket.comments.push(changes);
    let select = selectedTicket;
    textareaRef.current.value = "";
    handleTicketEdit(select.id, select);
  }
  let textareaRef = useRef();

  return (
    <div className="center60">
      <h2>{selectedTicket.title}</h2>
      <p className="viewTicketID">
        <i className="fa fa-id-badge" aria-hidden="true"></i>
        {selectedTicket.id}
      </p>
      <hr />
      <h3>
        <i className="fa fa-info-circle" aria-hidden="true"></i> Details:
      </h3>
      <div className="viewTicketDetails">
        <p>
          <strong>TYPE:</strong> {selectedTicket.type}
        </p>
        <p>
          <strong>PRIORITY:</strong> {selectedTicket.priority}
        </p>
        <p>
          <strong>STATUS:</strong> {selectedTicket.status}
        </p>
        <p>
          <strong>ASSIGNEE:</strong> {selectedTicket.assignedTo}
        </p>
        <p>
          <strong>STORY POINTS:</strong> {selectedTicket.points}
        </p>
      </div>
      <hr />
      <h3>
        <i className="fa fa-commenting-o" aria-hidden="true"></i> Description:
      </h3>
      <p className="summaryText">{selectedTicket.summary}</p>
      <hr />
      <h3>
        <i className="fa fa-comments" aria-hidden="true"></i> Comments:
      </h3>
      <div className="commentArea">
        {selectedTicket.comments.map((element) => {
          return (
            <div
              className="commentContainer"
              key={selectedTicket.id + Math.random()}
            >
              <div className="commentImage">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
              <div className="commentMeta">
                <p>
                  <strong>{element.userName}</strong>
                </p>
                <p>{element.comment}</p>
              </div>
              <p></p>
            </div>
          );
        })}
        <textarea
          ref={textareaRef}
          className=""
          placeholder="Add a note about this ticket"
          cols="30"
          rows="5"
        ></textarea>
        <button
          className="btn"
          onClick={(e) =>
            handleChange({
              userName: "Admin",
              comment: textareaRef.current.value,
            })
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ViewTicketModal;
