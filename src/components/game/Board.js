import React, { useState } from 'react';
import "./Board.css"
import DataService from '../../service/DataService';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    // console.log(images);
    return images;
  }

const Board = () => {
    const [data, setData] = useState([]);
    const images = importAll(require.context("../../public/pics", false, /\.(jp?g)$/));

    function Row(i){
        const newRow = [];
        let count = i * 8;
        for (let j = 0; j<7; j++){
            if ((i + j) % 2 == 1){
                newRow.push(<div key={i * 10 + j} className="squares g"><img src={images[data.name]}
                className="icons"
                alt="chess piece" /></div>)
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
                let newData = res.data;
                setData(newData);
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