import React from 'react';
import StoredStatusCard from './StoredStatusCard';

function BacklogModal(props){

    return (
    <div className="backlogModalContainer" onClick={() =>  props.setBackLogState(false)}>
        <div className="backlogInnerContainer" onClick={(e) =>  e.stopPropagation()}>
            <div className="backlogModalContent">
                <div className='backlogCloseButton'>
                    <i className="fa fa-window-close" aria-hidden="true" onClick={() =>  props.setBackLogState(false)}></i>
                </div>
                <h2><i class="fa fa-calculator" aria-hidden="true"></i> Tickets in the Backlog</h2>
                {props.ticketsWithState.filter(ticket=>ticket.status==="Backlog").map( el => (    
                        <StoredStatusCard 
                            key={el.id} {...el}
                            selectedTicket={props.selectedTicket}
                            handleTicketSelect={props.handleTicketSelect}
                            handleTicketEdit={props.handleTicketEdit}
                        ></StoredStatusCard>
                    ))}
            </div>
        </div>
    </div> 
    )
}

export default BacklogModal;