import React, { useRef } from 'react';

function ViewTicketModal(props){

   
    function handleChange(changes){
        
        props.selectedTicket.comments.push(changes)
        let select = props.selectedTicket;
        textareaRef.current.value = ""
      //  test.value = "";
       props.handleTicketEdit(select.id, select)
    }
    let textareaRef = useRef();
   
    return (
      <div className="viewTicketModalContainer" onClick={(e) => props.viewTicketFunction(false)}>
        <div className="viewTicketModalInnerContainer"  onClick={(e) => e.stopPropagation()}>
            <div className="viewTicketModalContent">
                <div className='viewTicketCloseButton' onClick={props.removeSelectedTicket}>
                    <i className="fa fa-window-close" aria-hidden="true" onClick={() => props.viewTicketFunction(false)}></i>
                </div>
                    <h2>{props.selectedTicket.title}</h2>
                    <p className="viewTicketID"><i className="fa fa-id-badge" aria-hidden="true"></i> {props.selectedTicket.id}</p>
                    <hr />
                    <h3><i className="fa fa-info-circle" aria-hidden="true"></i> Details:</h3>
                    <div className="viewTicketDetails">
                        <p><strong>TYPE:</strong> {props.selectedTicket.type}</p>
                        <p><strong>PRIORITY:</strong> {props.selectedTicket.priority}</p>
                        <p><strong>STATUS:</strong> {props.selectedTicket.status}</p>
                        <p><strong>ASSIGNEE:</strong> {props.selectedTicket.assignedTo}</p>
                        <p><strong>STORY POINTS:</strong> {props.selectedTicket.points}</p>
                    </div>
                    <hr />
                    <h3><i className="fa fa-commenting-o" aria-hidden="true"></i> Description:</h3>
                    <p className="summaryText">{props.selectedTicket.summary}</p>
                    <hr />
                    <h3><i className="fa fa-comments" aria-hidden="true"></i> Comments:</h3>
                    <div className="commentArea">
                        {props.selectedTicket.comments.map(element => {
                               return (
                                        <div className="commentContainer">
                                            <div className="commentImage">
                                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                            </div>    
                                            <div className="commentMeta">
                                                    <p><strong>{element.userName}</strong></p>
                                                    <p>{element.comment}</p>
                                            </div>                                        
                                        <p></p>
                                        </div>
                                        )
                        })}
                        <textarea ref={textareaRef} className="" placeholder="Add a note about this ticket" cols="30" rows="5"></textarea>
                        <button onClick={e => handleChange({ userName: "Admin", comment: textareaRef.current.value})}>Add</button>
                    </div>
            </div>
        </div>
      </div> 
    )
}

export default ViewTicketModal;