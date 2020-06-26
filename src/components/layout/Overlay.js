import React from 'react';
import styled from 'styled-components';

const StyleOverlay = styled.div`

    @media (max-width: 769px){
        transition: all 1s ease-in-out;
        position: fixed;
        z-index: 10;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 1;
    }

`;

const Overlay = ({onClick}) => (
    <StyleOverlay 
        onClick={onClick}
    />
)

export default Overlay;