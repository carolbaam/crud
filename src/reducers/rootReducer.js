import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    notes:noteReducer,
    user:userReducer
});

export default rootReducer