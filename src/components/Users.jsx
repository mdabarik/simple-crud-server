import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    
    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5555/users/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert("deleted")
                const remaining = users.filter(user => user._id != _id);
                console.log(remaining);
                setUsers(remaining)
            } else {
                alert("Not deleted")
            }
        })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h2>{users.length}</h2>
            
            <div>
                
                {
                    users.map(user => <p 
                        key={user._id}> 
                        {user.name}
                        <button 
                            onClick={() => handleDelete(user._id)}
                        >X</button> 
                        <Link to={`/users/${user._id}`}>Update</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;