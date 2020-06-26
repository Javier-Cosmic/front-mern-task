import React from 'react';
import styled from 'styled-components';

const StyleUl = styled.div`
    /* text-align: left; */
    /* justify-content: space-between; */
`;

const ListProject = ({children}) => (
    <StyleUl>{children}</StyleUl>
)

export default ListProject;