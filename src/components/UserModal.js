import React from 'react';


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
    return (
        <div className="userModalContainer" onClick={() => props.setSideNavUserState(false)}>
            <div className="userModalInnerContainer" onClick={(e) => e.stopPropagation()}>
                <div className="userModalContent">
                    <div className='closeButton'>
                        <i className="fa fa-window-close" aria-hidden="true" onClick={() => props.setSideNavUserState(false)}></i>
                    </div>
                    <div className='titleUser'>
                        <h2><i class="fa fa-user-plus" aria-hidden="true"></i> ADD NEW USERS</h2>
                    </div>
                    <div className="user">
                            {props.usersWithState.map(el => (
                                <div className="addedUser" key={el}>
                                    <div className="addUserImage">
                                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                                    </div>
                                    <div className="addUserMeta">
                                        <p>{el}</p>
                                    </div>
                                </div>))}
                    </div>
                    <div className="add">
                            <input placeholder="Add new users here." className="addUser"></input>
                            <button onClick={() => props.handleAddUser(newUserInputvalue())}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal;