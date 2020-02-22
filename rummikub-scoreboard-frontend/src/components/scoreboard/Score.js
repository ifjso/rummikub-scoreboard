import React from 'react';
import styled from 'styled-components';

const ScoreBlock = styled.div`
  width: 34vw;
  height: 34vw;
  border: 4px dashed #afafaf;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 0;
    height: 70%;
    font-size: 18vw;
  }
`;

const ProfileBlock = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid;
`;

const Profile = () => <ProfileBlock />;

const Score = () => (
  <ScoreBlock>
    <Profile />
    <h1>99</h1>
  </ScoreBlock>
);

export default Score;
