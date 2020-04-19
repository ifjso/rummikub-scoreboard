import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import { all, call, put, takeLatest, take } from 'redux-saga/effects';
import { readUser } from '../lib/api/users';

const READ_USERS = 'scoreboard/READ_USERS';
const READ_USERS_SUCCESS = 'scoreboard/READ_USERS_SUCCESS';
const READ_USERS_FAILURE = 'scoreboard/READ_USERS_FAILURE';

const START_SAVING_SCORE = 'scoreboard/START_SAVING_SCORE';
const END_SAVING_SCORE = 'scoreboard/END_SAVING_SCORE';

export const readUsers = createAction(READ_USERS, users => ({ users }));

export const startSavingScore = createAction(
  START_SAVING_SCORE,
  selectedUserIndex => ({ selectedUserIndex })
);

export const endSavingScore = createAction(
  END_SAVING_SCORE,
  (selectedUserIndex, user) => ({ selectedUserIndex, user })
);

function* readUsersSaga(action) {
  // yield put(start);
  try {
    const users = yield all([call(readUser, 1), call(readUser, 2)]);
    yield put({
      type: READ_USERS_SUCCESS,
      payload: [users[0].data, users[1].data]
    });
  } catch (e) {
    yield put({ type: READ_USERS_FAILURE, payload: e, error: true });
  }
  // yield put(end)
}

export function* scoreboardSaga() {
  yield takeLatest(READ_USERS, readUsersSaga);
}

const initialState = {
  isLoading: true,
  scores: [
    { user: null, isLoading: false },
    { user: null, isLoading: false }
  ]
};

const scoreboard = handleActions(
  {
    [READ_USERS_SUCCESS]: (state, { payload: users }) =>
      produce(state, baseState => {
        baseState.isLoading = false;
        [baseState.scores[0].user, baseState.scores[1].user] = users;
      }),
    [START_SAVING_SCORE]: (state, { payload: { selectedUserIndex } }) =>
      produce(state, baseState => {
        baseState.scores[selectedUserIndex].isLoading = true;
      }),
    [END_SAVING_SCORE]: (state, { payload: { selectedUserIndex, user } }) =>
      produce(state, baseState => {
        baseState.scores[selectedUserIndex].user = user;
        baseState.scores[selectedUserIndex].isLoading = false;
      })
  },
  initialState
);

export default scoreboard;
