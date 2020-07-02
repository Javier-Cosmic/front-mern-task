import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
    display: inline-flex;
    width: 100%;
    margin-bottom: ${({marginb}) => marginb};

    @media(max-width: 600px){
        display: block;
        margin: 0;
    }
`;

const ContainerInputTask = ({marginb, children}) => (
    <Style marginb={marginb}>{children}</Style>
)

export default ContainerInputTask;