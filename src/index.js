import React from "react";
import { render } from "react-dom";
import App from "./App";
import './public/logo192.png';
import GlobalStyle from './components/layout/GlobalStyle';
import {ThemeProvider} from 'styled-components';
import Theme from './components/layout/Theme';

render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
    
    ,document.getElementById("app")
);
