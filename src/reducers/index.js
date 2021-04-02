import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import commentsReducer from './commentsReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
