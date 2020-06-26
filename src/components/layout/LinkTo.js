import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EnlaceStyle = styled(Link)`
    text-decoration: none;
    color: #616161;
    font-size: 12px;
    font-weight: 600;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    text-transform: uppercase;

    &:hover{
        color: ${(props) => props.theme.colors.tertiary};
    }

    @media (max-width: 600px){
        font-size: 14px;
    }
`;

const LinkTo = ({to, children}) => (
    <EnlaceStyle to={to}>{children}</EnlaceStyle>
)

export default LinkTo;