const CHANGE_MEMO = 'form/CHANGE_MEMO';
const SHOW_ERROR = 'form/SHOW_ERROR';
const SHOW_MODAL = 'form/SHOW_MODAL';
const CLOSE_MODAL = 'form/CLOSE_MODAL';

export const changeMemo = memo => ({ type: CHANGE_MEMO, memo });

export const showError = () => ({ type: SHOW_ERROR });

export const showModal = (selectedUserIndex, value) => ({
  type: SHOW_MODAL,
  selectedUserIndex,
  value
});

export const closeModal = () => ({ type: CLOSE_MODAL });
const initialState = {
  selectedUserIndex: 0,
  value: 0,
  memo: '',
  error: false,
  isInputting: false
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MEMO:
      return {
        ...state,
        memo: action.memo,
        error: false
      };
    case SHOW_ERROR:
      return { ...state, error: true };
    case SHOW_MODAL:
      return {
        ...state,
        selectedUserIndex: action.selectedUserIndex,
        value: action.value,
        isInputting: true
      };
    case CLOSE_MODAL:
      return { ...state, memo: '', isInputting: false };
    default:
      return state;
  }
};

export default form;
