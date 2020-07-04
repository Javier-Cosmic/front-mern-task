import React from 'react';
import styled, {css} from 'styled-components';

export const ContextTheme = React.createContext();

const SidebarStyle = styled.div`
    background: ${({changeColor, theme}) => changeColor || theme.colors.main};
    padding: 2rem 4rem 1rem 4rem;
    transition: 0.5s ease-in-out;
    position: relative;
    z-index: 30;
    border-right: 1px solid rgb(178,178,178,1);
    border-right: 1px solid ${({bordercolor}) => bordercolor};
    /* 
    &:before{
        content: "Gestiona Tus Projectos";
        font-size: 16px;
    } */
    
    @media (max-width: 768px){
        display: none;
    }

    @media (min-width: 768px){
        flex: 0 0 300px;     
    }

`;

const SideBar = ({bordercolor, menu, changeColor, children}) => (
    <SidebarStyle bordercolor={bordercolor} menu={menu} changeColor={changeColor}> 
        {children}
    </SidebarStyle>
)

export default SideBar;