import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import Login from "../pages/login";
import Welcome from "../pages/welcome";

export default function Routes() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="Login" />
      <Route path="/login" component={Login} />
      <Route path="/welcome" component={Welcome} />
      < IsAuthenticated_Route />
    </BrowserRouter>
  );
}



function IsAuthenticated_Route({ children }) {
  return (
    <Route
      render={() =>
      Cookies.get('userObj') ? (
        <Redirect
        to={{
          pathname: "/welcome",
          state: {userObj:JSON.parse(Cookies.get('userObj'))}
        }} 
        />
        ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );
}