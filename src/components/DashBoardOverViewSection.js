import React,{useState} from 'react';
import DashBoardStatusCard from './DashBoardStatusCard';
import Modal from './Modal';
import EditModal from './EditModal';
import UserModal from './UserModal';
import OnHoldModal from './OnHoldModal';
import BacklogModal from './BacklogModal';
import ViewTicketModal from './ViewTicketModal';


const lists = [
    {title:"New"},
    {title:"Open"},
    {title:"In Progress"},
    {title:"Resolved"},
    {title:"Verified"},
    {title:"Closed"}
]



function DashBoardOverView(props){
    const [draggable_id,setDraggable_id] = useState('')

 

    return (
        <>
        <div className="dashBoardOverView">
            {
                lists.map(item=>
                    <DashBoardStatusCard 
                        key={item.title} 
                        title={item.title} 
                        color={item.color} 
                        handleTicketEdit={props.handleTicketEdit} 
                        ticketsWithState={props.ticketsWithState}
                        draggable_id={draggable_id}
                        onDrag = {setDraggable_id}
                        editModalFunction={props.editModalFunction}
                        newTicketFunction={props.newTicketFunction}
                        viewTicketFunction={props.viewTicketFunction}
                        selectedTicket={props.selectedTicket}
                        handleTicketSelect={props.handleTicketSelect}
                    />
                )
            }
            
        </div>

        { props.newTicketModal && 
            <Modal  
            handleTicketAdd={props.handleTicketAdd}
            ticketsWithState={props.ticketsWithState}
            setEmptyTicketsFunction={props.setEmptyTicketsFunction}
            emptyTicketsWithState={props.emptyTicketsWithState}
            usersWithState={props.usersWithState}
            newTicketFunction={props.newTicketFunction}
        />}
        
        {
            props.editModal  &&  
            <EditModal
                handleTicketAdd={props.handleTicketAdd}
                ticketsWithState={props.ticketsWithState}
                handleTicketEdit={props.handleTicketEdit}
                selectedTicket={props.selectedTicket}
                removeSelectedTicket={props.removeSelectedTicket}
                usersWithState={props.usersWithState}
                editModalFunction={props.editModalFunction}
            />
        }
        
        { props.sideNavUserState &&
            <UserModal
            setUserFunction={props.setUserFunction}
            usersWithState={props.usersWithState}
            handleAddUser={props.handleAddUser}
            setSideNavUserState={props.setSideNavUserState}
        />}
        
        { props.onHoldState &&
            <OnHoldModal 
                 ticketsWithState={props.ticketsWithState}
                 setOnHoldState={props.setOnHoldState}
                 handleTicketEdit={props.handleTicketEdit}
                 selectedTicket={props.selectedTicket}
                 handleTicketSelect={props.handleTicketSelect}
             />
        }

        { props.backLogState && 
            <BacklogModal 
             ticketsWithState={props.ticketsWithState}
             setBackLogState={props.setBackLogState}
             handleTicketEdit={props.handleTicketEdit}
             selectedTicket={props.selectedTicket}
             handleTicketSelect={props.handleTicketSelect}
        />}

        {
            props.viewTicketModal
        && 
            <ViewTicketModal 
                selectedTicket={props.selectedTicket}
                ticketsWithState={props.ticketsWithState}
                removeSelectedTicket={props.removeSelectedTicket}
                handleTicketEdit={props.handleTicketEdit} 
                viewTicketFunction={props.viewTicketFunction}
            />
        }    

        </>


           
    )
}


export default DashBoardOverView;