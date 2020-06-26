import React from 'react';
import styled from 'styled-components';

const StyleIcon = styled.span`
    color: ${({color}) => color};
    font-family: fontawesome;
    margin-right: 3px;
`;

const IconColor = ({color, children}) => (
    <StyleIcon color={color}>{children}</StyleIcon>
)

export default IconColor;