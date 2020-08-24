import React, { useState } from 'react';
import "../App.css"

const Details = props => {
    //console.log(props.status);
    //let [team] = useState([props.status.team])
    let className = "black details";
    if (props.status.isWhite){
        className = "white details";
    }
    
    // const countPieces = team => {
    //     // team.map((piece, i).filter(piece.name) => {
    //     //     <div key={i} className="squares"></div>
    //     // })
    //     for (let i =0; i< team.length; i++){

    //     }
    // };{countPieces(props.status.team)}

    return ( 
        <div className={className}>            
            <h2>It is {props.status.playerName}'s turn</h2>
            {props.status.check && <h4>You must move out of check</h4>}
            <p>{props.status.team.length} Pieces</p>
            {props.isMove && <button className="detailButtons" onClick={props.unselect}>Unselect</button> &&
            <button className="detailButtons" onClick={props.unselect}>Special Move</button>
            }           
            
        </div>
     );
}
 
export default Details;