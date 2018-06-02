import { createStore, compose, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
  ),
);

export function bindActionsToStore(actions) {
  return bindActionCreators(actions, store.dispatch);
}
