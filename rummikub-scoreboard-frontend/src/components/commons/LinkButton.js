import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const StyledLinkButton = styled(Button)`
  width: 24vw;
  font-size: 3vw;
  text-align: center;
`;

const LinkButton = ({ to = '/', ...rest }) => (
  <StyledLinkButton to={to} {...rest} />
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired
};

export default LinkButton;
