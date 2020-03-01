import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Menu } from 'semantic-ui-react';

const StyledMenu = styled(Menu)`
  && {
    border: none;
    box-shadow: none;
  }
`;

const TopMenu = () => (
  <StyledMenu borderless fixed="top">
    <Container text>
      <Menu.Item as={Link} to="/" name="점수판" />
      <Menu.Item as={Link} to="/histories" name="히스토리" />
    </Container>
  </StyledMenu>
);

export default TopMenu;
