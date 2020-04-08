const LOAD = 'histories/LOAD';

export const load = ({ currentPage, histories, hasNextPage }) => ({
  type: LOAD,
  currentPage,
  histories,
  hasNextPage
});

const initialState = {
  currentPage: 0,
  histories: [],
  hasNextPage: true
};

const histories = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        currentPage: action.currentPage,
        histories: state.histories.concat(action.histories),
        hasNextPage: action.hasNextPage
      };
    default:
      return state;
  }
};

export default histories;
