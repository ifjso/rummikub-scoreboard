import React from 'react';
import { connect } from 'react-redux';
import { load } from '../modules/histories';
import Histories from '../components/History/Histories';

const HistoriesContainer = ({
  histories,
  hasNextPage,
  isLoading,
  loadHistories
}) => (
  <Histories
    histories={histories}
    hasNextPage={hasNextPage}
    isLoading={isLoading}
    onLoad={loadHistories}
  />
);

const mapStateToProps = ({ histories }) => ({
  histories: histories.histories,
  hasNextPage: histories.hasNextPage,
  isLoading: histories.isLoading
});

const mapDispatchToProps = dispatch => ({
  loadHistories: ({ histories, hasNextPage }) =>
    dispatch(load({ histories, hasNextPage }))
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoriesContainer);
