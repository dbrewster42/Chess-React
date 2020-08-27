import React, { useState } from 'react';
import "../App.css"
import DataService from "../service/DataService"

const MovesList = () => {
    const [moves, setMoves] = useState([]);
    
    const updateMovesList = () => {
        console.log("hey guys")
        DataService.displayMoves()
            .then(res => {
                console.log(res.data)
                setMoves(...res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return ( 
        <div id="movesList">
            <ol>
                {moves.map((move, i) => {
                    return <li key={i}>{move}</li>
                })}
            </ol>
           
        </div>
     );
}
 
export default MovesList;