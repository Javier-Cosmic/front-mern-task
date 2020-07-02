import React from "react";
import styled, { css } from "styled-components";

const ButtonLayout = styled.input`
    background-color: ${({ theme, bcolor }) => bcolor || theme.colors.primary};
    appearance: none;
    color: ${({ color }) => color || "white"};
    font-family: 'Muli', sans-serif, fontawesome;
    border-style: none;
    outline:none;
    font-size: 15px;
    padding: ${({padding}) => padding || '8px'};
    display: ${({ display }) => display || "block"};
    border-radius: 1rem;
    width: ${({ width }) => width || "100%"};
    transition: 0.5s ease-in-out;
    max-height: 50px;
    margin: ${({ margin }) => margin};
    text-decoration: none;
    cursor: pointer;

    &:hover{
        background: ${({theme, hoverMain}) => hoverMain || theme.colors.tertiary};
        color:white;
    }

    @media (max-width: 600px){
        font-size: 16px;
        padding:${({paddingxs}) => paddingxs || '1rem'};
        width: 100%;
        display: block;
        margin:${({marginxs}) => marginxs || '10px 0px 0px 0px'};
    }
`;

const ButtonInput = ({
    hoverMain,
    padding,
    marginxs,
    paddingxs,
    width,
    display,
    bcolor,
    color,
    margin,
    type,
    value,
    }) => (
    <ButtonLayout
        hoverMain={hoverMain}
        padding={padding}
        marginxs={marginxs}
        paddingxs={paddingxs}
        width={width}
        display={display}
        bcolor={bcolor}
        color={color}
        margin={margin}
        type={type}
        value={value}
    />
);

export default ButtonInput;
