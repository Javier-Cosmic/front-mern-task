import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    margin: 0 auto;
    padding: 3rem;
    width: 100%;
    background: #f2f2f2;

    @media (max-width: 600px){
        width: 100%;
    }
`;

const FormTask = ({children}) => (
    <StyledForm>{children}</StyledForm>
)

export default FormTask;