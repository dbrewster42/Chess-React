import React, { Component, useState } from 'react';
// import { Link } from "react-router-dom";
import PlayerForm from "./PlayerForm"
import "./Welcome.css"

const Welcome = () => {
    
    const [showsForm, setShowsForm] = useState(false);

    const toggleForm = e => {
        setShowsForm((prevShows) => !prevShows);
    }

    return ( 
        <div id="welcome">
            {/* <h1>Would You Like To Play A Game?</h1> */}
            {/* <p>If you are ready to player, click below</p> */}
            <h1 className="start" onClick={toggleForm}>Click Here to Begin</h1>
            <h1 className="start" onClick={toggleForm}>{">>>>>>>>>"} Start A Game {"<<<<<<<<<<"} </h1>
            {showsForm ? 
            <PlayerForm />
            : 
            <i></i>
            }


            <h1>Rules</h1>           
            
            <h2>Specific Game Rules</h2>

            <p>To select a piece, you first choose it's vertical location, 0-7. Then select it's horizontal direction, also 0-7. <br />
                You then enter this 2 digit number to select the piece and you choose the piece's new location in the same way. The
                program will check to ensure that it is a valid movement and it will direct you to rechoose if it isn't.
            </p>

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

            <h2>Game Status(es)</h2>
            <ul>
                <li>Active</li>
                <li>Check</li>
                <li>Checkmate</li>
                <li>Draw</li>
                <li>Stalemate (not included)</li>
            </ul>
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
            <h3>Special Moves</h3>
            <ul>
                <li>En Passant</li>
                <li>Pawn Promotion</li>
                <li>Castle</li>
                <li>Undo</li>
            </ul>
        </div>
     );
}
 
export default Welcome;