import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "styled-components/macro";
import Home from "./Home";
import Rover from "./Rover";
import About from "./About";
// main app starting point.
const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rover">Rover</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={Home} exact />
      <Route path="/rover" component={Rover} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default App;
