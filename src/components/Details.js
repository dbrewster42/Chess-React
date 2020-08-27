import React from 'react';
import "../App.css"

const Details = props => {
    console.log(props.status);
    //let [team] = useState([props.status.team])
    let classType = "black details";
    // if (props.status.isWhite){
    //     className = "white " + className;
    // } else {
    //     className = "black " + className;
    // }

    // useEffect(() => {
    //         if (props.status.isWhite){
    //             classType = "white details"
    //         } else {
    //             classType = "black details";
    //         }},
    //       [props.status],);

    // const countPieces = team => {
    //     // team.map((piece, i).filter(piece.name) => {
    //     //     <div key={i} className="squares"></div>
    //     // })
    //     for (let i =0; i< team.length; i++){

    //     }
    // };{countPieces(props.status.team)}

    return ( 
        <div className={classType}>            
            <h2>It is {props.status.playerName}'s turn</h2>
            {props.status.check && <h3>You must move out of check!</h3>}
            {/* <p>{props.status.team.length} Pieces</p> */}
            {/* <button className="detailButtons" onClick={props.unselect}>Display Moves</button>            
            <button className="detailButtons" onClick={props.unselect}>Count Pieces</button>         */}                       
                
            {props.isMove ? <button className="detailButtons" onClick={props.specialMove}>Special Move</button> : <button className="detailButtons" onClick={props.unselect}>Forfeit</button> }
            {props.isMove ? <button className="detailButtons" onClick={props.unselect}>Unselect Piece</button> : <button className="detailButtons" onClick={props.unselect}>Draw</button> } 
        </div>
     );
}
 
export default Details;