import React, {useState} from "react";
import Square from "./Square";

const initial = "";
const xPlayer = "X";
const oPlayer = "O";

export const TicTacToe = () => {
    const [grid, setGrid] = useState(Array(9).fill(initial))
    const [player, setPlayer] = useState(false);

    const handleClick = (id) => {
        console.log("handleclick");
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
            <Square clicked={grid} handleClick={handleClick}/>
        </div>
    )
}

export default TicTacToe