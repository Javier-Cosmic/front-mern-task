import React from 'react';
import styled from 'styled-components';

const StyleSpinner = styled.div`

    display: flex;
    justify-content: center;
    align-content: center;

    .spinner {
    width: 100px;
    text-align: center;
    margin-top: 10px;
    }

    .spinner > div {
    width: 14px;
    height: 14px;
    margin: 5px;
    background-color: #A5BFBE;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    }

    .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
        -webkit-transform: scale(0);
        transform: scale(0);
    } 40% { 
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
    }
    }

`;

const Loading = () => {
    return (
        <StyleSpinner>
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </StyleSpinner>
    )
}

export default Loading;