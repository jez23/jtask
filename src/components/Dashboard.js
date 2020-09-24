import React from 'react';
import DashBoardOverViewSection from './DashBoardOverViewSection';
/* import SearchWidget from './SearchWidget'; */
import Header from './Header';


function Dashboard(props){
    return (
        <div className="dashBoard">
                <Header  setSideBarState={props.setSideBarState}/>
             {/*    <SearchWidget /> */}
             <h1><i class="fa fa-list-alt" aria-hidden="true"></i> Sprint Dashboard</h1>
                <DashBoardOverViewSection 
                    ticketsWithState={props.ticketsWithState}
                    handleTicketAdd={props.handleTicketAdd}
                    handleTicketEdit={props.handleTicketEdit}
                    handleTicketSelect={props.handleTicketSelect}
                    selectedTicket={props.selectedTicket}
                    removeSelectedTicket={props.removeSelectedTicket}
                    setEmptyTicketsFunction={props.setEmptyTicketsFunction}
                    emptyTicketsWithState={props.emptyTicketsWithState}
                    usersWithState={props.usersWithState}
                    setUserFunction={props.setUserFunction}
                    handleAddUser={props.handleAddUser}
                    editModalFunction={props.editModalFunction}
                    newTicketFunction={props.newTicketFunction}
                    viewTicketFunction={props.viewTicketFunction}
                    viewTicketModal={props.viewTicketModal}
                    newTicketModal={props.newTicketModal}
                    editModal={props.editModal}
                    sideNavUserState={props.sideNavUserState}
                    setSideNavUserState={props.setSideNavUserState}
                    onHoldState={props.onHoldState}
                    setOnHoldState={props.setOnHoldState}
                    backLogState={props.backLogState}
                    setBackLogState={props.setBackLogState}/>
        </div>
    )
}

export default Dashboard;