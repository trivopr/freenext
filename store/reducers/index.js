import { combineReducers } from 'redux';
import { postReducers } from './postReducers';

const reducer = combineReducers({
  posts: postReducers,
});

export default reducer;
