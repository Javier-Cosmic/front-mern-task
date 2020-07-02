import React from "react";
import styled from "styled-components";

const StyleP = styled.p`
  font-size: ${({ fontsize }) => fontsize};
  margin: ${({ margin }) => margin};
  font-weight: 600;
  /* text-align: justify; */
  color: ${({color}) => color};

  @media (max-width: 768px) {
    font-size: ${({ fontsizesm }) => fontsizesm || "20px"};
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: ${({ marginsm }) => marginsm || '2px'};
  }

  @media (max-width: 600px) {
    margin: ${({ marginxs }) => marginxs};
    font-size: ${({ fontsizexs }) => fontsizexs};
  }
`;

const Paragraph = ({
    color,
    fontsizesm,
    margin,
    marginsm,
    marginxs,
    fontsize,
    fontsizexs,
    children,
    }) => (
    <StyleP
        color={color}
        fontsizesm={fontsizesm}
        marginsm={marginsm}
        margin={margin}
        marginxs={marginxs}
        fontsize={fontsize}
        fontsizexs={fontsizexs}
    >
        {children}
    </StyleP>
);

export default Paragraph;
