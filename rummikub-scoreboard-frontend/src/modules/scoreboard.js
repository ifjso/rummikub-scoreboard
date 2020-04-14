import produce from 'immer';

const READ_USERS = 'scoreboard/READ_USERS';
const SHOW_MODAL = 'scoreboard/SHOW_MODAL';
const START_SAVING_SCORE = 'scoreboard/START_SAVING_SCORE';
const END_SAVING_SCORE = 'scoreboard/END_SAVING_SCORE';
const CLOSE_MODAL = 'scoreboard/CLOSE_MODAL';

export const readUsers = users => ({
  type: READ_USERS,
  users
});

export const calculate = (selectedIndex, value) => ({
  type: SHOW_MODAL,
  selectedIndex,
  value
});

export const saveStart = selectedIndex => ({
  type: START_SAVING_SCORE,
  selectedIndex
});

export const saveEnd = (selectedIndex, user) => ({
  type: END_SAVING_SCORE,
  selectedIndex,
  user
});

export const closeModal = () => ({ type: CLOSE_MODAL });

const initialState = {
  isLoading: true,
  form: { selectedIndex: 0, value: 0, isInputting: false },
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
    case SHOW_MODAL:
      return produce(state, baseState => {
        baseState.form.selectedIndex = action.selectedIndex;
        baseState.form.value = action.value;
        baseState.form.isInputting = true;
      });
    case START_SAVING_SCORE:
      return produce(state, baseState => {
        baseState.scores[action.selectedIndex].isLoading = true;
        baseState.form.isInputting = false;
      });
    case END_SAVING_SCORE:
      return produce(state, baseState => {
        baseState.scores[action.selectedIndex].user = action.user;
        baseState.scores[action.selectedIndex].isLoading = false;
      });
    case CLOSE_MODAL:
      return produce(state, baseState => {
        baseState.form.isInputting = false;
      });
    default:
      return state;
  }
};

export default scoreboard;
