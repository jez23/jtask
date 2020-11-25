import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Context from '../../contexts/Context';


const AddUser = () => {
  
   const {handleAddUser} = useContext(Context);
    const history = useHistory();      

   const [firstName, setFirstname] = useState('');
   const [lastName, setLastName] = useState('');
   const [jobTitle, setJobTitle] = useState('');
   const [email, setEmail] = useState('');

   const addUser = (e) => {
    
      const newUser = {
            id: uuidv4(),
            firstname: firstName,
            lastname: lastName,
            jobTitle: jobTitle,
            email: email
      }
      handleAddUser(newUser);
      history.push('/users');
    }

    return (
        <div className="addUserDetails">
            <div className="addUserDetails__form">
                <div className='titleUser__input'>
                            <h2><i className="fa fa-user-plus" aria-hidden="true"></i>ADD USER</h2>
                </div>
                <form className="addUserDetails__form__input" onSubmit={() => addUser()}>
                    <input placeholder="First Name" required value={firstName} onChange={(e) => setFirstname(e.target.value)}></input>
                    <input placeholder="Last Name" value={lastName} required onChange={(e) => setLastName(e.target.value)}></input>
                    <input placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}></input>
                    <input placeholder="Email Addess" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <button type="sumbit" >Add</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;