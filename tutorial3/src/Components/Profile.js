import React from 'react';

function Profile(props) {
    return (
        <div>
           <h2>Profile</h2>
            <h2> First Name : {props.firstName}</h2>
            <h2> Last Name : {props.lastName}</h2>
            <h2> Email : {props.email}</h2>
            <button onClick = {() => {
            props.setIsLoggedIn(false);
            }} >Logout</button>
        </div>
    );
}

export default Profile;
