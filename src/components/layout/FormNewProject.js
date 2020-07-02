import React from 'react';
import styled, {keyframes} from 'styled-components';

const opacity = keyframes`
    to{
        opacity: 0%;
        top: -60px;
    }
    from{
        opacity: 100%;
        top: 0px;
    }
`;

const StyleForm = styled.form`
    position: relative;
    margin-top: 3rem;
    animation: ${opacity} 0.3s ease-in alternate-reverse;
`; 

const FormNewProject = ({onSubmit, children}) => (
    <StyleForm onSubmit={onSubmit}>{children}</StyleForm>
)

export default FormNewProject;