import React from 'react';
import styled from 'styled-components';

const StyleMenu = styled.div`
    display: block;
    padding: 2rem 3rem 1rem 3rem;
    background: ${({changeColor}) => changeColor};
    -webkit-box-shadow: 0px 4px 10px -3px rgba(117,117,117,1);
    -moz-box-shadow: 0px 4px 10px -3px rgba(117,117,117,1);
    box-shadow: 1px 0px 10px 5px rgba(54,54,55,0.3);
    transition: 0.5s ease-in-out;;
    width: 88%;
    height: 100vh;
    position: fixed;
    /* left: ${({left}) => left }; */
    transform: ${({transform}) => transform };
    /* top: 64px; */
    top: 0;
    border-radius: 0 0 10px 0;
    z-index: 30;

    @media (min-width: 769px){
        display: none;
    }

`;

const Menu = ({transform ,left, changeColor, children}) => (
    <StyleMenu transform={transform} left={left} changeColor={changeColor}>{children}</StyleMenu>
)

export default Menu;