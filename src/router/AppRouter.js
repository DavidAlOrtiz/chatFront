import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContex";

import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { RutasPrivadas } from "./RutasPrivadas";
import { RutasPublicas } from "./RutasPublicas";

export const AppRouter = () => {
  const {auth, verificaToken} = useContext(AuthContext)

  useEffect(()=>{
    verificaToken()
  },[verificaToken])

  if(auth.checkin){
    return <h1>Espere</h1>
  }

  return (
    <Router>
      <div>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <RutasPublicas isAuthenticate={auth.logged} path="/auth" component={AuthRouter}></RutasPublicas>
          <RutasPrivadas isAuthenticate={auth.logged} exact path="/" component={ChatPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
