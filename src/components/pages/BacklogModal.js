import React, {useContext} from 'react';
import StoredStatusCard from '../StoredStatusCard';
import Context from '../../contexts/Context';

function BacklogModal(props){

    const {ticketsWithState} = useContext(Context);

    return (
    <div className="backlogModalContainer">
        <div className="backlogInnerContainer">
            <div className="backlogModalContent">
               
                <h2><i className="fa fa-calculator" aria-hidden="true"></i> Tickets in the Backlog</h2>
                {ticketsWithState.filter(ticket=>ticket.status==="Backlog").map( el => (    
                        <StoredStatusCard 
                            key={el.id} {...el}
                        ></StoredStatusCard>
                    ))}
            </div>
        </div>
    </div> 
    )
}

export default BacklogModal;