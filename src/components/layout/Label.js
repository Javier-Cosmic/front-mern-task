import React from 'react';
import styled from 'styled-components';

const LabelStyle = styled.label`
    width: ${({width}) => width || '50px'};
    font-size: ${({size}) => size || '10px'};
    display: ${({display}) => display };
    margin: ${({margin}) => margin || '0px'}; 
    color: ${({textColor}) => textColor || 'black'};

    @media (max-width: 600px){
        margin-left: 0;
        margin-bottom: 10px;
        width: 100%;
    }
 
`;

const Label = ({textColor, margin, size, width, display, htmlFor, children}) => (
    <LabelStyle textColor={textColor} margin={margin} size={size} width={width} display={display} htmlFor={htmlFor}>{children}</LabelStyle>
)

export default Label;