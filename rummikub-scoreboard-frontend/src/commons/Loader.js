import React from './react';
import Loader from './react-loader-spinner';
import styled, { css } from './styled-components';

const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%) translateY(-50%);
  ${({ inline }) =>
    inline &&
    css`
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      transform: translateX(0) translateY(0);
    `}
`;

export default ({ width = 140, height = 140, ...rest }) => (
  <StyledLoader width={width} height={height} {...rest} />
);
