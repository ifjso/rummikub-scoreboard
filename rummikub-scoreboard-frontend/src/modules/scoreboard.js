import produce from 'immer';

const READ_USERS = 'scoreboard/READ_USERS';
const CALCULATE = 'scoreboard/CALCULATE';
const SAVE_START = 'scoreboard/SAVE_START';
const SAVE_END = 'scoreboard/SAVE_END';
const CLOSE_MODAL = 'scoreboard/CLOSE_MODAL';

export const readUsers = users => ({
  type: READ_USERS,
  users
});

export const calculate = (selectedIndex, value) => ({
  type: CALCULATE,
  selectedIndex,
  value
});

export const saveStart = selectedIndex => ({ type: SAVE_START, selectedIndex });

export const saveEnd = (selectedIndex, user) => ({
  type: SAVE_END,
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
    case CALCULATE:
      return produce(state, baseState => {
        baseState.form.selectedIndex = action.selectedIndex;
        baseState.form.value = action.value;
        baseState.form.isInputting = true;
      });
    case SAVE_START:
      return produce(state, baseState => {
        baseState.scores[action.selectedIndex].isLoading = true;
        baseState.form.isInputting = false;
      });
    case SAVE_END:
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
