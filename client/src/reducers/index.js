import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth'

export default combineReducers({
    posts, auth                        //when key & value are same keep one name only.
})