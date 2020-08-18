import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {actions, ADD_ASYNC, AddUserAction, REMOVE_ASYNC} from './actions';

const {add, remove} = actions;

export function* addSaga(action: AddUserAction) {
    yield delay(1000);
    yield put(add(action.payload));
}

export function* removeSaga(action: AddUserAction) {
    yield put(remove(action.payload));
}

export function* addAsyncSaga(action: AddUserAction) {
    yield delay(1000);
    yield put(add(action.payload));
}

export function* removeAsyncSaga(action: AddUserAction) {
    yield delay(1000);
    yield put(remove(action.payload));
}

export function* userSaga() {
    yield takeEvery(ADD_ASYNC, addAsyncSaga);
    yield takeLatest(REMOVE_ASYNC, removeSaga);
}