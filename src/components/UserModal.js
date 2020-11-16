import React, { useContext } from 'react';
import Context from '../contexts/Context';

/* function userModalContainerRemove(){
    const userModalContainer = document.querySelector('.userModalContainer');
    userModalContainer.classList.add('display')
} */

function newUserInputvalue(){

    const inputVal = document.querySelector('.addUser').value;
    document.querySelector('.addUser').value = ""
    return inputVal;
}

function UserModal(props){


    const { usersWithState,  handleAddUser , setSideNavUserState} = useContext(Context);


    return (
        <div className="userModalContainer" onClick={() => setSideNavUserState(false)}>
            <div className="userModalInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="userModalContent">
                    <div className='closeButton'>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => setSideNavUserState(false)}></i>
                    </div>
                    <div className='titleUser'>
                        <h2><i className="fa fa-user-plus" aria-hidden="true"></i> ADD NEW USERS</h2>
                    </div>
                    <div className="user">
                            {usersWithState.map(el => (
                                <div className="addedUser" key={el}>
                                    <div className="addUserImage">
                                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="addUserMeta">
                                        <p>{el}</p>
                                    </div>
                                </div>))}
                    </div>
                    <div className="add">
                            <input placeholder="Add new users here." className="addUser"></input>
                            <button onClick={() =>  handleAddUser(newUserInputvalue())}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal;