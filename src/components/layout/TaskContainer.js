import styled from 'styled-components';

export default styled.div`
    margin-left: 1rem;
    display: inline-flex;

    @media (max-width: 750px){
        margin-left: 0rem;    
    }

    @media (max-width: 600px){
        display: block;
        margin-left: 0px;
    }
`;
