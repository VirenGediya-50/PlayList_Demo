import { combineReducers } from 'redux';
import songListReducer from './songListReducer';
import playListReducer from './playListReducer';

const rootReducer = combineReducers({
    songListReducer,
    playListReducer
})

export default rootReducer