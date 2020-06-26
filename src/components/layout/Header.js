import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({bgcolor}) => bgcolor };
    padding: 2rem;
    transition: 0.5s ease-in-out;
    /* -webkit-box-shadow: 0px 4px 10px -6px rgba(117,117,117,0.8);
    -moz-box-shadow: 0px 4px 10px -6px rgba(117,117,117,0.8);
    box-shadow: 0px 4px 10px -6px rgba(117,117,117,0.8); */
    border-bottom: 1px solid rgb(178,178,178,0.5);

    @media(max-width: 769px){
        padding: 2rem 0.5rem; 
        border-left: none;
        position: -webkit-sticky;  
        position: sticky;
        top: 0;
        box-shadow: none;
        border-bottom: 1px solid rgb(178,178,178,0.3); 
        z-index: 20;
    }
`;

const Header = ({bgcolor, children}) => (
    <StyleHeader bgcolor={bgcolor}>
       {children}
    </StyleHeader>
)

export default Header;