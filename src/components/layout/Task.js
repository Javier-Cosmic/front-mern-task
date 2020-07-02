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
    -webkit-box-shadow: 0px 3px 10px -2px rgba(0,0,0,0.35);
    -moz-box-shadow: 0px 3px 10px -2px rgba(0,0,0,0.35);
    box-shadow: 0px 3px 10px -2px rgba(0,0,0,0.35);

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