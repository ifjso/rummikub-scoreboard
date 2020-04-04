import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const TopMenu = ({ location: { pathname } }) => {
  const [active, setActive] = useState(pathname);
  const onItemClick = useCallback((e, { to }) => setActive(to), []);

  return (
    <Menu fixed="top" size="massive" icon borderless inverted>
      <Menu.Item as={Link} to="/" active={active === '/'} onClick={onItemClick}>
        <img src="logo192.png" alt="홈" style={{ fontSize: '0.8rem' }} />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/histories"
        active={active === '/histories'}
        onClick={onItemClick}
      >
        <Icon name="history" />
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(TopMenu);
