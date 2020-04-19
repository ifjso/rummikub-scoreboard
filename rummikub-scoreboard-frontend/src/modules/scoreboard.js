import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
import { readUser, updateUser } from '../lib/api/users';
import { getEmojiType } from '../helpers/emoji';

const READ_USERS = 'scoreboard/READ_USERS';
const READ_USERS_SUCCESS = 'scoreboard/READ_USERS_SUCCESS';
const READ_USERS_FAILURE = 'scoreboard/READ_USERS_FAILURE';

const SAVE_SCORE = 'scoreboard/SAVE_SCORE';
const SAVE_SCORE_SUCCESS = 'scoreboard/SAVE_SCORE_SUCCESS';
const SAVE_SCORE_FAILURE = 'scoreboard/SAVE_SCORE_FAILURE';

export const readUsers = createAction(READ_USERS);

export const saveScore = createAction(
  SAVE_SCORE,
  ({ selectedUserIndex, user, value, memo }) => ({
    selectedUserIndex,
    user,
    value,
    memo
  })
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

function* saveScoreSaga(action) {
  try {
    const { selectedUserIndex, user, value, memo } = action.payload;
    const { data } = yield call(updateUser, {
      owner: user.owner,
      score: user.score + value,
      emojiType: getEmojiType(value),
      memo
    });
    yield put({
      type: SAVE_SCORE_SUCCESS,
      payload: { selectedUserIndex, user: data }
    });
  } catch (e) {
    yield put({ type: SAVE_SCORE_FAILURE, payload: e, error: true });
  }
}

export function* scoreboardSaga() {
  yield takeLatest(READ_USERS, readUsersSaga);
  yield takeLatest(SAVE_SCORE, saveScoreSaga);
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
    [SAVE_SCORE]: (state, { payload: { selectedUserIndex } }) =>
      produce(state, baseState => {
        baseState[selectedUserIndex].isLoading = true;
      }),
    [SAVE_SCORE_SUCCESS]: (state, { payload: { selectedUserIndex, user } }) =>
      produce(state, baseState => {
        baseState[selectedUserIndex] = user;
        baseState[selectedUserIndex].isLoading = false;
      })
  },
  initialState
);

export default scoreboard;
