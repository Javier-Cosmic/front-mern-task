import React from 'react';
import styled, {css} from 'styled-components';

const WrapperStyle = styled.div`
    padding: 3rem 1rem;
    max-width: 1200px;
    width: ${({width}) => width };
    border-radius: 1rem;
    background: ${(props) => props.theme.colors.main};
    -webkit-box-shadow: 1px 1px 12px 1px rgba(10, 10, 10, 0.3);
    -moz-webkit-box-shadow: 1px 1px 12px 1px rgba(10, 10, 10, 0.3);
    box-shadow: 1px 1px 12px 1px rgba(10, 10, 10, 0.3);

    .icon{
        display: flex;
        justify-content: center;
        font-size: 30px; 
        color: #A5BFBE; 
        margin-bottom: 15px;
    }

    @media (max-width: 600px){
        width: 88%;
        padding: 60px 0px;
        margin-top: 50px;
        margin-bottom: 50px;
        
        .icon{
            font-size: 50px;
        }
    }

    @media (min-width: 601px) and (max-width: 800px){
        width: 80%;
        padding: 5em 3.5em;
    }

    @media (max-width: 812px) and (orientation: landscape){
        margin: 3em;
    }

    @media (min-width: 801px ) and (max-width: 1331px){
        width: 65%;
        padding: 5em 3.9em;
    }
`;

const WrapperBox = ({width, maxwidth, children}) => (
    <WrapperStyle width={width} max-width={maxwidth}>{children}</WrapperStyle>
)

export default WrapperBox;