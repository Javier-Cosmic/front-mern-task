import React from 'react';
import styled, {keyframes} from 'styled-components';

const opacity = keyframes`
    to{
        opacity: 0%;
        transform: translateX(-400px);
    }
    from{
        opacity: 100%;
        transform: translateX(0px);
    }
`;

const StyledForm = styled.form`
    margin: 0 auto;
    padding: 3rem;
    width: 100%;
    background: #f2f2f2;
    animation: ${opacity} 0.5s ease-in alternate-reverse;

    @media (max-width: 600px){
        width: 100%;
    }
`;

const FormTask = ({onSubmit, children}) => (
    <StyledForm onSubmit={onSubmit} >{children}</StyledForm>
)

export default FormTask;