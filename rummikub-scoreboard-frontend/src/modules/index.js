import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import histories, { historiesSaga } from './histories';
import scoreboard, { scoreboardSaga } from './scoreboard';
import memoModal from './memoModal';

const rootReducer = combineReducers({
  loading,
  histories,
  scoreboard,
  memoModal
});

export function* rootSaga() {
  yield all([historiesSaga(), scoreboardSaga()]);
}

export default rootReducer;
