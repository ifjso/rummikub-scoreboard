import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';
import Responsive from '../commons/Responsive';
import { listHistories } from '../../lib/api/histories';

const HistoryBlock = styled(Responsive)`
  display: flex;
  width: 100vw;
  padding: 4rem 2rem;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfiniteScrollWithBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const HistoryBox = styled.div`
  margin-bottom: 2vh;
  padding: 1.5rem;
  font-size: 1.1em;
  border-radius: 1rem;
  background-color: #fcfff5;
  color: #2c662d;
  box-shadow: 0 0 0 2px #a3c293 inset, 0 0 0 0 transparent;
  ${({ value }) =>
    value < 0 &&
    css`
      background-color: #fff6f6;
      color: #9f3a38;
      box-shadow: 0 0 0 2px #e0b4b4 inset, 0 0 0 0 transparent;
    `}
`;

const ContentBlock = styled.p`
  line-height: 0.8em;
`;

const History = () => {
  const [histories, setHistories] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);

  const loadFunc = async page => {
    const { data } = await listHistories({ page });
    setHistories(histories.concat(data.histories));
    setHasNextPage(data.hasNextPage);
  };

  return (
    <HistoryBlock>
      <InfiniteScrollWithBlock
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={<h4 key={0}>loading...</h4>}
      >
        {histories.map(history => (
          <HistoryBox key={history._id} value={history.value}>
            <ContentBlock>
              {moment(history.createdAt).format(
                'YYYY년 MM월 DD일 HH시mm분ss초'
              )}
            </ContentBlock>
            <ContentBlock>{history.name}</ContentBlock>
            <ContentBlock>{history.value}</ContentBlock>
          </HistoryBox>
        ))}
      </InfiniteScrollWithBlock>
    </HistoryBlock>
  );
};

export default History;
