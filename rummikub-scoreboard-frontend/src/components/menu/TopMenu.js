import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const TopMenu = () => (
  <Menu borderless fixed="top" inverted>
    <Container text>
      <Menu.Item as={Link} to="/" name="점수판" />
      <Menu.Item as={Link} to="/histories" name="히스토리" />
    </Container>
  </Menu>
);

export default TopMenu;
