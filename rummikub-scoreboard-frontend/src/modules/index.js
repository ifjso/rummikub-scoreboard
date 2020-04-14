import { combineReducers } from 'redux';
import histories from './histories';
import scoreboard from './scoreboard';
import form from './form';

const rootReducer = combineReducers({ histories, scoreboard, form });

export default rootReducer;
