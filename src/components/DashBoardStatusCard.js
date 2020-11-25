import React, {useCallback, useContext} from 'react';
import { Link } from 'react-router-dom';

import StatusCardTicket from './StatusCardTicket';
import Context from '../contexts/Context';



function DashBoardStatusCard(props){

  const { ticketsWithState, handleTicketEdit, newTicketFunction } = useContext(Context);

     const dragOver = useCallback( () => {
          handleChange(props.title, props.draggable_id) 
        },
        [props.title, props.draggable_id],
      );
  
    function handleChange(changes, id){
         
        let ticket = ticketsWithState.find(ticket => ticket.id === id)
    
        ticket.status = changes;
        handleTicketEdit(id,  ticket)
      } 

      function newTicket(){
        newTicketFunction(true)
      }
  
      return (
          <div className="statusCardContainer">
           
              <h3>{props.title}</h3>
              <div className="dashBoardStatusCard" onDragEnter={dragOver}>
             
              
                  {
                    ticketsWithState.filter(ticket=>ticket.status===props.title).map(ticket => 
                      <StatusCardTicket 
                        {...ticket} 
                        key={ticket.id} 
                        onDrag = {props.onDrag}
                      />
                    )
                  }
  
              
              </div>
              <Link to="/newticket" onClick={() => newTicket()} /* className="modalButton" */>Add new ticket</Link>
          </div>
      )
  }
  
  export default DashBoardStatusCard;