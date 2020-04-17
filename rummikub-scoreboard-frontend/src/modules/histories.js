import { createAction, handleActions } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { listHistories } from '../lib/api/histories';

const LOAD = 'histories/LOAD';
const LOAD_SUCCESS = 'histories/LOAD_SUCCESS';
const LOAD_FAILURE = 'histories/LOAD_FAILURE';

const RESET = 'histories/RESET';

export const load = createAction(LOAD, page => page);
export const reset = createAction(RESET);

function* loadSaga(action) {
  try {
    const { data } = yield call(listHistories, { page: action.payload });
    yield put({
      type: LOAD_SUCCESS,
      payload: { ...data, currentPage: action.payload }
    });
  } catch (e) {
    yield put({
      type: LOAD_FAILURE,
      payload: e,
      error: true
    });
  }
}

export function* historiesSaga() {
  yield takeLatest(LOAD, loadSaga);
}

const initialState = {
  currentPage: 0,
  histories: [],
  hasNextPage: true
};

const histories = handleActions(
  {
    [LOAD_SUCCESS]: (
      state,
      { payload: { currentPage, histories: newHistories, hasNextPage } }
    ) => ({
      ...state,
      currentPage,
      histories: state.histories.concat(newHistories),
      hasNextPage
    }),
    [RESET]: () => ({ currentPage: 0, histories: [], hasNextPage: true })
  },
  initialState
);

export default histories;
