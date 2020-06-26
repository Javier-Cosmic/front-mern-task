import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    color: ${({colorText}) => colorText };
    outline: none;
    display: flex;
    background: none;
    border-style: none;
    cursor: pointer;
    margin: ${({margin}) => margin || '0px 0px 15px 0px'};
    font-size: 15px;
    font-family: 'Muli', sans-serif, fontawesome;

    &:hover{
        color: ${({hoverColor}) => hoverColor};
    }
`;

const ButtonList = ({hoverColor, margin, colorText, children}) => (
    <StyleButton hoverColor={hoverColor} margin={margin} colorText={colorText}>{children}</StyleButton>
)

export default ButtonList;