import React from "react";
import styled, { css, keyframes } from "styled-components";

const opacity = keyframes`
    0% {
        opacity: 0;
        transform: scale(0, 0);
    }
    10% {
        opacity: 0.1;
        transform: scale(0.1, 0.1);
    }
    20% {
        opacity: 0.2;
        transform: scale(0.2, 0.2);
    }
    30% {
        opacity: 0.3;
        transform: scale(0.3, 0.3);
    }
    40% {
        opacity: 0.4;
        transform: scale(0.4, 0.4);
    }
    50% {
        opacity: 0.5;
        transform: scale(0.5, 0.5);
    }
    60% {
        opacity: 0.6;
        transform: scale(0.6, 0.6);
    }
    70% {
        opacity: 0.7;
        transform: scale(0.7, 0.7);
    }
    80% {
        opacity: 0.8;
        transform: scale(0.8, 0.8);
    }
    90% {
        opacity: 0.9;
        transform: scale(0.9, 0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const StyleMsg = styled.p`
  display: flex;
  position: relative;
  justify-content: ${({ justify }) => justify || "space-between"};
  font-size: ${({ fontsize }) => fontsize || "10.9px"};
  font-weight: 600;
  padding: 0.6rem;
  animation: ${opacity} 0.2s ease-in-out;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  ${({ success }) => success && css``};

  ${({ error }) =>
    error &&
    css`
      background-color: #ffc6be;
      color: #b72511;
      border: 1.5px solid #d2341c;
  `};

  ${({ errorTask }) =>
    errorTask &&
    css`
      display: block;
      width: 70%;
      margin: 0 auto;
      text-align: center;
      background-color: #ffc6be;
      color: #b72511;
      border: 1.5px solid #d2341c;
      animation: ${opacity} 0.25s ease-in-out;


      @media (max-width: 600px) {
        width: ${({widthxs}) => widthxs || '100%' };
        margin-top: ${({mtopxs}) => mtopxs || '25px'};
      }

  `};

  @media (min-width: 769px){
      width: 50%;
  }

  @media (max-width: 768px) {
    justify-content: center;
    font-size: ${({ fontsizesm }) => fontsizesm || "13px"};
  }

  @media (max-width: 600px) {
    font-size: ${({ fontsizexs }) => fontsizexs || "12px"};
  }
`;

const Msg = ({
    mtopxs,
    widthxs,
    errorTask,
    justify,
    fontsizesm,
    fontsizexs,
    fontsize,
    success,
    error,
    children,
    }) => (
    <StyleMsg
        mtopxs={mtopxs}
        widthxs={widthxs}
        errorTask={errorTask}
        justify={justify}
        fontsizesm={fontsizesm}
        fontsizexs={fontsizexs}
        fontsize={fontsize}
        success={success}
        error={error}
    >
        {children}
    </StyleMsg>
);

export default Msg;
