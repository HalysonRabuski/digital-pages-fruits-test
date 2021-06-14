import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Fruit from "../pages/Fruit";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/fruit" component={Fruit} />
    </Switch>
  );
}

export default Routes;
