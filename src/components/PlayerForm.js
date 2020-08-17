import React, {useState} from 'react';
import axios from 'axios'
import "./PF.css"

const PlayerForm = () => {
    const [name, setName] = useState("Your Name");
    const [player, setPlayer] = useState(1);
    const url = "http://localhost:8080"; 

    const handleChange = e => {               
        setName(e.target.value);
    }

    const createPlayer = (e) => {
        e.preventDefault();        
        axios.post(url, name);
        console.log(e.target.value);
        console.log(e.target.name.value);
        setName("");
        if (player == 2){
            window.location = '/game';
        }
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