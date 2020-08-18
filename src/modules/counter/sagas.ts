import { put } from 'redux-saga/effects';
import { increase, decrease } from './actions';

export function* increaseSaga() {
    yield put(increase());
}

export function* decreaseSaga() {
    yield put(decrease());
}