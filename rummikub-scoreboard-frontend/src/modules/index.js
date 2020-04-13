import { combineReducers } from 'redux';
import histories from './histories';
import scoreboard from './scoreboard';

const rootReducer = combineReducers({ histories, scoreboard });

export default rootReducer;
