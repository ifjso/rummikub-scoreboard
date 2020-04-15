import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { load, reset } from '../modules/histories';
import Histories from '../components/Histories';

const HistoriesContainer = () => {
  const { currentPage, histories, hasNextPage } = useSelector(
    ({ histories: state }) => state
  );

  const dispatch = useDispatch();
  const onLoad = useCallback(state => dispatch(load(state)), [dispatch]);
  const onReset = useCallback(() => dispatch(reset()), [dispatch]);

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
