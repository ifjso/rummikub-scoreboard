import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Button from '../commons/Button';
import Shimmer from '../commons/Shimmer';

const ScoreBlock = styled.div`
  width: 26vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 28vw;
    line-height: 24vw;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  padding-bottom: 5vh;
`;

const ProfileBlock = styled.div`
  width: 100%;
  display: flex;

  ${({ isReversed }) =>
    isReversed &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Picture = styled.div`
  width: 28%;
`;

const Nickname = styled.span`
  margin: 0 auto;
  padding: 1vw;
  font-size: 6vw;
  line-height: 2em;
`;

const Profile = ({ reversed, user: { name, picture } }) => (
  <ProfileBlock reversed={reversed}>
    <Picture reversed={reversed} picture={picture} />
    <Nickname>{name}</Nickname>
  </ProfileBlock>
);

const Score = ({
  user,
  isReversed = false,
  isLoading = false,
  onClick = i => i
}) => (
  <ScoreBlock>
    <Button onClick={() => onClick(user, 1)}>
      <Icon name="plus" size="small" color="grey" />
    </Button>
    <UserWrapper>
      <Profile isReversed={isReversed} user={user} />
      <Shimmer isLoading={isLoading}>{user.score}</Shimmer>
    </UserWrapper>
    <Button onClick={() => onClick(user, -1)}>
      <Icon name="minus" size="small" color="grey" />
    </Button>
  </ScoreBlock>
);
export default React.memo(Score);
