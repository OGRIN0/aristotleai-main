// ChatWrapper.js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Add any additional styling needed for the wrapper */
`;

const UserMessage = styled.div`
  background-color: black;
  color: white;
  /* Add any additional styling needed for the user message */
`;

const ChatWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default ChatWrapper;
