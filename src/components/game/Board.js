import React, { useState } from 'react';
import "./Board.css"
import DataService from '../../service/DataService';
import Details from '../Details';
import MovesList from '../MovesList';

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
    //console.log(props.data)
    let [isMove, setIsMove] = useState(false);
    let [start, setStart] = useState(88);
//    let [end, setEnd] = useState(88);
    let [isWhite, setIsWhite] = useState(true);
    let [status, setStatus] = useState(props.data[64])
    console.log(status);
    const [moves, setMoves] = useState([]);
    // let [move, setMove] = useState({});
    // const [data] = useState([...props.data]);  
    // const [otherData, setOtherData] = useState([])
    
    const images = importAll(require.context("../../../public/pics", false, /\.(pn?g)$/));
    
    
    const updateMovesList = () => {        
        DataService.displayMoves()
            .then(res => {
                console.log(res.data)
                setMoves(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    function Row(i){
        const newRow = [];
        let count = i * 8;        
        for (let j = 0; j<8; j++){
            if ((i + j) % 2 === 1){                
                newRow.push(<div key={count} id={i * 10 + j} className="squares g" onClick={isMove ? selectMove : props.data[count].name !== null ? selectPiece : undefined }>
                   { (props.data[count].name != null) &&
                        <img src={images[props.data[count].name]}
                        className="icons"
                        alt="chess piece" />    
                    }                    
                </div>)
            }else {
                newRow.push(<div key={count} id={i * 10 + j} className="squares y" onClick={isMove ? selectMove : props.data[count].name !== null ? selectPiece : undefined  }>
                     { (props.data[count].name != null) &&
                        <img src={images[props.data[count].name]}
                        className="icons"
                        alt="chess piece" />    
                    }
                </div>)
            }
            count++;
            
        }
        return <div className="rows" key={i}>{newRow}</div>;
    }
    //newRow.push(<div key={count} id={i * 10 + j} className="squares g" onClick={isMove ? selectMove : (props.data[count].name != null && hasPiece(props.data[count].name)) ? selectPiece : undefined }></div>
    //(props.data[count].name != null && props.data[count].isWhite == isWhite))

    function Column(){
        // console.log("row", props.data)        
        const Board = []        
        for (let i = 0; i<8; i++){
            Board.push(Row(i));            
        }
        return Board;
    }

    const unselect = () => {
        setIsMove(false);
    }

    const selectPiece = e => {    
        console.log(e.currentTarget) 
        console.log("Selecting piece ", e.currentTarget.id)
        console.log(e.currentTarget.count)
        let multiplier = parseInt(e.currentTarget.id / 10);
        let count = e.currentTarget.id - multiplier * 2 ;
        console.log(multiplier, "newCount", count)
        // let count = e.currentTarget.count; 
        // console.log(count);
        console.log(props.data[count]);        
        if ((props.data[count].name.startsWith("w") && isWhite) || (props.data[count].name.startsWith("b") && !isWhite)){
            let numb = parseInt(e.currentTarget.id)               
            setStart(numb);
            setIsMove(true);
        } else {
            console.log("That is not your piece!")
        }       
    }

    const selectMove = e => {
        //console.log(e.currentTarget)
        console.log("Moving to ", e.currentTarget.id);        
        let end = parseInt(e.currentTarget.id);        
        //console.log(end);
        const move = {
            start,
            end,
            isWhite
        }
        setIsMove(false);
        console.log(move);
        DataService.makeMove(move)
            .then(res => {
                //console.log(res.data);
                setIsWhite((prev) => !prev);                
                props.setTheBoard(res.data);
                setStatus(res.data[64]);
                updateMovesList();
            })
            .catch(err => {
                console.log(err)
                console.log(err.response.data)
                console.log(err.message)
                console.log(err.response)
                console.log(err.data)
            })
    }
    const specialMove = () => {
        let end = 999;
        const move = {
            start,
            end,
            isWhite
        }
        setIsMove(false);
        console.log(move);
        DataService.makeMove(move)
            .then(res => {
                setIsWhite((prev) => !prev);
                props.setTheBoard(res.data);
                setStatus(res.data[64]);
                updateMovesList();
            })
            .catch(err => {
                console.log(err);               
            })

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
    //  <MovesList updateMovesList={updateMovesList} /> 
    return ( 
        <div id="main">  
            <Details status={status} isMove={isMove} unselect={unselect} specialMove={specialMove} />
            <div id="board">
                {Column()}
            </div>                    
                 
            <MovesList moves={moves} updateMovesList={updateMovesList} />             
        </div>
        
     );
}
 
export default Board;