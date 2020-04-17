import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import histories, { historiesSaga } from './histories';
import scoreboard from './scoreboard';
import memoModal from './memoModal';

const rootReducer = combineReducers({ histories, scoreboard, memoModal });

export function* rootSaga() {
  yield all([historiesSaga()]);
}

export default rootReducer;
