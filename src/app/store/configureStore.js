import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

export default function configureStore() {
  const middlewares = [thunk];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    DevTools.instrument()
  );

  const store = createStore(
    rootReducer,
    enhancer
  );

  return store;
}
