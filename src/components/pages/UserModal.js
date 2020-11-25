import React, { useContext } from 'react';
import Context from '../../contexts/Context';
import { Link } from 'react-router-dom'; 

/* function userModalContainerRemove(){
    const userModalContainer = document.querySelector('.userModalContainer');
    userModalContainer.classList.add('display')
} */

/* function newUserInputvalue(){

    const inputVal = document.querySelector('.addUser').value;
    document.querySelector('.addUser').value = ""
    return inputVal;
} */

function UserModal(props){


    const { usersWithState,  handleAddUser , setSideNavUserState} = useContext(Context);


    return (
        <div className="userModalContainer">
            <div className="userModalInnerContainer">
                <div className="userModalContent">
               {/*      <div className='closeButton'>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => setSideNavUserState(false)}></i>
                    </div> */}
                    <div className='titleUser'>
                        <h2><i className="fa fa-user-plus" aria-hidden="true"></i> USERS</h2>
                    </div>
                    <div className="user">
                            {usersWithState.map(el => {
                               
                                return (<div className="addedUser" key={el.id}>
                                    <div className="addUserImage">
                                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="addUserMeta">
                                        <div className="userName">
                                            <p>{el.firstname}</p>
                                        </div>
                                        <div className="userEmail">
                                            <p>{el.email}</p>
                                        </div>
                                        <div className="userTicketsAssigned">
                                            <p>3</p>
                                        </div>
                                    </div>
                                </div>) 
                            })}
                    </div>
                    <div className="add">
                           {/*  <input placeholder="Add new users here." className="addUser"></input> */}
                           <Link to='/users/add' className="navButton">Add User</Link>
                          {/*   <button onClick={() =>  handleAddUser(newUserInputvalue())}>Add</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal;