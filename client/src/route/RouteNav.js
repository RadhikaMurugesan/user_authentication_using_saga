import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "../pages/loginPage";
import Welcome from "../pages/welcomePage";

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