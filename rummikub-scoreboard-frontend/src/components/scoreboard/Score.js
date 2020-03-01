import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import Button from '../commons/Button';
import { readScore, updateScore } from '../../lib/api/scores';

const ScoreBlock = styled.div`
  width: 34vw;
  height: 36vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;

  h1 {
    margin: 0;
    height: 50%;
    width: 100%;
    text-align: center;
    font-size: 18vw;
    line-height: 19vw;
  }
`;

const ProfileBlock = styled.div`
  width: 100%;
  height: 24%;
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
  line-height: 1em;
`;

const Profile = ({ reversed, user: { name, picture } }) => (
  <ProfileBlock reversed={reversed}>
    <Picture reversed={reversed} picture={picture} />
    <Nickname>{name}</Nickname>
  </ProfileBlock>
);

const Score = ({ reversed = false, owner }) => {
  const [score, setScore] = useState(0);
  const [user, setUser] = useState({});
  const isCancelled = useRef(false);

  useEffect(() => {
    const readScoreFunc = async () => {
      const { data } = await readScore(owner);
      if (!isCancelled.current) {
        setUser(data.user);
        setScore(data.score);
      }
    };

    readScoreFunc();

    return () => {
      isCancelled.current = true;
    };
  }, [owner]);

  const onClick = useCallback(
    async value => {
      const newScore = score + value;
      await updateScore({ owner, score: newScore });

      if (!isCancelled.current) {
        setScore(newScore);
      }
    },
    [owner, score]
  );

  return (
    <ScoreBlock>
      <Profile reversed={reversed} user={user} />
      <h1>{score}</h1>
      <Button onClick={() => onClick(-1)}>-</Button>
      <Button onClick={() => onClick(1)}>+</Button>
    </ScoreBlock>
  );
};

export default Score;
