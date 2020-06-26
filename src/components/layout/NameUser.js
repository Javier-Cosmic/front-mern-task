import React from 'react';
import styled from 'styled-components';

const StyleName = styled.p`
    color: ${({colorText}) => colorText};
    font-size: 1.6rem;
    margin-left: 4px;

    @media (max-width: 768px){
        
    }
`;

const NameUser = ({colorText, children}) => (
    <StyleName colorText={colorText}>{children}</StyleName>
)

export default NameUser;

