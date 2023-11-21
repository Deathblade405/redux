import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/Reducer';

function Home() {
    let users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    
  return (
    <div>
        <button><Link to={'/create'}>Create</Link></button>
        <table className='table'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            <tbody>
                {users.map((user)=> 
                <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button><Link to={`/edit/${user.id}`}>Edit</Link></button>
                    <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
                </td>
                </tr>
                )}
                
            </tbody>
        </table>
    </div>
  )
}

export default Home