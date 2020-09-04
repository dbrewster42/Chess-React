import React, { useState } from 'react';
import "../App.css"

const MovesList = props => {
    console.log(props.moves)
    let [showMoves, setShowMoves] = useState(false);
    if (showMoves){
        console.log(props.moves.moves)    
    }
    
    // let [moves, setMoves] = useState(props.moves)
    

    const showDaMoves = () => {
        //props.updateMovesList();
        setShowMoves((prev) => !prev);
    }
    return (         
            <div>
                <button className="detailButtons" onClick={() => showDaMoves()}>Show Moves</button>

                {
                    showMoves && 
                    <div id="movesList">
                        <ol>
                            {props.moves.moves.map((move, i) => {
                                return <li key={i}>{move}</li>
                            })}
                        </ol>
                    </div>
                }
                
            </div>
            
       
     );
}
 
export default MovesList;