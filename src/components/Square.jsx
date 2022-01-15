import React from 'react'
import styled from "styled-components";

export const Board = styled.div`
    align-items: center;
    cursor: pointer;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3,auto);
    justify-content: center;
`;


export const Cell = styled.div`
    background: #099e22;
    color: white;
    display: flex;
    font-size: 4rem;
    height: 5rem;
    width: 5rem;
`;

const Square = ({clicked, handleClick}) => {
    return (
        <Board>
            {clicked.map((item, index) => {
                return (
                    <Cell key={index} onClick={() => handleClick(index)}>{item}</Cell>
                )
            })}
        </Board>
    )
}

export default Square
