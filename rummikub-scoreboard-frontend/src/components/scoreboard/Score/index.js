import React from 'react';
import { Icon } from 'semantic-ui-react';
import Img from 'react-image';
import Button from '../../../commons/Button';
import Shimmer from '../../../commons/Shimmer';
import Loader from '../../../commons/Loader';
import {
  Nickname,
  Picture,
  ProfileBlock,
  ScoreBlock,
  UserWrapper
} from './style';

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
