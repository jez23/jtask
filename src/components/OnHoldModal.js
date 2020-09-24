import React from 'react';
import StoredStatusCard from './StoredStatusCard';

function OnHoldModal(props){


    return (

        <div className="onHoldModalContainer" onClick={() => props.setOnHoldState(false)}>
            <div className="onHoldModalInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="onHoldModalContent">
                    <div className='onHoldcloseButton'>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => props.setOnHoldState(false)}></i>
                    </div>
                    <h2><i class="fa fa-hourglass-end" aria-hidden="true"></i> Tickets On Hold</h2>
                    {props.ticketsWithState.filter(ticket=>ticket.status==="On Hold").map( el => (
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

export default OnHoldModal;