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
    align-items: center;
    background: ${(props) => props.empty ? '#099e22' : '#0f61fa'};
    color: white;
    display: flex;
    font-size: 4rem;
    height: 5rem;
    justify-content: center;
    width: 5rem;

    &:hover {
        background: ${(props) => props.empty ? '#06f72e' : '#0f61fa'};
        cursor: ${(props) => props.empty ? 'pointer' : 'not-allowed'}
    }
`;

const Square = ({clicked, handleClick}) => {
    return (
        <Board>
            {clicked.map((item, index) => {
                return item === "" ?
                    (
                        <Cell empty={true} key={index} onClick={() => handleClick(index)}>{item}</Cell>
                    )
                : 
                    (
                        <Cell empty={false} key={index}>{item}</Cell>
                    )
            })}
        </Board>
    )
}

export default Square
