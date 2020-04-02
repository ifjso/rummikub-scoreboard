/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import { Loader } from 'semantic-ui-react';
import Responsive from '../commons/Responsive';
import { listHistories } from '../../lib/api/histories';
import HistoryItem from './HistoryItem';

const HistoryBlock = styled(Responsive)`
  width: 100vw;
  padding: 5rem 2rem;
`;

const InfiniteScrollBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const HistoryList = () => {
  const [pagination, setPagination] = useState({
    histories: [],
    hasNextPage: true
  });
  const { histories, hasNextPage } = pagination;
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
      setPagination({
        histories: pagination.histories.concat(data.histories),
        hasNextPage: data.hasNextPage
      });
    }
  };
  return (
    <HistoryBlock>
      <InfiniteScrollBlock
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={
          <Loader key="1" active inline="centered" size="small" inverted />
        }
      >
        {histories.map(history => (
          <HistoryItem key={history._id} history={history} />
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  );
};

export default React.memo(HistoryList);
