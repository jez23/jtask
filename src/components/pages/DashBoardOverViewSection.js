 import React,{useState } from 'react';
import DashBoardStatusCard from '../DashBoardStatusCard';

/* import Context from '../contexts/Context'; */


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

   /*  const { newTicketModal,
            editModal,
            viewTicketModal,
            sideNavUserState ,
            onHoldState,
            setOnHoldState,
            backLogState,
            setBackLogState} = useContext(Context); */

    return (
        <>
         <h1><i class="fa fa-list-alt" aria-hidden="true"></i> Sprint Dashboard</h1>
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
     
        </>           
   )
}


export default DashBoardOverView; 