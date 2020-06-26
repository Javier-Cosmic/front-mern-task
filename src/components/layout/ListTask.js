import React from 'react';
import styled from 'styled-components';

const StyleList = styled.ol`
    /* max-width: 600px; */
    margin: 0 auto;
    border-radius: 20px;
    /* background: #f2f2f2; */
    margin: 3rem 5rem;
    padding-left: 0px;

    @media (max-width: 600px){
        margin: 2rem 2rem;
    }
`;

const ListTask = ({children}) => (
    <StyleList>{children}</StyleList>
)

export default ListTask;