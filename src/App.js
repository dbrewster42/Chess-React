import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Board from "./components/game/Board"
import DataService from '../../service/DataService';

function App() {
  const [data, setData] = useState([]);

  const showBoard = () => {
    DataService.getBoard()
        .then(res => {
            console.log(res.data);
            let newData = res.data;
            setData([...newData]);
        })
        .catch(error => console.log(error))
    }
    useEffect (() => {
      showBoard();
   },[]); 

  return (
    <Router>
      <Header />
      <Switch>
        

        <Route exact path="/">
          <Welcome />
        </Route>

        <Route exact path="/game">
          <Board data={data} />
        </Route> 

      </Switch>
    </Router>
    
  );
}

export default App;
