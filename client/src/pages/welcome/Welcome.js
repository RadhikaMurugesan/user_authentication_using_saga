import React from 'react';
import { Link } from 'react-router-dom';
export default function Welcome (props) {
    const {userObj} = props.location.state;
    return(
        <div>
            <h3>Welcome ....{userObj.firstName}</h3>
            <Link to="/login"><button>Logout</button></Link>
        </div>
    )
}