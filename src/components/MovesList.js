import React, { useState } from 'react';
import "../App.css"

const MovesList = props => {
    console.log(props)
    console.log(props.moves)    
    let [moves, setMoves] = useState(props.moves)
    let [showMoves, setShowMoves] = useState(false);
    return ( 
        
            <div id="movesList">
                <button className="detailButtons">Show Moves</button>
                {
                    showMoves && 
                    <ol>
                    {props.moves.map((move, i) => {
                        return <li key={i}>{move}</li>
                    })}
                </ol>
                }
                
            
            </div>
       
     );
}
 
export default MovesList;