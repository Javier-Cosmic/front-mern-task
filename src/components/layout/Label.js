import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  width: ${({ width }) => width || "50px"};
  font-size: ${({ size }) => size || "10px"};
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin || "0px"};
  color: ${({ textColor }) => textColor || "black"};

  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 10px;
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    margin: ${({ marginsm }) => marginsm};
  }

`;

const Label = ({
    marginsm,
    textColor,
    margin,
    size,
    width,
    display,
    htmlFor,
    children,
    }) => (
    <LabelStyle
        marginsm={marginsm}
        textColor={textColor}
        margin={margin}
        size={size}
        width={width}
        display={display}
        htmlFor={htmlFor}
    >
        {children}
    </LabelStyle>
);

export default Label;
