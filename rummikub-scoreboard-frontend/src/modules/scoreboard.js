import produce from 'immer';

const READ_USERS = 'scoreboard/READ_USERS';
const START_SAVING_SCORE = 'scoreboard/START_SAVING_SCORE';
const END_SAVING_SCORE = 'scoreboard/END_SAVING_SCORE';

export const readUsers = users => ({
  type: READ_USERS,
  users
});

export const startSavingScore = selectedIndex => ({
  type: START_SAVING_SCORE,
  selectedIndex
});

export const endSavingScore = (selectedIndex, user) => ({
  type: END_SAVING_SCORE,
  selectedIndex,
  user
});

const initialState = {
  isLoading: true,
  scores: [
    { user: null, isLoading: false },
    { user: null, isLoading: false }
  ]
};

const scoreboard = (state = initialState, action) => {
  switch (action.type) {
    case READ_USERS:
      return produce(state, baseState => {
        baseState.isLoading = false;
        [baseState.scores[0].user, baseState.scores[1].user] = action.users;
      });
    case START_SAVING_SCORE:
      return produce(state, baseState => {
        baseState.scores[action.selectedIndex].isLoading = true;
      });
    case END_SAVING_SCORE:
      return produce(state, baseState => {
        baseState.scores[action.selectedIndex].user = action.user;
        baseState.scores[action.selectedIndex].isLoading = false;
      });
    default:
      return state;
  }
};

export default scoreboard;
