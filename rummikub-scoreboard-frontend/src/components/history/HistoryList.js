/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import Responsive from '../commons/Responsive';
import Loader from '../commons/Loader';
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
    hasNextPage: true,
    isLoaded: false
  });
  const { histories, hasNextPage } = pagination;
  const isCancelled = useRef(false);

  const loadFunc = useCallback(async page => {
    const { data } = await listHistories({ page });
    if (!isCancelled.current) {
      setPagination(prevPagination => ({
        ...prevPagination,
        histories: prevPagination.histories.concat(data.histories),
        hasNextPage: data.hasNextPage,
        isLoaded: true
      }));
    }
  }, []);

  useEffect(() => {
    loadFunc(1);
    return () => {
      isCancelled.current = true;
    };
  }, [loadFunc]);

  const InfiniteScrollLoader = (
    <Loader key="1" type="Oval" color="white" width={25} height={25} inline />
  );

  return pagination.isLoaded ? (
    <HistoryBlock>
      <InfiniteScrollBlock
        pageStart={1}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={InfiniteScrollLoader}
      >
        {histories.map(history => (
          <HistoryItem key={history._id} history={history} />
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  ) : (
    <Loader type="Hearts" color="#bf0303" />
  );
};

export default React.memo(HistoryList);
