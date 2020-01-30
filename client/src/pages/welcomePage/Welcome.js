import React from 'react';

export default function Welcome (props) {
    return(
        <div>
<h3>Welcome ....{props.location.state.userObj.firstName}</h3>
        </div>
    )
}