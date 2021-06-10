import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "../Home";
import { Number } from "../Number";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/numbers/100">Numbers 100</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/numbers/:numberId">
            <Number />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App };
