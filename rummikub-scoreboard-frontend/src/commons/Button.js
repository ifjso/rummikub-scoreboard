import React from './react';
import styled, { css } from './styled-components';
import { Link } from './react-router-dom';

const buttonStyle = css`
  width: 50%;
  border: none;
  outline: none;
  font-size: 10vw;
  padding: 1.5vw;
  line-height: 7vw;
  background: #121212;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const Button = ({ to, ...rest }) =>
  to ? <StyledLink to={to} {...rest} /> : <StyledButton {...rest} />;

export default Button;
