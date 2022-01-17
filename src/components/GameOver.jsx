import React from 'react'
import styled from "styled-components";

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
    background: rgba(0,0,0,0.8);
`;

export const StyledBtn = styled.button`
    background: rgb(77, 248, 9);
    color: rgb(63, 118, 170);
    border: 2px solid rgb(63, 118, 170);
    font-size: 2rem;
    margin-bottom: 1rem;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease-out;
    max-height: 7rem;   

    &:hover {
        background:rgb(63, 118, 170);
        color: rgb(77, 248, 9);
        border: 2px solid rgb(77, 248, 9);
    }
`;

export const Result = styled.div`
    color: white;
    font-size: 5rem;
`;


function GameOver({restart, player, draw}) {
    return (
        <Wrapper>
            {!draw && <Result>{player ? "O Won" : "X Won"}</Result>}
            {draw && <Result>Draw Game</Result>}
            <StyledBtn onClick={restart}>
                RESTART GAME
            </StyledBtn>
        </Wrapper>
    )
}

export default GameOver
