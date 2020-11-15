import React, {useState} from 'react';
import "./Welcome.css"
import { withRouter, useHistory } from 'react-router-dom';
import DataService from '../../service/DataService';

const PlayerForm = props => {
    //console.log("PF", props)
    const [name, setName] = useState("Your Name Here");
    const [undo, setUndo] = useState(true);
    const [names] = useState([])
    const [player, setPlayer] = useState(1);
    const history = useHistory();

    const handleChange = e => {               
        setName(e.target.value);
    }   

    const handleUndo = e => {
        console.log(e);
        console.log(e.target.value);
        setUndo((prev) => !prev);
    }

    const addPlayers = body => {        
        console.log(body)
        DataService.createPlayers(body)
        .then(res => {
            console.log("added player", res);
            props.setTheBoard(res.data);          
            history.push('/game');
        })
        .catch(err => {
            console.log(err)
        })
    }

    const makePlayer = (e) => {
        e.preventDefault(); 
        console.log(e.target.name.value);
        names.push(e.target.name.value);        
        if (player === 2){
            const body = {                
                name1: names[0], 
                name2: names[1]
            }
            addPlayers(body);
            setPlayer(player-2);                   
        }
        setName("");
        setPlayer(player + 1);
    }
    

    return ( 
        <form onSubmit={makePlayer}>
            Player {player}, Please Enter Your Name <br></br>
            <input type="text" name="name" onChange={handleChange} value={name} /><br></br>
            <label>Include an Undo option</label><input type="checkbox" name="undo" onChange={handleUndo} checked />
            <br></br>
            <input type="submit" value="Submit" />
        </form>
     );
}
 
export default withRouter(PlayerForm);