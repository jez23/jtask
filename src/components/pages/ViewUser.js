import React, { useContext } from 'react';
import Context from '../../contexts/Context';


const ViewUser = () => {

    const { selectedUser } = useContext(Context);


console.log(selectedUser)
    return (
        <div>
            {selectedUser.map(el => {
                console.log(el)
                return (

                  
                <div key={el.id} className="profileContainer">
                    <div className="profileContainer__title">
                        <h2><i class="fa fa-user-plus" aria-hidden="true"></i> USERS</h2>  
                    </div>
                    <div className="profileContainer__profile">
                    <div className="profileContainer__profile__image">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>        
                        <div className="profileContainer__profile__name">
                               <h3>{`${el.firstname} ${el.lastname}`}</h3>
                               <h4>{el.jobTitle || `Job Title Not Supplied.`}</h4>
                        </div>
                        <div className="profileContainer__profile__button">
                            <a className="emailbtn" href={`mailto:${el.email}`}>Email</a>
                        </div> 
                    </div>
                </div>)
            })}
        </div>
    )
}

export default ViewUser;
