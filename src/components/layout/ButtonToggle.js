import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
    background: none;
    color: ${({colorText}) => colorText};
    outline: none;
    border-style: none;
    font-family: fontawesome;
    display: inline-flex;
    font-size: 16px;
    margin: ${({margin}) => margin};
    cursor: pointer;

    @media (min-width: 769px){
        display: none;
    }
`;

const ButtonToggle = ({margin, colorText, onClick, children}) => (
    <StyleButton margin={margin} colorText={colorText} onClick={onClick} >{children}</StyleButton>
)

export default ButtonToggle;