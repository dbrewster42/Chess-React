import React from 'react';
import "../App.css"
import DataService from '../service/DataService';

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
    const endTheGame = forfeit => {
        let playerName = props.status.playerName;
        let endRequest = {
            forfeit,
            playerName 
        }
        console.log(endRequest)
        DataService.endGame(endRequest)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return ( 
        <div className={classType}>            
            <h2>It is {props.status.playerName}'s turn</h2>
            {props.status.check && <h1 id="check">You must move out of check!</h1>}
            {/* <p>{props.status.team.length} Pieces</p> */}
            {/* <button className="detailButtons" onClick={props.unselect}>Display Moves</button>            
            <button className="detailButtons" onClick={props.unselect}>Count Pieces</button>         */}                       
                
            {props.isMove ? <button className="detailButtons" onClick={props.specialMove}>Special Move</button> : <button className="detailButtons" onClick={() => endTheGame(true)}>Forfeit</button> }
            {props.isMove ? <button className="detailButtons" onClick={props.unselect}>Unselect Piece</button> : <button className="detailButtons" onClick={() => endTheGame(false)}>Draw</button> } 
        </div>
     );
}
 
export default Details;