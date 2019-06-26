import { all } from 'redux-saga/effects';
import { watcherGetUsersSaga, watcherUpdateUserSaga } from './users/sagas';

export default function* rootSaga() {
  yield all([
    watcherGetUsersSaga(),
    watcherUpdateUserSaga(),
  ]);
}
