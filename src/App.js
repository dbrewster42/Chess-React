import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Board from "./components/game/Board"

function App() {

  return (
    <Router>
      <Switch>
        <Header />
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route exact path="/game">
          <Board />
        </Route>      
      </Switch>
    </Router>
    
  );
}

export default App;
