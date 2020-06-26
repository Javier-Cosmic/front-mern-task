import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    background-color: ${({complete}) => complete ? 'rgba(154, 252, 154, .3)' : 'rgba(255, 178, 178, .4)'};
    border-style: none;
    outline: none;
    cursor: pointer;
    width: 155px;
    display: block;
    margin-right: 10px;
    max-height: 50px;
    border-radius: 3px;

    &:hover{
        border: 2px solid ${({complete}) => complete ? 'rgba(154, 252, 154, 1)' : 'rgba(255, 178, 178, .8)'};
    }

    @media (max-width: 600px){
        margin: 10px 0 0 0;
        width: 100%;
        padding: 1.5rem;
        font-size: 16px;
    }
`;

const ButtonState = ({onClick, type, complete, children}) => (
    <StyleButton onClick={onClick} type={type} complete={complete}>{children}</StyleButton>
)

export default ButtonState;