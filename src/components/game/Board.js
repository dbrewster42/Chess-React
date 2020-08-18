import React, { useState, useEffect } from 'react';
import "./Board.css"
import DataService from '../../service/DataService';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        console.log(item);
        images[item.replace("./", "")] = r(item);
    });
    console.log(images);
    return images;
  }

const Board = (props) => {
    console.log(props)
    const [data, setData] = useState([...props.data]);  
    console.log(data)  
    const images = importAll(require.context("../../../public/pics", false, /\.(jp?g)$/));

    function Row(i){
        const newRow = [];
        let count = i * 8;
        console.log(data)
        console.log(data[8])
        for (let j = 0; j<7; j++){
            if ((i + j) % 2 == 1){
                // newRow.push(<div key={i * 10 + j} className="squares g">
                newRow.push(<div key={count} className="squares g">
                   {/* { (data[count].name != null) &&
                        <img src={images[data.name]}
                        className="icons"
                        alt="chess piece" />    
                    } */}
                    
                </div>)
            }else {
                newRow.push(<div key={count} className="squares y"></div>)
            }
            count++;
            
        }
        return <div className="rows">{newRow}</div>;
    }
    function Column(){
        const Board = []        
        for (let i = 0; i<7; i++){
            Board.push(Row(i));
            
        }
        return Board;
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

    const checkData = () => {
        console.log(data);
        console.log(data[0])
        console.log(data[0].name)
    }
    
    return ( 
        <div id="main">       
            <h1 onClick={showBoard}>PreStart</h1>  
            <h1 onClick={checkData}>Start</h1><br /> 
            {Column()}         
            {/* {Row(0)}
            {Row(1)}
            {Row(2)}
            {Row(3)}
            {Row(4)}
            {Row(5)}
            {Row(6)}
            {Row(7)} */}
        </div>
        
     );
}
 
export default Board;