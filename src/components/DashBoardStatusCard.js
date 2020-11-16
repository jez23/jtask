import React, {useCallback, useContext} from 'react';
import StatusCardTicket from './StatusCardTicket';
import Context from '../contexts/Context';


function DashBoardStatusCard(props){


  const { ticketsWithState, handleTicketEdit, newTicketFunction } = useContext(Context);


     /*https://www.youtube.com/watch?v=jfYWwQrtzzY */
     const dragOver = useCallback( () => {
       // console.log(props.title, props.draggable_id)
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
              <button onClick={() => newTicket()} /* className="modalButton" */>Add new ticket</button>
          </div>
      )
  }
  
  export default DashBoardStatusCard;