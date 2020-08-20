import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {actions, ADD_ASYNC, AddAuthAction, REMOVE_ASYNC} from './actions';

const {add, remove} = actions;

export function* addSaga(action: AddAuthAction) {
    yield delay(1000);
    yield put(add(action.payload));
}

export function* removeSaga(action: AddAuthAction) {
    yield put(remove(action.payload));
}

export function* addAsyncSaga(action: AddAuthAction) {
    yield delay(1000);
    yield put(add(action.payload));
}

export function* removeAsyncSaga(action: AddAuthAction) {
    yield delay(1000);
    yield put(remove(action.payload));
}

export function* authSaga() {
    yield takeEvery(ADD_ASYNC, addAsyncSaga);
    yield takeLatest(REMOVE_ASYNC, removeSaga);
}