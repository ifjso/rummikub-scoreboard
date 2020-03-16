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

  @media (max-width: 768px) {
    padding: 2.2em 0 0 0;
  }
`;

const History = () => {
  const [histories, setHistories] = useState([]);
  const [skip, setSkip] = useState(0);

  const loadFunc = async () => {
    const { data } = await listHistories({ from: 1, skip, limit: 20 });
    setHistories(histories.concat(data));
    setSkip(skip + 20);
  };

  return (
    <HistoryBlock>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore
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
