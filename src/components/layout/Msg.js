import React from 'react';
import styled from 'styled-components';

const StyleMsg = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: red;
    padding: .5rem 2rem;
    align-items: center;
    margin-bottom: 1rem;
    border-radius: .5rem;
`;

const TaskMsg = ({children}) => (
    <StyleMsg>{children}</StyleMsg>
)

export default TaskMsg;
