import React from 'react';
import "../App.css"

const MovesList = props => {
    
    return (         
            <div id="mainMoves">                
                {
                    props.moves.moves && 
                    <div id="movesList">
                        <h4 id="mHeader">Moves</h4>                        
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