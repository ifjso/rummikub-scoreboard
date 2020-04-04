import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';
import Loader from '../commons/Loader';
import Score from './Score';
import { readUser, updateUser } from '../../lib/api/users';
import { getEmojiType } from '../../helpers/emoji';

const ScoreBoardBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ScoreWrapper = styled(Responsive)`
  width: 86vw;
  height: 90vw;
  padding: 2vw;
  align-items: center;
  justify-content: space-between;
  > span {
    margin: 0;
    font-size: 12vw;
  }
`;

const StyledSpan = styled.span`
  padding-top: 3vw;
  font-weight: bold;
  color: white;
`;

const ScoreBoard = () => {
  const isCancelled = useRef(false);
  const [state, setState] = useState({ isLoading: true, users: [] });

  useEffect(() => {
    const readUsersFunc = async () => {
      const users = await Promise.all([readUser(1), readUser(2)]);
      if (!isCancelled.current) {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          users: [users[0].data, users[1].data]
        }));
      }
    };

    readUsersFunc();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  const onClick = useCallback(async (user, value) => {
    const { data } = await updateUser({
      owner: user.owner,
      score: user.score + value,
      emojiType: getEmojiType(value)
    });

    if (!isCancelled.current) {
      setState(prevState => ({
        ...prevState,
        users: prevState.users.map(u => (data.owner === u.owner ? data : u))
      }));
    }
  }, []);

  return state.isLoading ? (
    <Loader type="Hearts" color="#bf0303" />
  ) : (
    <ScoreBoardBlock>
      <ScoreWrapper>
        <Score user={state.users[0]} isReversed={false} onClick={onClick} />
        <StyledSpan>:</StyledSpan>
        <Score user={state.users[1]} isReversed onClick={onClick} />
      </ScoreWrapper>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
