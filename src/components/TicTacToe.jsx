import React, {useState} from "react";
import Square from "./Square";
import GameOver from "./GameOver";

const initial = "";
const xPlayer = "X";
const oPlayer = "O";
const winnerMatrix = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

export const TicTacToe = () => {
    const [grid, setGrid] = useState(Array(9).fill(initial))
    const [player, setPlayer] = useState(false);
    const [endGame, setEndGame] = useState(false);
    const [draw, setDraw] = useState(false);

    const isGameOver = () => {
        if(!endGame) {

            for(let i=0;i<8;i++){
                if(grid[winnerMatrix[i][0]] === xPlayer && grid[winnerMatrix[i][1]] === xPlayer && grid[winnerMatrix[i][2]] === xPlayer) {
                    setEndGame(true)
                    return
                }
            }

            for(let i=0;i<8;i++){
                if(grid[winnerMatrix[i][0]] === oPlayer && grid[winnerMatrix[i][1]] === oPlayer && grid[winnerMatrix[i][2]] === oPlayer) {
                    setEndGame(true)
                    return
                }
            }                

            if(!grid.includes(initial)){
                setDraw(true);
                setEndGame(true);
            }
        }
    }   
    
    const restart = () => {
        setGrid(Array(9).fill(initial));
        setEndGame(false);
        setDraw(false);
    }

    isGameOver();

    const handleClick = (id) => {
        setGrid(
            grid.map((item, index) => {
                if(index === id) {
                    return player ? xPlayer : oPlayer;
                } else {
                    return item;
                }
            })
        )
        setPlayer(!player);
    }

    return (
        <div>
            {endGame && <GameOver restart={restart} player={player} draw={draw}/>}
            <Square clicked={grid} handleClick={handleClick}/>
        </div>
    )
}

export default TicTacToe