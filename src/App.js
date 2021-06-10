import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function App() {
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

function Home() {
  return <h2>Hello class of 2021</h2>;
}

function Number() {
  const [numberValue, setNumberValue] = useState("");
  const { numberId } = useParams();

  useEffect(() => {
    fetch(`http://numbersapi.com/${numberId}`)
      .then((res) => res.text())
      .then((data) => setNumberValue(data));
  }, [numberId]);

  return (
    <h2>
      {numberId} - {numberValue}
    </h2>
  );
}
