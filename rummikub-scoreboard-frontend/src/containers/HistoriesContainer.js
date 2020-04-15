import React from 'react';
import { useSelector } from 'react-redux';
import { load, reset } from '../modules/histories';
import Histories from '../components/Histories';
import useActions from '../lib/useActions';

const HistoriesContainer = () => {
  const { currentPage, histories, hasNextPage } = useSelector(
    ({ histories: state }) => state
  );

  const [onLoad, onReset] = useActions([load, reset], []);

  return (
    <Histories
      currentPage={currentPage}
      histories={histories}
      hasNextPage={hasNextPage}
      onLoad={onLoad}
      onReset={onReset}
    />
  );
};

export default React.memo(HistoriesContainer);
