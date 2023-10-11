import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const users = useLoaderData()
    console.log(users);

    return (
        <div>
            <Link to="/">Home</Link>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}</p>)
                }
            </div>
        </div>
    );
};

export default Users;