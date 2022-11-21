import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";



export const AuthRouter = () => {
  return (
    <div className=" containe-fluid rbg-dark ">
      <div className="row">
        <div className="col">
          <Switch>
            <Route exact path="/auth/login" component={LoginPage} />
            <Route exact path="/auth/register" component={RegisterPage} />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
