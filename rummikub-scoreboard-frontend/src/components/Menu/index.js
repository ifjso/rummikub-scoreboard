import React, { useState, useCallback } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import scoreboardActive from '../../assets/images/scoreboard_active.png';
import scoreboardInactive from '../../assets/images/scoreboard_inactive.png';
import historiesActive from '../../assets/images/histories_active.png';
import historiesInactive from '../../assets/images/histories_inactive.png';

const TopMenu = ({ location: { pathname } }) => {
  const [active, setActive] = useState(pathname);
  const onItemClick = useCallback((e, { to }) => setActive(to), []);

  return (
    <Menu fixed="top" size="massive" icon borderless inverted>
      <Menu.Item as={Link} to="/" onClick={onItemClick}>
        <img
          src={active === '/' ? scoreboardActive : scoreboardInactive}
          alt="홈"
        />
      </Menu.Item>
      <Menu.Item as={Link} to="/histories" onClick={onItemClick}>
        <img
          src={active === '/histories' ? historiesActive : historiesInactive}
          alt="히스토리"
        />
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(TopMenu);
