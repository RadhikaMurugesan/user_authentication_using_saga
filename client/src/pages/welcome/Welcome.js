import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from "../../components/header"
import './style.css';

export default function Welcome (props) {
    const {userObj} = props.location.state;
   const getCookie = Cookies.get('foo');
    console.log('cookies', getCookie);
    return(
        <div className="container">
            <Header headerName = "Welcome User"/>
            <div className="childContainer">
                <h3>Welcome ....{userObj.firstName}</h3>
                <Link to="/login"><button>Logout</button></Link>
            </div>            
        </div>
    )
}