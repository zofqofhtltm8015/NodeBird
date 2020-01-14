import {combineReducers} from 'redux';
import user from './user';
import post from './post';


const rootReducers = combineReducers(
    {
        user,
        post,
    });

    export default rootReducers;