import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../commons/Button';

const border = '1px dashed #afafaf';

const ScoreBlock = styled.div`
  width: 34vw;
  height: 40vw;
  border: ${border};
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
    line-height: 21vw;
  }
`;

const ProfileBlock = styled.div`
  width: 100%;
  height: 24%;
  display: flex;
  border-bottom: ${border};
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
  ${({ reversed }) =>
    reversed
      ? css`
          border-left: ${border};
        `
      : css`
          border-right: ${border};
        `}
`;

const Profile = ({ reversed }) => (
  <ProfileBlock reversed={reversed}>
    <Picture reversed={reversed} />
    <span className="nickname">디발</span>
  </ProfileBlock>
);

const Score = ({ reversed = false }) => (
  <ScoreBlock>
    <Profile reversed={reversed} />
    <h1>99</h1>
    <Button>+</Button>
    <Button>-</Button>
  </ScoreBlock>
);

export default Score;
