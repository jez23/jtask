import React,{useCallback} from 'react';
import StatusCardTicket from './StatusCardTicket';

function DashBoardStatusCard(props){

     /*https://www.youtube.com/watch?v=jfYWwQrtzzY */
     const dragOver = useCallback( () => {
       // console.log(props.title, props.draggable_id)
          handleChange(props.title, props.draggable_id) 
        },
        [props.title, props.draggable_id],
      );
  

    // useCallback(t,id){

      //  // console.log(e.target.id)

      // if(e.target.classList.contains('dashBoardStatusCard')){
      //    // console.log( e.target);
      //    // console.log(props.title , "tttttttt");
      //   // const draggable = document.querySelector('.dragging');

      //   //   // console.log(draggable.id, "pppppppppp")   
      //   // e.target.appendChild(draggable);
      //   // draggable.style.backgroundColor = props.color;
        // handleChange(props.title, draggable_id) 
      // } 

      // console.log(t,id)
    // }
    

  
    function handleChange(changes, id){
         
        let ticket = props.ticketsWithState.find(ticket => ticket.id === id)
    
        ticket.status = changes;
        // console.log(ticket.status , "mmmmmmmmmmmmmm")
        props.handleTicketEdit(id,  ticket)
      } 


      function newTicket(){
        console.log(1, "wruff")
        props.newTicketFunction(true)
      }
  
      return (
          <div className="statusCardContainer">
              <h3>{props.title}</h3>
              <div className="dashBoardStatusCard" onDragEnter={dragOver}>
              
              
                  {
                    props.ticketsWithState.filter(ticket=>ticket.status===props.title).map(ticket => 
                      <StatusCardTicket 
                        {...ticket} 
                        key={ticket.id} 
                        handleTicketSelect={props.handleTicketSelect}
                        onDrag = {props.onDrag}
                        handleTicketEdit={props.handleTicketEdit} 
                        editModalFunction={props.editModalFunction}
                        viewTicketFunction={props.viewTicketFunction}
                        selectedTicket={props.selectedTicket}
                      />
                    )
                  }
  
              
              </div>
              <button onClick={() => newTicket()} /* className="modalButton" */>Add new ticket</button>
          </div>
      )
  }
  
  export default DashBoardStatusCard;