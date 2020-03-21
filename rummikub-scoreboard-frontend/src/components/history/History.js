import React, { useState } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';
import Responsive from '../commons/Responsive';
import { listHistories } from '../../lib/api/histories';

const HistoryBlock = styled(Responsive)`
  display: flex;
  width: 100vw;
  padding: 4rem;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
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
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasNextPage}
        loader={<h4 key={0}>loading...</h4>}
      >
        {histories.map(history => (
          <div key={history._id} style={{ marginBottom: '5vh' }}>
            {moment(history.createdAt).format('YYYY-MM-DD HH:mm:ss.SSS')}{' '}
            {history.name} {history.value}
          </div>
        ))}
      </InfiniteScroll>
    </HistoryBlock>
  );
};

export default History;
