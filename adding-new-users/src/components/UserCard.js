import React from 'react';

function UserCard (props) {
    return(
        <div>
            <h3>{props.details.name}</h3>
            <p>{props.details.email}</p>
        </div>
    )
}

export default UserCard