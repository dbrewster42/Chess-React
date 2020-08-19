import React, {useState} from 'react';
import axios from 'axios'
import "./PF.css"
import DataService from '../service/DataService';

const PlayerForm = props => {
    // console.log("PF", props)
    const [name, setName] = useState("Your Name");
    const [player, setPlayer] = useState(1);
    const url = "http://localhost:8080/game"; 

    const handleChange = e => {               
        setName(e.target.value);
    }

    const addPlayer = name => {
        // axios.post(url, name)
        DataService.addPlayer()
        .then(res => {
            console.log("added player", res);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const createPlayer = (e) => {
        e.preventDefault();        
        console.log(e.target.value);
        console.log(e.target.name.value);   
        addPlayer(e.target.name.value);
        if (player === 2){

            window.location = '/game';
            props.showBoard();
        }
        setName("");
        setPlayer(player + 1);
    }

    return ( 
        <form onSubmit={createPlayer}>
            Player {player}, Please Enter Your Name <br></br>
            <input type="text" name="name" onChange={handleChange} value={name} /><br></br>
            <input type="submit" value="Submit" />
        </form>
     );
}
 
export default PlayerForm;