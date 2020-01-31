import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "../pages/login";
import Welcome from "../pages/welcome";

function RouteNav() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="Login" />
      <Route path="/login" component={Login} />
      <Route path="/welcome" component={Welcome} />
    </BrowserRouter>
  );
}
export default RouteNav;