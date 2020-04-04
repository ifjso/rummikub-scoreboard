import React from './react';
import styled from './styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 80vw;
  margin: 0 auto;
  display: flex;
`;

const Responsive = ({ children, ...rest }) => (
  <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
);

export default Responsive;
