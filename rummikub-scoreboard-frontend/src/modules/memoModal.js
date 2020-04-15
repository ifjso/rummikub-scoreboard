import { createAction, handleActions } from 'redux-actions';

const CHANGE_MEMO = 'form/CHANGE_MEMO';
const SHOW_ERROR = 'form/SHOW_ERROR';
const SHOW_MODAL = 'form/SHOW_MODAL';
const HIDE_MODAL = 'form/HIDE_MODAL';

export const changeMemo = createAction(CHANGE_MEMO, memo => ({ memo }));

export const showError = createAction(SHOW_ERROR);

export const showModal = createAction(
  SHOW_MODAL,
  (selectedUserIndex, value) => ({ selectedUserIndex, value })
);

export const hideModal = createAction(HIDE_MODAL);

const initialState = {
  selectedUserIndex: 0,
  value: 0,
  memo: '',
  error: false,
  isInputting: false
};

const memoModal = handleActions(
  {
    [CHANGE_MEMO]: (state, { payload: { memo } }) => ({
      ...state,
      memo,
      error: false
    }),
    [SHOW_ERROR]: state => ({ ...state, error: true }),
    [SHOW_MODAL]: (state, { payload: { selectedUserIndex, value } }) => ({
      ...state,
      selectedUserIndex,
      value,
      isInputting: true
    }),
    [HIDE_MODAL]: state => ({
      ...state,
      memo: '',
      error: false,
      isInputting: false
    })
  },
  initialState
);

export default memoModal;
