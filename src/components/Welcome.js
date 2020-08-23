import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PlayerForm from "./PlayerForm"
import "./Welcome.css"

const Welcome = props => {
    //console.log("Welcome to the ", props)
    const [showsForm, setShowsForm] = useState(false);

    const toggleForm = e => {
        setShowsForm((prevShows) => !prevShows);
    }

    return ( 
        <div id="welcome">            
            <Link to="/game"><h1 className="start">Click Here to Begin</h1></Link>
            <h1 className="start" onClick={toggleForm}>{">>>>>>>>>"} Start A Game {"<<<<<<<<<<"} </h1>
            {showsForm ? 
            <PlayerForm setTheBoard={props.setTheBoard} />
            : 
            <i></i>
            }


            <h1>Rules</h1> 
            <div id="body">         
                <div id="left">
                    <h2>Specific Game Rules</h2>

                    <p>To select a piece, you first choose it's vertical location, 0-7. Then select it's horizontal direction, also 0-7. <br />
                        You then enter this 2 digit number to select the piece and you choose the piece's new location in the same way. The
                        program will check to ensure that it is a valid movement and it will direct you to rechoose if it isn't.
                    </p>

                    <p>Click on the piece you wish to move, an "Unselect" button will pop up and you can click on that to choose a different piece or, if you are not
                    making a special move, select the location you wish to move your piece to. If your move is not a valid chess move, you will be prompted to try again.
                    The only exceptions are with Castles and en Passant. If you wish to castle, select the Rook you wish to use and then click on the Special Move button.
                    If you wish to use en Passant, select the pawn you wish to use and then click on the Special Move button.
                        See below for the valid conditions to make these special moves.
                    </p>

                    <br></br>
                    <h2>Special Functionalities</h2>
                    <ul><strong>Any Time During Turn</strong>
                        <li>999- Shows Count of All Piece Types from Both Team</li>
                        <li>888- Shows More Detailed Board where each Square is individually marked</li>
                        <li>777- Prints a List of All Moves</li>
                    </ul>
                    <ul> <strong>During Piece Selection</strong>
                        
                        <li>444- Undoes last round (using a Memento)</li>
                        <li>1111- Forfeit</li>
                    </ul>
                    <ul> <strong>During Move Selection</strong>    
                        <li>333- Castles (the proper Rook must be selected)</li>
                        <li>111- En Passant (the proper Pawn must be selected)</li>
                    </ul>

                    <br></br>
                    <h2>Special Moves</h2>
                    <ul>
                        <li><strong>En Passant</strong> may only be used if the capturing pawn must be on its fifth rank. The threatened pawn must have moved two squares from its starting square, and be on an adjacent file.</li>                
                        <li><strong>Castle</strong> may only be used if the king has never moved, the rook involved has never moved, the squares between the king and the rook involved are unoccupied, the king is not in check, and the king does not cross over or end on a square attacked by an enemy piece.</li>
                        <li><strong>Pawn Promotion</strong> is when a pawn makes it to the other side of the board. Upon reaching the back row, the pawn becomes a queen</li>
                        <li>Undo</li>
                    </ul>
                </div>
                
                <div id="right">
                    <br></br>
                    <h2>General Chess Rules</h2>

                    <p>White is always first to move and players take turns alternately moving one piece at a time. A movement is required. If
                        a player´s turn is to move, he is not in check but has no legal moves, this situation is called “Stalemate” and it
                        ends the game in a draw. Each type of piece has its own method of movement. A piece may be moved to another position
                        or may capture an opponent´s piece, replacing on its square (en passant being the only exception). With the
                        exception of the knight, a piece may not move over or through any of the other pieces. When a king is threatened
                        with capture (but can protect himself or escape), it´s called check. If a king is in check, then the player must
                        make a move that eliminates the threat of capture and cannot leave the king in check. Checkmate happens when a king
                        is placed in check and there is no legal move to escape. Checkmate ends the game and the side whose king was
                        checkmated looses. </p>

                    <br></br>
                    <h2>Rules for each Piece's Movement</h2>
                    <p>These are 100% followed. Any invalid movement will be caught and not implemented</p>
                    <ul>
                        <li><strong>King</strong> can move exactly one square horizontally, vertically, or diagonally. Once in every game, each king is allowed to make a special move, known as castling.</li>
                        <li><strong>Queen</strong> can move any number of vacant squares diagonally, horizontally, or vertically.</li>
                        <li><strong>Rook</strong> can move any number of vacant squares vertically or horizontally. It also is moved while castling.</li>
                        <li><strong>Bishop</strong> can move any number of vacant squares in any diagonal direction.</li>
                        <li><strong>Knight</strong> can move one square along any rank or file and then two more in a 90 degree angle. The knight´s movement can also be viewed
                            as an “L” or “7″ laid out at any horizontal or vertical angle. It is the only piece that can jump other pieces</li>
                        <li><strong>Pawn</strong> can move forward one square, if that square is unoccupied. If it has not yet moved, the pawn has the
                            option of moving two squares forward provided both squares in front of the pawn are unoccupied. A pawn cannot
                            move backward. Pawns are the only pieces that capture differently from how they move. They can capture an enemy
                            piece on either of the two spaces adjacent to the space in front of them (i.e., the two squares diagonally in
                            front of them) but cannot move to these spaces if they are vacant. The pawn is also involved in the two special
                            moves en passant and promotion.</li>
                    </ul>

                    <br></br>
                    <h2>Game Status(es)</h2>
                    <ul>
                        <li>Active</li>
                        <li>Check</li>
                        <li>Checkmate</li>
                        <li>Draw</li>
                        <li>Stalemate (not included)</li>
                    </ul>
                  

                </div>

            
            </div> 
           
         
        </div>
     );
}
 
export default Welcome;