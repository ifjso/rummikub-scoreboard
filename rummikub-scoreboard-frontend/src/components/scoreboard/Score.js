import React from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Img from 'react-image';
import Button from '../../commons/Button';
import Shimmer from '../../commons/Shimmer';
import Loader from '../../commons/Loader';

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
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
  }
`;

const Nickname = styled.span`
  margin: 0 auto;
  padding: 1vw;
  font-size: 6vw;
  line-height: 2em;
`;

const ButtonWithLoader = ({
  name,
  size = 'small',
  isLoading = false,
  onClick = i => i
}) => (
  <Button onClick={onClick} disabled={isLoading}>
    <Icon
      name={name}
      size={size}
      color="grey"
      disabled={isLoading}
      loading={isLoading}
    />
  </Button>
);

const Profile = ({ isReversed, user: { name, picture } }) => (
  <ProfileBlock isReversed={isReversed}>
    <Picture isReversed={isReversed}>
      <Img
        src={picture}
        alt="me"
        loader={
          <Loader type="ThreeDots" width={24} height={24} color="grey" inline />
        }
      />
    </Picture>
    <Nickname>{name}</Nickname>
  </ProfileBlock>
);

const Score = ({
  index,
  user,
  isReversed = false,
  isLoading = false,
  onClick = i => i
}) => (
  <ScoreBlock>
    <ButtonWithLoader
      name="plus"
      isLoading={isLoading}
      onClick={() => onClick(index, 1)}
    />
    <UserWrapper>
      <Profile isReversed={isReversed} user={user} />
      <Shimmer isLoading={isLoading}>{user.score}</Shimmer>
    </UserWrapper>
    <ButtonWithLoader
      name="minus"
      isLoading={isLoading}
      onClick={() => onClick(index, -1)}
    />
  </ScoreBlock>
);

export default React.memo(Score);
