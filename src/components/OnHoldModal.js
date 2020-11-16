import React, {useContext} from 'react';
import StoredStatusCard from './StoredStatusCard';
import Context from '../contexts/Context';


function OnHoldModal(props){

    const {  ticketsWithState } = useContext(Context);
    return (

        <div className="onHoldModalContainer" onClick={() => props.setOnHoldState(false)}>
            <div className="onHoldModalInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="onHoldModalContent">
                    <div className='onHoldcloseButton'>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => props.setOnHoldState(false)}></i>
                    </div>
                    <h2><i className="fa fa-hourglass-end" aria-hidden="true"></i> Tickets On Hold</h2>
                    { ticketsWithState.filter(ticket=>ticket.status==="On Hold").map( el => (
                        <StoredStatusCard 
                            key={el.id} {...el}
                        ></StoredStatusCard>
                    ))}
                </div>
            </div>
       </div> 
    )
}

export default OnHoldModal;