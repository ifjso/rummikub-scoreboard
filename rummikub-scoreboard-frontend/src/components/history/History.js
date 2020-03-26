import React, { useState } from 'react';
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
  display: flex;
  width: 100vw;
  padding: 5rem 2rem;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfiniteScrollBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const HistoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ContentBlock = styled.span`
  flex: 1;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  line-height: 0.8em;
  font-size: ${({ size = 1 }) => `${size}em`};
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
      <InfiniteScrollBlock
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={<Loader key="1" active inline="centered" size="small" />}
      >
        {histories.map(history => (
          <HistoryBox key={history._id} value={history.value}>
            <ContentBlock size="2">{history.value}</ContentBlock>
            <ContentBlock size="2">{history.name}</ContentBlock>
            <ContentBlock right>
              <TimeAgo date={history.createdAt} formatter={formatter} />
            </ContentBlock>
          </HistoryBox>
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  );
};

export default History;
