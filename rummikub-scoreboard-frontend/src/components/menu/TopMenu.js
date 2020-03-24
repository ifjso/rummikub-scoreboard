import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

const TopMenu = ({ location: { pathname } }) => {
  const [active, setActive] = useState(pathname);
  const onItemClick = useCallback((e, { to }) => setActive(to), []);

  return (
    <Menu fixed="top" borderless inverted>
      <Container text>
        <Menu.Item
          as={Link}
          to="/"
          content="점수판"
          active={active === '/'}
          onClick={onItemClick}
        />
        <Menu.Item
          as={Link}
          to="/histories"
          content="히스토리"
          active={active === '/histories'}
          onClick={onItemClick}
        />
      </Container>
    </Menu>
  );
};

export default withRouter(TopMenu);
