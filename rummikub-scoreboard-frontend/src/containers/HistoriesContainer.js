import React from 'react';
import { connect } from 'react-redux';
import { load, reset } from '../modules/histories';
import Histories from '../components/History';

const HistoriesContainer = ({
  currentPage,
  histories,
  hasNextPage,
  onLoad,
  onReset
}) => (
  <Histories
    currentPage={currentPage}
    histories={histories}
    hasNextPage={hasNextPage}
    onLoad={onLoad}
    onReset={onReset}
  />
);

const mapStateToProps = ({ histories }) => ({
  currentPage: histories.currentPage,
  histories: histories.histories,
  hasNextPage: histories.hasNextPage
});

const mapDispatchToProps = dispatch => ({
  onLoad: ({ currentPage, histories, hasNextPage }) =>
    dispatch(load({ currentPage, histories, hasNextPage })),
  onReset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoriesContainer);
