import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/dashboard/Dashboard.component";
import Login from "../components/login/Login.component";

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);
