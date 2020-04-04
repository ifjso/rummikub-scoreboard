import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Button from '../commons/Button';

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

  ${({ reversed }) =>
    reversed &&
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

const Shimmer = styled.h1`
  color: rgba(255, 255, 255, 0.5);
  background-color: #222;
  background-image: linear-gradient(
    to right,
    rgba(34, 34, 34, 1),
    rgba(255, 255, 255, 0.5),
    rgba(34, 34, 34, 1)
  );

  --shimmer-size: 0.35em;
  background-size: var(--shimmer-size) auto;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  animation-name: shimmer;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes shimmer {
    0% {
      background-position: calc(0% - var(--shimmer-size)) 0;
    }

    100% {
      background-position: calc(100% + var(--shimmer-size)) 0;
    }
  }
`;

const Score = ({ reversed = false, user, onClick = i => i }) => (
  <ScoreBlock>
    <Button onClick={() => onClick(user, 1)}>
      <Icon name="plus" size="small" color="grey" />
    </Button>
    <UserWrapper>
      <Profile reversed={reversed} user={user} />
      <Shimmer>{user.score}</Shimmer>
    </UserWrapper>
    <Button onClick={() => onClick(user, -1)}>
      <Icon name="minus" size="small" color="grey" />
    </Button>
  </ScoreBlock>
);
export default React.memo(Score);
