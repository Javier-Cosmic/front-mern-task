import React from "react";
import styled, { css, keyframes } from "styled-components";

const opacity = keyframes`
    0% {
        opacity: 0;
        transform: scale(0, 0);
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
  animation: ${opacity} 0.25s ease;
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
      animation: ${opacity} 0.25s ease alternate;

      @media (min-width: 769px){
        width: 53%;
      }

      @media (max-width: 600px) {
        width: ${({widthxs}) => widthxs || '100%' };
        margin-top: ${({mtopxs}) => mtopxs || '25px'};
      }

  `};

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
