import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  padding: 1.5rem;
  border: ${({border}) => border || 'none' };
  border-radius: 1rem;
  width: 100%;
  outline-color: #ccc;
  outline-style: none;
  height: ${({height}) => height || '7px'};
  font-size: 15px;
  
  &:focus{
      color: #505050;
      box-shadow: 1px 1px 5px 4px rgb(178, 150, 164, 0.2);
      -webkit-box-shadow: 1px 1px 5px 4px rgb(178, 150, 164, 0.2);
      -moz-box-shadow: 1px 1px 5px 4px rgb(178, 150, 164, 0.2);
      border-radius: 1rem;  
  }

  @media (max-width: 600px){
      height: 40px;
      font-size: 16px;
      width: 100%;

      &:focus{
        border: 2px solid ${(props) => props.theme.colors.tertiary};
      }
  }

`;

const Input = (props) => (
    <InputStyle
        ref={props.inner}
        border={props.border}
        height={props.height} 
        type={props.type} 
        id={props.id} 
        name={props.name} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={props.onChange}>
    </InputStyle>
)

export default Input;
