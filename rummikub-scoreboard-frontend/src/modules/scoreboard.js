import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import { readUser } from '../lib/api/users';

const READ_USERS = 'scoreboard/READ_USERS';
const READ_USERS_SUCCESS = 'scoreboard/READ_USERS_SUCCESS';
const READ_USERS_FAILURE = 'scoreboard/READ_USERS_FAILURE';

const START_SAVING_SCORE = 'scoreboard/START_SAVING_SCORE';
const END_SAVING_SCORE = 'scoreboard/END_SAVING_SCORE';

export const readUsers = createAction(READ_USERS);

export const startSavingScore = createAction(
  START_SAVING_SCORE,
  selectedUserIndex => ({ selectedUserIndex })
);

export const endSavingScore = createAction(
  END_SAVING_SCORE,
  (selectedUserIndex, user) => ({ selectedUserIndex, user })
);

function* readUsersSaga() {
  yield put(startLoading(READ_USERS));

  try {
    const users = yield all([call(readUser, 1), call(readUser, 2)]);
    yield put({
      type: READ_USERS_SUCCESS,
      payload: [users[0].data, users[1].data]
    });
  } catch (e) {
    yield put({ type: READ_USERS_FAILURE, payload: e, error: true });
  }

  yield put(finishLoading(READ_USERS));
}

export function* scoreboardSaga() {
  yield takeLatest(READ_USERS, readUsersSaga);
}

const initialState = [
  { user: null, isLoading: false },
  { user: null, isLoading: false }
];

const scoreboard = handleActions(
  {
    [READ_USERS_SUCCESS]: (state, { payload: users }) =>
      produce(state, baseState => {
        [baseState[0].user, baseState[1].user] = users;
      }),
    [START_SAVING_SCORE]: (state, { payload: { selectedUserIndex } }) =>
      produce(state, baseState => {
        baseState[selectedUserIndex].isLoading = true;
      }),
    [END_SAVING_SCORE]: (state, { payload: { selectedUserIndex, user } }) =>
      produce(state, baseState => {
        baseState[selectedUserIndex].user = user;
        baseState[selectedUserIndex].isLoading = false;
      })
  },
  initialState
);

export default scoreboard;
