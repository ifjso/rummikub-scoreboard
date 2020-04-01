import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Button from '../commons/Button';
import { readUser, updateUser } from '../../lib/api/users';
import { getEmojiType } from '../../helpers/emoji';

const ScoreBlock = styled.div`
  width: 26vw;
  height: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  flex-flow: row wrap;

  h1 {
    margin: 0;
    text-align: center;
    font-size: 28vw;
    line-height: 24vw;
  }
`;

const Wrapper = styled.div`
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

const Score = ({ reversed = false, owner }) => {
  const [user, setUser] = useState({});
  const isCancelled = useRef(false);

  useEffect(() => {
    const readUserFunc = async () => {
      const { data } = await readUser(owner);
      if (!isCancelled.current) {
        setUser(data);
      }
    };

    readUserFunc();

    return () => {
      isCancelled.current = true;
    };
  }, [owner]);

  const onClick = useCallback(
    async value => {
      const { data } = await updateUser({
        owner,
        score: user.score + value,
        emojiType: getEmojiType(value)
      });

      if (!isCancelled.current) {
        setUser(data);
      }
    },
    [owner, user]
  );

  return (
    <ScoreBlock>
      <Button onClick={() => onClick(1)}>
        <Icon name="plus" size="small" color="grey" />
      </Button>
      <Wrapper>
        <Profile reversed={reversed} user={user} />
        <h1>{user.score}</h1>
      </Wrapper>
      <Button onClick={() => onClick(-1)}>
        <Icon name="minus" size="small" color="grey" />
      </Button>
    </ScoreBlock>
  );
};

export default Score;
