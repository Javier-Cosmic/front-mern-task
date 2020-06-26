import React from 'react';
import styled from 'styled-components';

const StyleTask = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    padding: 1.3rem 2rem 1.4rem 2rem;
    margin-bottom: 2rem;
    font-size: 15px;
    border-radius: .8rem;
    -webkit-box-shadow: 0px 4px 10px -3px rgba(117,117,117,0.4);
    -moz-box-shadow: 0px 4px 10px -3px rgba(117,117,117,0.4);
    box-shadow: 0px 3px 10px -3px rgba(60,60,60,0.4);

    @media (max-width: 750px){
        display: block;
        margin-bottom: 3rem;
        padding-bottom: 1.8rem;
    }

`;

const Task = ({children}) => (
    <StyleTask>{children}</StyleTask>
)

export default Task;