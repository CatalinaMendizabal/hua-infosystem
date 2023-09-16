import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the keyframes for the loader animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled-components for the loader
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust as needed */
`;

const LoaderSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top:  4px solid;
  border-top-color: ${(props) => props.theme.infoBlue};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderSpinner />
        </LoaderContainer>
    );
};

export default Loader;
