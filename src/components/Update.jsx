import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { updateUser } from '../store/Reducer'
import { useNavigate } from 'react-router-dom';

function Update() {


    
    const{id} = useParams();
    let uid = parseInt(id)
    let users = useSelector((state) => state.users);
    let existingUser = users.filter((user) => user.id === uid);
  const{name, email} = existingUser[0]
    const [uname,setuName] = useState(name);
    const [uemail,setuEmail] = useState(email);
    let dispatch = useDispatch();
    let navigate = useNavigate()
    let updateHandler=(e)=>{
      e.preventDefault();
      dispatch(updateUser({
        id: id,
        name : uname,
        email :uemail,
        
      }))
      navigate("/")
    }
  return (
    <div>
        <h1>Update Entry</h1>
        <form onSubmit={updateHandler}>
        <label htmlFor="updatename">Updated Name : </label>
            <input type="text" name="updatename" onChange={(e)=> setuName(e.target.value)} value={uname}/>
            <br/>
            <br/>
            <label htmlFor="updateemail">Updated Email : </label>
            <input type="email" name="updateemail" onChange={(e)=> setuEmail(e.target.value)} value={uemail}      />
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Update