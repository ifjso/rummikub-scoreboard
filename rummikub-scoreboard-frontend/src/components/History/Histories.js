/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import Responsive from '../../commons/Responsive';
import Loader from '../../commons/Loader';
import { listHistories } from '../../lib/api/histories';
import History from './History';

const HistoryBlock = styled(Responsive)`
  width: 100vw;
  padding: 5rem 2rem;
`;

const InfiniteScrollBlock = styled(InfiniteScroll)`
  width: 100vw;
`;

const Histories = ({ currentPage, histories, hasNextPage, onLoad }) => {
  const loadFunc = useCallback(
    async page => {
      const { data } = await listHistories({ page });
      onLoad({ ...data, currentPage: page });
    },
    [onLoad]
  );

  const InfiniteScrollLoader = (
    <Loader key="1" type="Oval" color="white" width={25} height={25} inline />
  );

  return (
    <HistoryBlock>
      <InfiniteScrollBlock
        pageStart={currentPage}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={InfiniteScrollLoader}
      >
        {histories.map(history => (
          <History key={history._id} history={history} />
        ))}
      </InfiniteScrollBlock>
    </HistoryBlock>
  );
};

export default React.memo(Histories);
