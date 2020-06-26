import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        font-family: 'Muli', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    } 

    html {
        box-sizing: border-box;
        height: 100vh;
        font-size: 65.5%; 
    }

    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.colors.secondary};
        margin: 10px;
        font-family: 'Muli', sans-serif, fontawesome;
    }

    ::-moz-placeholder {
        color: ${(props) => props.theme.colors.secondary};
        margin: 10px;
        font-family: 'Muli', sans-serif, fontawesome;
    }

    :-ms-input-placeholder {
        color: ${(props) => props.theme.colors.secondary};
        margin: 10px;
        font-family: 'Muli', sans-serif, fontawesome;
    }
    
    ::placeholder {
        color: ${(props) => props.theme.colors.secondary};
        margin: 10px;
        font-family: 'Muli', sans-serif, fontawesome;
    }

    @media (max-width: 600px){

    }
`;

export default GlobalStyle;
