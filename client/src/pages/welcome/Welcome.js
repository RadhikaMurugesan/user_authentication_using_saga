import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from "../../components/header"
import './style.css';

export default function Welcome (props) {
    const {userObj} = props.location.state;
    console.log('props', props)

    const logOut = () => {
        Cookies.remove('userObj');
        props.history.push("/login");       
    }

    return(
        <div className="container">
            <Header headerName = "Welcome User"/>
            <div className="childContainer">
                <h3>Welcome ....{userObj.firstName}</h3>
               <button onClick = {logOut}>Logout</button>
            </div>            
        </div>
    )
}