import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Button from '../commons/Button';
import { readUser } from '../../lib/api/users';
import { readScore, updateScore } from '../../lib/api/scores';

const ScoreBlock = styled.div`
  width: 34vw;
  height: 40vw;
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
  .nickname {
    margin: 0 auto;
    font-size: 6vw;
    padding: 1vw;
  }
  ${({ reversed }) =>
    reversed &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Picture = styled.div`
  width: 28%;
`;

const Profile = ({ reversed, owner }) => {
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const readUserFunc = async () => {
      const { data } = await readUser(owner);
      setPicture(data.picture);
      setName(data.name);
    };

    readUserFunc();
  });

  return (
    <ProfileBlock reversed={reversed}>
      <Picture reversed={reversed} picture={picture} />
      <span className="nickname">{name}</span>
    </ProfileBlock>
  );
};

const Score = ({ reversed = false, owner }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const readScoreFunc = async () => {
      const { data } = await readScore(owner);
      setScore(data.score);
    };
    readScoreFunc();
  }, [owner]);

  const onClick = async newScore => {
    await updateScore({ owner, score: newScore });
    setScore(newScore);
  };

  return (
    <ScoreBlock>
      <Profile reversed={reversed} owner={owner} />
      <h1>{score}</h1>
      <Button onClick={() => onClick(score - 1)}>-</Button>
      <Button onClick={() => onClick(score + 1)}>+</Button>
    </ScoreBlock>
  );
};

export default Score;
