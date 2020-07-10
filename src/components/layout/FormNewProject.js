import React from 'react';
import styled, {keyframes} from 'styled-components';

const opacity = keyframes`
    0%{
        opacity: 0;
        top: -50px;
    }
    40%{
        opacity: 0;
    }
  
    100%{
        opacity: 1;
        top: 0;
    }
`;

const StyleForm = styled.form`
    position: relative;
    margin-top: 3rem;
    animation: ${opacity} .3s ease-in-out;
`; 

const FormNewProject = ({onSubmit, children}) => (
    <StyleForm onSubmit={onSubmit}>{children}</StyleForm>
)

export default FormNewProject;