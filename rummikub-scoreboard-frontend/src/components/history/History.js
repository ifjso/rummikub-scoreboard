/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { Loader } from 'semantic-ui-react';
import TimeAgo from 'react-timeago';
import koreaStrings from 'react-timeago/lib/language-strings/ko';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import Responsive from '../commons/Responsive';
import { listHistories } from '../../lib/api/histories';

const formatter = buildFormatter(koreaStrings);

const HistoryBlock = styled(Responsive)`
  width: 100vw;
  padding: 5rem 2rem;
`;

const InfiniteScrollBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const HistoryBox = styled.div`
  margin-bottom: 2vh;
  font-size: 1.1em;
  color: #5aff5d;
  ${({ value }) =>
    value < 0 &&
    css`
      color: #ff3834;
    `};
  /* border: 1px solid white; */
`;

const Content = styled.span`
  line-height: 1.5em;
  font-size: ${({ size = 1 }) => `${size}em`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  /* border: 1px solid white; */
`;

const History = () => {
  const [histories, setHistories] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  const isCancelled = useRef(false);

  useEffect(
    () => () => {
      isCancelled.current = true;
    },
    []
  );

  const loadFunc = async page => {
    const { data } = await listHistories({ page });
    if (!isCancelled.current) {
      setHistories(histories.concat(data.histories));
      setHasNextPage(data.hasNextPage);
    }
  };

  return (
    <HistoryBlock>
      <InfiniteScrollBlock
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={<Loader key="1" active inline="centered" size="small" />}
      >
        {histories.map(history => (
          <HistoryBox key={history._id} value={history.value}>
            <div style={{ color: 'grey' }}>
              <Content size="1.3" bold>
                {history.name}
              </Content>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Content size="3.5" bold style={{ flex: 1 }}>
                {history.value > 0 ? `+${history.value}` : history.value}
              </Content>
              <Content
                size="2.8"
                role="img"
                aria-label="moon"
                style={{ display: 'flex', justifyContent: 'center', flex: 1 }}
              >
                🌝
              </Content>

              <div
                style={{
                  flex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end'
                }}
              >
                <Content size="0.85" bold style={{ color: 'grey' }}>
                  운동 3일 성공! 민이는 딱 하루함
                </Content>
                <Content size="0.85" style={{ color: 'grey' }}>
                  <TimeAgo date={history.createdAt} formatter={formatter} />
                </Content>
              </div>
            </div>
          </HistoryBox>
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  );
};

export default History;
