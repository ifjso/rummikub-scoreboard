/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect } from 'react';
import Loader from '../../commons/Loader';
import { listHistories } from '../../lib/api/histories';
import History from './History';
import { HistoryBlock, InfiniteScrollBlock } from './style';

const Histories = ({
  currentPage,
  histories,
  hasNextPage,
  onLoad,
  onReset
}) => {
  useEffect(() => () => onReset(), [onReset]);

  const loadMore = useCallback(
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
        loadMore={loadMore}
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
