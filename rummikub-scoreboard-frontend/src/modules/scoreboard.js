import produce from 'immer';

const READ_USERS = 'scoreboard/READ_USERS';
const CALCULATE = 'scoreboard/CALCULATE';
const SAVE_START = 'scoreboard/SAVE_START';
const SAVE_END = 'scoreboard/SAVE_END';

export const readUsers = users => ({
  type: READ_USERS,
  users
});

export const calculate = (selectedIndex, value) => ({
  type: CALCULATE,
  selectedIndex,
  value
});

export const saveStart = () => ({ type: SAVE_START });

export const saveEnd = user => ({ type: SAVE_END, user });

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
      return produce(baseState => {
        baseState.isLoading = false;
        baseState.scores[0].user = { ...action.users[0] };
        baseState.scores[1].user = { ...action.uesrs[1] };
      });
    case CALCULATE:
      return produce(baseState => {
        baseState.form.selectedIndex = action.selectedIndex;
        baseState.form.value = action.value;
        baseState.form.isInputting = true;
      });
    case SAVE_START:
      return produce(baseState => {
        baseState.scores[action.selectedIndex].isLoading = true;
        baseState.form.isInputting = false;
      });
    case SAVE_END:
      return produce(baseState => {
        baseState.scores[action.selectedIndex].user = action.user;
        baseState.scores[action.selectedIndex].isLoading = false;
      });
    default:
      return state;
  }
};

export default scoreboard;
