import React from 'react';
import styled from 'styled-components';

const WrapperStyle = styled.div`
    background: linear-gradient(190deg, rgb(116,148,152, 0.5), rgb(147, 175, 175) 40% , rgb(143,143,155, 0.8) , rgb(200,174,185));
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