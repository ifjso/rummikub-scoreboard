const LOAD = 'histories/LOAD';
const RESET = 'histories/RESET';

export const load = ({ currentPage, histories, hasNextPage }) => ({
  type: LOAD,
  currentPage,
  histories,
  hasNextPage
});

export const reset = () => ({ type: RESET });

const initialState = {
  currentPage: 0,
  histories: [],
  hasNextPage: true
};

const histories = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        currentPage: action.currentPage,
        histories: state.histories.concat(action.histories),
        hasNextPage: action.hasNextPage
      };
    case RESET:
      return {
        currentPage: 0,
        histories: [],
        hasNextPage: true
      };
    default:
      return state;
  }
};

export default histories;
