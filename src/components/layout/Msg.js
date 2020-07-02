import React from "react";
import styled, { css, keyframes } from "styled-components";

const opacity = keyframes`
    from {
        opacity: 0%;
        top: -30px;
    }
    to {
        opacity: 100%;
        top: 0;
    }
`;

const StyleMsg = styled.p`
  display: flex;
  position: relative;
  justify-content: ${({ justify }) => justify || "space-between"};
  font-size: ${({ fontsize }) => fontsize || "10.9px"};
  font-weight: 600;
  padding: 1rem;
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
      width: 50%;
      margin: 0 auto;
      text-align: center;
      background-color: #ffc6be;
      color: #b72511;
      border: 1.5px solid #d2341c;
      animation: ${opacity} 0.26s ease-in-out;

      @media (max-width: 600px) {
        width: 100%;
        margin-top: 25px;
      }
  `};

  @media (max-width: 768px) {
    justify-content: center;
    font-size: ${({ fontsizesm }) => fontsizesm || "15px"};
  }

  @media (max-width: 600px) {
    font-size: ${({ fontsizexs }) => fontsizexs || "12px"};
  }
`;

const Msg = ({
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
