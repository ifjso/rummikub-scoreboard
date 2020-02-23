import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)``;

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-size: 10vw;
  padding: 1.5vw;
  line-height: 7vw;
  cursor: pointer;
  width: 50%;

  background: white;
  &:hover {
    background: grey;
  }
`;

const Button = ({ to, ...rest }) =>
  to ? <StyledLink to={to} {...rest} /> : <StyledButton {...rest} />;

export default Button;
