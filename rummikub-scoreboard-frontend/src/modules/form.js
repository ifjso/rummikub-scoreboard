const CHANGE_MEMO = 'form/CHANGE_MEMO';
const SHOW_ERROR = 'form/SHOW_ERROR';
const CLOSE_MODAL = 'form/CLOSE_MODAL';

export const changeMemo = memo => ({ type: CHANGE_MEMO, memo });

export const showError = () => ({ type: SHOW_ERROR });

export const closeModal = () => ({ type: CLOSE_MODAL });

const initialState = {
  selectedIndex: 0,
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
    case CLOSE_MODAL:
      return { ...state, isInputting: false };
    default:
      return state;
  }
};

export default form;
