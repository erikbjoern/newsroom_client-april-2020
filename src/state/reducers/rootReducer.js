import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
<<<<<<< HEAD

const rootReducer = combineReducers({
  articles: articleReducer
})

export default rootReducer;
=======
import messageReducer from './messageReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  articles: articleReducer,
  messages: messageReducer,
  location: locationReducer
})

export default rootReducer;
>>>>>>> 3bd2235b9f08b02008d9f94652dc1e2f8863af4c
