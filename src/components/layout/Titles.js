import React from "react";
import styled, { css } from "styled-components";

const TitleStyle = styled.h1`
  font-size: ${({ fontsize }) => fontsize || "25px"};
  text-align: ${({ textAling }) => textAling || "center"};
  color: ${(props) => props.color || "#000000"};
  margin: ${({ margin }) => margin || "0px"};

  ${({ lineH }) =>
    lineH &&
    css`
      padding-bottom: 15px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ccc;
    `}

  ${({ bgTitle }) =>
    bgTitle &&
    css`
      padding: 1.85rem 4.38rem;
      background: #1E1E1E;
      position: absolute;
      top: 0;
      left: 0;
      color: white;
    `}
    
    @media (max-width: 768px) {
    font-size: ${({fontsizexs}) => fontsizexs || '21px'};
    margin: ${({ marginxs }) => marginxs};
  }

  @media (max-width: 335px) {
    font-size: 2.5em;
  }
`;

const Title = ({
  bgTitle,
  lineH,
  textAling,
  fontsizexs,
  fontsize,
  margin,
  marginxs,
  color,
  children,
}) => (
  <TitleStyle
    fontsizexs={fontsizexs}
    bgTitle={bgTitle}
    lineH={lineH}
    textAling={textAling}
    fontsize={fontsize}
    margin={margin}
    marginxs={marginxs}
    color={color}
  >
    {children}
  </TitleStyle>
);

export default Title;
