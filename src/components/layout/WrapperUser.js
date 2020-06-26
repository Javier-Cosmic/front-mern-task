import React from 'react';
import styled from 'styled-components';
import background from '../../public/fondo.jpg';

const WrapperStyle = styled.div`
    background-color: #95b8b6;
    background-image: url(${background});
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px){
       height: 100%;
       min-height: 100vh;
    }

    @media (max-width: 812px) and (orientation: landscape){
        height: 100%;
        min-height: 100vh;
    }
`;

const WrapperUser = ({children}) => (
    <WrapperStyle>{children}</WrapperStyle>
)

export default WrapperUser;