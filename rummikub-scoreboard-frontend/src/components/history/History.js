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
  /* display: flex; */
  width: 100vw;
  padding: 5rem 2rem;
  /* align-content: center; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
`;

const InfiniteScrollBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const HistoryBox = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  margin-bottom: 2vh;
  padding: 0.5em;
  font-size: 1.1em;
  color: #5aff5d;
  ${({ value }) =>
    value < 0 &&
    css`
      color: #ff3834;
    `}
`;

const ContentBlock = styled.span`
  flex: 1;
  display: flex;
  justify-content: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
  line-height: 1.5em;
  font-size: ${({ size = 1 }) => `${size}em`};
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
            {/* <ContentBlock size="2">{history.name}</ContentBlock> */}
            <div style={{ display: 'flex', color: 'grey' }}>
              <ContentBlock>{history.name}</ContentBlock>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ContentBlock size="2" style={{ flex: 1 }}>
                {history.value > 0 ? `+${history.value}` : history.value}
              </ContentBlock>
              <span
                role="img"
                aria-label="moon"
                style={{ flex: 2, fontSize: '2em' }}
              >
                🌝
              </span>
              <ContentBlock style={{ color: 'grey' }}>
                <TimeAgo date={history.createdAt} formatter={formatter} />
              </ContentBlock>
            </div>
          </HistoryBox>
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  );
};

export default History;
