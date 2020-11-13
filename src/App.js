import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/header/Header"
import Welcome from "./components/welcome/Welcome"
import Board from "./components/game/Board"

function App() {
  const [data, setData] = useState([]);

  // const showBoard = () => {
  //   DataService.getBoard()
  //       .then(res => {
  //           console.log(res.data);
  //           let newData = res.data;
  //           setData([...newData]);
  //       })
  //       .catch(error => console.log(error))
  //   }

  const setTheBoard = data => {
    console.log("app", data);
    setData([...data]);    
  }

  return (
    <Router>
      <Header />      
      <Switch>   
         
        <Route exact path="/">
          <Welcome setTheBoard={setTheBoard} />
        </Route>

        <Route exact path="/game" render={() => <Board data={data} setTheBoard={setTheBoard} /> } />

      </Switch>
    </Router>
    
  );
}

export default App;
