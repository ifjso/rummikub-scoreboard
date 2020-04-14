import styled, { css } from 'styled-components';

export const ScoreBlock = styled.div`
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

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;
  padding-bottom: 5vh;
`;

export const ProfileBlock = styled.div`
  width: 100%;
  display: flex;

  ${({ isReversed }) =>
    isReversed &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Picture = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
    clip-path: circle(40% at center);
  }
`;

export const Nickname = styled.span`
  margin: 0 auto;
  padding: 1vw;
  font-size: 6vw;
  line-height: 2em;
`;
