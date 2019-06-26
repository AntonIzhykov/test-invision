import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { getUsers, updateUser } from '../api/users';
import { GET_USERS_REQUEST, UPDATE_USERS_REQUEST } from './constants';
import { getUsersSuccess, getUsersError, updateUsersSuccess, updateUsersError } from './actions';

export function* watcherGetUsersSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsersWorker);
}

function* getUsersWorker() {
  try {
    const response = yield call(getUsers);
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersError(error.message));
  }
}

export function* watcherUpdateUserSaga() {
  yield takeEvery(UPDATE_USERS_REQUEST, updateUserWorker);
}

function* updateUserWorker(action) {
  try {
    const { user } = action;
    const response = yield call(updateUser, user);
    yield put(updateUsersSuccess(response.data));
  } catch (error) {
    yield put(updateUsersError(error.message));
  }
}
