import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Visibility, Container, Menu } from 'semantic-ui-react';

const StyledMenu = styled(Menu)`
  ${({ fixed }) =>
    fixed &&
    css`
      transition: box-shadow 0.5s ease, padding 0.5s ease;
    `}
  && {
    border: ${({ fixed }) => (fixed ? '1px solid #ddd' : 'none')};
    box-shadow: ${({ fixed }) =>
      fixed ? '0px 1px 3px rgba(0, 0, 0, 0.2)' : 'none'};
  }
`;

const TopMenu = () => {
  const [menuFixed, setMenuFixed] = useState(false);
  const onStickMenu = useCallback(() => setMenuFixed(true), []);
  const onUnStickMenu = useCallback(() => setMenuFixed(false), []);

  return (
    <Visibility
      once={false}
      onBottomPassed={onStickMenu}
      onBottomVisible={onUnStickMenu}
    >
      <StyledMenu borderless fixed={menuFixed ? 'top' : undefined}>
        <Container text>
          <Menu.Item as={Link} to="/" name="점수판" />
          <Menu.Item as={Link} to="/histories" name="히스토리" />
        </Container>
      </StyledMenu>
    </Visibility>
  );
};

export default TopMenu;
