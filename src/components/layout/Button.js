import React from "react";
import styled, { css } from "styled-components";

const ButtonLayout = styled.button`
    background-color: ${({ theme, bcolor }) => bcolor || theme.colors.primary};
    color: ${({ color }) => color || "white"};
    padding: ${({padding}) => padding || '8px'};
    display: ${({ display }) => display || "block"};
    border-style: none;
    border-radius: 1rem;
    width: ${({ width }) => width || "100%"};
    transition: 0.5s ease-in-out;
    font-size: 15px;
    outline:none;
    max-height: 50px;
    margin: ${({ margin }) => margin};
    cursor: pointer;
    font-family: 'Muli', sans-serif, fontawesome;
    ${({ secondary }) =>
      secondary &&
      css`
        background: none;
        border: 2px solid #ccc;
        color: black;
      `}

    ${({deleteButton}) => deleteButton && css`
        background: none;
    `};  


    &:hover{
        background: ${({theme, hoverMain}) => hoverMain || theme.colors.tertiary};
        color:white;

        ${({hover}) => hover && css`
            background: none;
            border: 2px solid ${(props) => props.theme.colors.tertiary};
            color: ${(props) => props.theme.colors.tertiary};
        `};

        ${({hovernoBG}) => hovernoBG && css`
            background: none;
            color: ${({hoverColor}) => hoverColor};
        `};

        ${({hoverpink}) => hoverpink && css`
            background: #A5BFBE;
            color: black;
        `};
       
    }

    @media (max-width: 600px){
        font-size: 16px;
        padding:${({paddingxs}) => paddingxs || '1rem'};
        width: 100%;
        display: block;
        margin:${({marginxs}) => marginxs || '10px 0px 0px 0px'};
        ${({buttonMenuX}) => buttonMenuX && css`
            width: 10%;
        `};
    }
`;

const Button = ({
    deleteButton,
    hoverMain,
    hoverpink,
    hovernoBG,
    hoverColor,
    hover,
    padding,
    marginxs,
    paddingxs,
    buttonMenuX,
    secondary,
    width,
    display,
    bcolor,
    color,
    margin,
    type,
    onClick,
    children,
    }) => (
    <ButtonLayout
        deleteButton={deleteButton}
        hoverMain={hoverMain}
        hoverpink={hoverpink}
        hovernoBG={hovernoBG}
        hoverColor={hoverColor}
        hover={hover}
        padding={padding}
        marginxs={marginxs}
        paddingxs={paddingxs}
        buttonMenuX={buttonMenuX}
        secondary={secondary}
        width={width}
        display={display}
        bcolor={bcolor}
        color={color}
        margin={margin}
        type={type}
        onClick={onClick}
    >
        {children}
    </ButtonLayout>
);

export default Button;
