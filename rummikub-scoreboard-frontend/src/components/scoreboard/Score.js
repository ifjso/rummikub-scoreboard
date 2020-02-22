import React from 'react';
import styled from 'styled-components';

const ScoreBlock = styled.div`
  width: 34vw;
  height: 34vw;
  border: 1px dashed #afafaf;
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
  display: flex;
  border-bottom: 1px dashed #afafaf;
  .nickname {
    margin: 0 auto;
    font-size: 5vw;
    padding: 2vw;
  }
`;

const Picture = styled.div`
  width: 30%;
  border-right: 1px dashed #afafaf;
`;

const Profile = () => (
  <ProfileBlock>
    <Picture />
    <span className="nickname">디발</span>
  </ProfileBlock>
);

const Score = () => (
  <ScoreBlock>
    <Profile />
    <h1>99</h1>
  </ScoreBlock>
);

export default Score;
