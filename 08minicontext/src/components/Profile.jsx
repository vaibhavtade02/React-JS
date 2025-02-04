import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <h3>Please login</h3>

    return <div> <h2>Welcome {user.username} </h2></div>
}

export default Profile