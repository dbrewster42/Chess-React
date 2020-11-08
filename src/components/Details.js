import React from 'react';
import "../App.css"
import DataService from '../service/DataService';
// import App from '../App.js';
import { useHistory } from 'react-router-dom';

const Details = props => {
    console.log(props.status);
    //let [team] = useState([props.status.team])
    // let classType = "details";
    const history = useHistory();
    // if (props.status.isWhite){
    //     classType = "white " + classType;
    // } else {
    //     classType = "black " + classType;
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
    
    const restart = () => {
        DataService.restartGame()
        .then(res => {
            console.log(res);
            props.setTheBoard(res.data);
        })
        .catch(err => {
            console.log(err);
            window.alert(err.response.data.errMessage)
        })
    }

    const newGame = () => {
        history.push('/');
    }


    return ( 
        <div className="details" >  
            {props.status.active ? <h2>It is {props.status.playerName}'s turn</h2> :
            <div>               
                 <h1 className="check">CHECKMATE!</h1>
                 {props.status.message && <h2 className="check"> {props.status.message}</h2>}
            <button className="tooltip" onClick={restart}>RESTART<span className="tooltiptext">Play another game vs the same opponent</span></button>
            <button className="tooltip" onClick={newGame}>NEW GAME<span className="tooltiptext">Play a game vs a different opponent</span></button>
            </div>} 
                     
                       
            {/* <p>{props.status.team.length} Pieces</p> */}
            {/* <button className="detailButtons" onClick={props.unselect}>Display Moves</button>            
            <button className="detailButtons" onClick={props.unselect}>Count Pieces</button>         */}                       
            {props.status.active &&
            <div>

                {props.isMove ? <button className="detailButtons" onClick={props.specialMove}>Special Move</button> : <button className="detailButtons" onClick={() => props.endTheGame(true)}>Forfeit</button> }
                {props.isMove ? <button className="detailButtons" onClick={props.unselect}>Unselect Piece</button> : <button className="detailButtons" onClick={() => props.endTheGame(false)}>Draw</button> } 
                {props.status.check && <h1 className="check">You must move out of check!</h1>}
                {props.errorMessage && <h1 className="check">{ props.errorMessage }</h1> }
            </div> }
            
        </div>
     );
}
 
export default Details;