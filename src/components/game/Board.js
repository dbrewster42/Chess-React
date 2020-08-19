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
    
    // const [data] = useState([...props.data]);  
    // const [otherData, setOtherData] = useState([])
        
    // setOtherData([...props.data])
    // console.log(data)  
    // console.log("other", otherData)
    
    const images = importAll(require.context("../../../public/pics", false, /\.(jp?g)$/));

    function Row(i){
        const newRow = [];
        let count = i * 8;        
        for (let j = 0; j<8; j++){
            if ((i + j) % 2 == 1){
                // newRow.push(<div key={i * 10 + j} className="squares g">
                newRow.push(<div key={count} className="squares g">
                   { (props.data[count].name != null) &&
                        <img src={images[props.data[count].name]}
                        className="icons"
                        alt="chess piece" />    
                    }
                    
                </div>)
            }else {
                newRow.push(<div key={count} className="squares y">
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
        console.log("row", props.data)
        console.log(props.data[8])
        const Board = []        
        for (let i = 0; i<8; i++){
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

    // const checkData = () => {
    //     console.log(data);
    //     console.log(data[0])
    //     console.log(data[0].name)
    // }
    
    return ( 
        <div id="main">                  
            {/* <h1 onClick={() => checkData}>Start</h1><br />  */}
            {Column()}                
        </div>
        
     );
}
 
export default Board;