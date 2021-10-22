import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from '../reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  composeWithDevTools(middleware)
);

export { store };
