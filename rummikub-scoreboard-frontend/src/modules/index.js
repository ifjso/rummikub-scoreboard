import { combineReducers } from 'redux';
import histories from './histories';
import scoreboard from './scoreboard';
import memoModal from './memoModal';

const rootReducer = combineReducers({ histories, scoreboard, memoModal });

export default rootReducer;
