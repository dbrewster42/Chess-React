import React, { useState } from 'react';
import "./Board.css"

const Square = props => {
    let [ squareB, setSquareB ] = useState(props.squareStyle);
    console.log(props);
    if (props.isMove && squareB === "squares b"){
        setSquareB(props.squareStyle);
        console.log("hi", props.i, props.j)
    }

    const changeBackground = e => {
        setSquareB('squares b');     
        props.selectPiece(e);
    }

    const returnBackground = e => {
        // if (props.i + props.j % 2 == 1){
        //     setSquareB('squares g');
        // } else {
        //     setSquareB('squares y');
        // }
        setSquareB(props.squareStyle)
        props.selectMove(e);
    }

    return ( 
        <div id={props.i * 10 + props.j} className={squareB}  onClick={props.isMove ? props.selectMove : props.thisPiece !== null ? changeBackground : undefined  }>
                     { (props.thisPiece != null) &&
                        <img src={props.image}
                        className="icons"
                        alt="chess piece" />    
                    }
        </div>
     );
}
 
export default Square;