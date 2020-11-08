import React, { useState } from 'react';
import "../App.css"

const MovesList = props => {
    //console.log(props.moves)
    // let [showMoves, setShowMoves] = useState(false);    
    // // let [moves, setMoves] = useState(props.moves)    

    // const showDaMoves = () => {        
    //     setShowMoves((prev) => !prev);
    // }
    {/* {props.moves.moves &&                
                    <button className="detailButtons r" onClick={() => showDaMoves()}>Show Moves</button>
                } */}
    return (         
            <div id="mainMoves">
                
                {
                    props.moves.moves && 
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