import React, { useState } from 'react';
import "./Board.css"
import DataService from '../../service/DataService';

const Board = () => {
    const [data, setData] = useState([]);
    /*let board = new Array(8);
    // let [i, setI] = useState(0);

    const gameboard = () => {
        for (let i = 0; i < 8; i++){
            board[i] = new Array(8)
            for (let j = 0; j < 8; j++){
                if (i % 2 == 0){
                    if (j % 2 == 0){
                        return <div key={i * 10 +j} className="squares g" />
                    }
                    else {
                        return <div key={i * 10 +j} className="squares y" />
                    }
                }
                else {
                    if (j % 2 == 1){
                        return <div key={i * 10 +j} className="squares g" />
                    }
                    else {
                        return <div key={i * 10 +j} className="squares y" />
                    }
                }                    
                
            }
        }
    }
    */
    function Row(i){
        const newRow = [];
        let count = i * 8;
        for (let j = 0; j<7; j++){
            if ((i + j) % 2 == 1){
                newRow.push(<div key={i * 10 + j} className="squares g"></div>)
            }else {
                newRow.push(<div key={i * 10 + j} className="squares y"></div>)
            }
            count++;
            
        }
        return <div className="rows">{newRow}</div>;
    }
    // function Column(){
    //     const Board = []
    //     for (let i = 0; i<7; i++){
    //         Board.push(Row(i)) ;
    //         Board.push(<br></br>)
    //     }
    //     return Board;
    // }

    const showBoard = () => {
        DataService.getBoard()
            .then(res => {
                console.log(res.data);
                // let newData = res.data;
                // setData(newData);
            })
            .catch(error => console.log(error))
    }

    const checkData = () => {
        console.log(data);
        console.log(data[0])
        console.log(data[0].name)
    }
//    const showTheBoard = () => {
//         DataService.getBoard()
//             .then(
//                 response => {
//                     console.log(response);
//                     response.map(square) => {
//                         return (
//                             <div key={square.id} className="squares">
//                                 <p>{square.name}</p>
//                             </div>
//                         );
//                     }
//                 }
//             );            
//    }
    return ( 
        <div id="main">
            <h1 onClick={checkData}>Start</h1><br />
            {showBoard()}
            {Row(0)}
            {Row(1)}
            {Row(2)}
            {Row(3)}
            {Row(4)}
            {Row(5)}
            {Row(6)}
        </div>
        
     );
}
 
export default Board;