import React, { useContext, useEffect, useState } from "react";
import Context from "../../contexts/Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
/* import deletedUser from "../../img/deleted.png"; */

type TicketParams = {
  ticket_id: string;
};

type ticketObj = {
  comments: {
    id: any
    comment: any
  }[],
  id: string,
  title: string,
  firstname: string,
  lastname: string,
  type: string,
  priority: string,
  status: string,
  points: string,
  summary: string,
}

type AssignedUserObj = {
  id: string,
  firstname: string,
  lastname: string
}

const ViewTicket: React.FC = () => {
  const { ticket_id } = useParams<TicketParams>();

  const { handleTicketEdit, allUsers, loggedInUser, allTickets } =
    useContext(Context);

  const [comment, setComment] = useState<string>("");
  const [assignedUser, setAssignedUser] = useState<AssignedUserObj>({
    id: "",
    firstname: "",
    lastname: ""
  });
  const [selectedTicket, setSelectedTicket] = useState<ticketObj>({
    comments: [{
      id: "",
      comment: ""
    }],
    id: "",
    title: "",
    firstname: "",
    lastname: "",
    type: "",
    priority: "",
    status: "",
    points: "",
    summary: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newCommentObj = {
      id: loggedInUser.id,
      comment: comment,
    };

    selectedTicket.comments.push(newCommentObj);

    handleTicketEdit(selectedTicket.id, selectedTicket);
    setComment("");
  }

  useEffect(() => {
    const chosenTicket = allTickets.filter(
      (ticket: { id: number }) => ticket.id === +ticket_id
    );

    if (chosenTicket.length > 0) {
      setSelectedTicket(chosenTicket[0]);
      const getUser = allUsers.filter(
        (user: { id: number }) => user.id === +chosenTicket[0].assignedTo
      );
      setAssignedUser(getUser[0]);
    }
    setIsLoading(false);
  }, [ticket_id, allTickets, allUsers]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : selectedTicket ? (
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
              <strong>ASSIGNEE:</strong>
              <Link
                to={`/user/view/${assignedUser.id}`}
              >{`${assignedUser.firstname} ${assignedUser.lastname}`}</Link>
            </p>
            <p>
              <strong>STORY POINTS:</strong> {selectedTicket.points}
            </p>
          </div>
          <hr />
          <h3>
            <i className="fa fa-commenting-o" aria-hidden="true"></i>{" "}
            Description:
          </h3>
          <p className="summaryText">{selectedTicket.summary}</p>
          <hr />
          <h3>
            <i className="fa fa-comments" aria-hidden="true"></i> Comments:
          </h3>
          <div className="commentArea">
            {selectedTicket.comments.map((comment: { id: number , comment: string}) => {
              
              const commentBy: { id: number, img: string, firstname: string, lastname: string } = allUsers.filter(
                (user: { id: number }) => user.id === +comment.id
              )[0];

              return (
                <div
                  className="commentContainer"
                  key={selectedTicket.id + Math.random()}
                >
                  <div className="commentImage">
                    {commentBy ? (
                      <Link to={`/user/view/${comment.id}`}>
                        <img src={`${commentBy.img}`} alt="user who made the comment" />
                      </Link>
                    ) : (
                      <img src={'https://jezblackmore.com/jtask/fakeUsers/deleted.png'} alt="deleted user" />
                    )}
                  </div>
                  <div className="commentMeta">
                    {commentBy ? (
                      <p>
                        <strong>{`${commentBy.firstname} ${commentBy.lastname}`}</strong>
                      </p>
                    ) : (
                      <p>
                        <strong>Deleted user</strong>
                      </p>
                    )}

                    <p>{comment.comment || ""}</p>
                  </div>
                  <p></p>
                </div>
              );
            })}

            <form onSubmit={handleSubmit}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a note about this ticket"
                cols={30}
                rows={5}
                required
              ></textarea>
              <button className="btn" type="submit">
                Add New Comment
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="center60">
          <h2>Ticket Not Found</h2>
        </div>
      )}
    </>
  );
}

export default ViewTicket;
