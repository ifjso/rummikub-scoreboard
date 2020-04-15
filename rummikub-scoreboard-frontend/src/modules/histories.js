import { createAction, handleActions } from 'redux-actions';

const LOAD = 'histories/LOAD';
const RESET = 'histories/RESET';

export const load = createAction(
  LOAD,
  ({ currentPage, histories, hasNextPage }) => ({
    currentPage,
    histories,
    hasNextPage
  })
);

export const reset = createAction(RESET);

const initialState = {
  currentPage: 0,
  histories: [],
  hasNextPage: true
};

const histories = handleActions(
  {
    [LOAD]: (
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
