import styled, {keyframes} from 'styled-components';

const opacity = keyframes`
    to{
        transform: translateX(-400px);
        opacity: 0%;
    }
    from{
        opacity: 100%;
        transform: translateX(0);
    }
`;

export default styled.div`
    z-index: 10;
    position: relative;
    animation: ${opacity} 0.5s ease-in alternate-reverse;
`;