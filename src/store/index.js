import { applyMiddleware, compose, createStore } from 'redux';
import { users } from './users';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore () {
  const store = createStore(
    users,
    compose(
      applyMiddleware(
        sagaMiddleware
      ),
      reduxDevTools
    ));
  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
