import React, { useState, useEffect } from 'react';
import "./Board.css"
// import DataService from '../../service/DataService';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        // console.log(item);
        images[item.replace("./", "")] = r(item);
    });
    // console.log(images);
    return images;
  }

const Board = (props) => {    
    console.log(props.data)
    let [isMove, setIsMove] = useState(false);
    let [startID, setStartID] = useState(88);
    let [endID, setEndID] = useState(88);
    // const [data] = useState([...props.data]);  
    // const [otherData, setOtherData] = useState([])
    
    const images = importAll(require.context("../../../public/pics", false, /\.(pn?g)$/));

    function Row(i){
        const newRow = [];
        let count = i * 8;        
        for (let j = 0; j<8; j++){
            if ((i + j) % 2 == 1){
                // newRow.push(<div key={i * 10 + j} className="squares g">
                newRow.push(<div key={count} id={i * 10 + j} className="squares g" onClick={isMove ? selectMove : props.data[count].name != null ? selectPiece : undefined }>
                   { (props.data[count].name != null) &&
                        <img src={images[props.data[count].name]}
                        className="icons"
                        alt="chess piece" />    
                    }
                    
                </div>)
            }else {
                newRow.push(<div key={count} id={i * 10 + j} className="squares y" onClick={isMove ? selectMove : props.data[count].name != null ? selectPiece : undefined  }>
                     { (props.data[count].name != null) &&
                        <img src={images[props.data[count].name]}
                        className="icons"
                        alt="chess piece" />    
                    }
                </div>)
            }
            count++;
            
        }
        return <div className="rows">{newRow}</div>;
    }
    function Column(){
        // console.log("row", props.data)
        // console.log(props.data[8])
        const Board = []        
        for (let i = 0; i<8; i++){
            Board.push(Row(i));
            
        }
        return Board;
    }

    const selectPiece = e => {        
        console.log(e)
        console.log("IS THIS IT?", e.currentTarget)
        console.log("before", e.target)
        let target = e.target.tagName == 'img'? e.target.parentElement : e.target;
        console.log("after", e.target)
        console.log(e.target.id)         
        setStartID(e.target.id)
        setIsMove(true);
    }

    const selectMove = e => {
        console.log(e.target)
        console.log(e.target.id);
        // console.log(e.target.id.value)
        setEndID(e.target.id)
        setIsMove(false);
    }

    // const showBoard = () => {
    //     DataService.getBoard()
    //         .then(res => {
    //             console.log(res.data);
    //             let newData = res.data;
    //             setData([...newData]);
    //         })
    //         .catch(error => console.log(error))
    // }

    // useEffect (() => {
    //     showBoard();
    //  },[]); 
    
    return ( 
        <div id="main">             
            {Column()}                
        </div>
        
     );
}
 
export default Board;