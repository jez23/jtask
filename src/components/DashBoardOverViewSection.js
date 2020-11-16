import React,{useState, useContext} from 'react';
import DashBoardStatusCard from './DashBoardStatusCard';
import Modal from './Modal';
import EditModal from './EditModal';
import UserModal from './UserModal';
import OnHoldModal from './OnHoldModal';
import BacklogModal from './BacklogModal';
import ViewTicketModal from './ViewTicketModal';
import Context from '../contexts/Context';


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

    const { newTicketModal , editModal, viewTicketModal, sideNavUserState } = useContext(Context);

    return (
        <>
        <div className="dashBoardOverView">
            {
                lists.map(item=>
                    <DashBoardStatusCard 
                        key={item.title} 
                        title={item.title} 
                        draggable_id={draggable_id}
                        onDrag = {setDraggable_id}
                    />
                )
            }
            
        </div>

        { newTicketModal && 
            <Modal  />}
        
        {
           editModal  &&  
            <EditModal />
        }
        
        { sideNavUserState &&
            <UserModal />}
        
        { props.onHoldState &&
            <OnHoldModal 
                 setOnHoldState={props.setOnHoldState}
             />
        }

        { props.backLogState && 
            <BacklogModal 
                setBackLogState={props.setBackLogState}
        />}

        {
           viewTicketModal
        && 
            <ViewTicketModal />
        }    

        </>


           
    )
}


export default DashBoardOverView;