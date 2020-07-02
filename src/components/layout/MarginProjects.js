import styled from 'styled-components';

export default styled.div`
    margin-top: 2rem;
    max-height: 40em;
    overflow: auto;

    @media (max-width: 600px){
        max-height: 130px;
        overflow: auto;
    }
`;