const LOAD = 'histories/LOAD';

export const load = ({ histories, hasNextPage }) => ({
  type: LOAD,
  histories,
  hasNextPage
});

const initialState = {
  histories: [],
  hasNextPage: true,
  isLoading: true
};

const histories = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        histories: state.histories.concat(action.histories),
        hasNextPage: action.hasNextPage,
        isLoading: false
      };
    default:
      return state;
  }
};

export default histories;
