import React from 'react';
import styled from 'styled-components';

const WrapperStyle = styled.div`
    display: flex;
    margin: ${({margin}) => margin || '2rem'};
    align-items: center;

    @media (max-width: 600px){
       flex-direction: column;
    }
`

const WrapperFields = ({margin, children}) => (
    <WrapperStyle margin={margin}>{children}</WrapperStyle>
)

export default WrapperFields;