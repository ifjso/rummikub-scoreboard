import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
  z-index: 1000;
  transform: translateX(-50%) translateY(-50%);
`;

export default ({ ...rest }) => (
  <StyledLoader width="100%" height="100%" {...rest} />
);
