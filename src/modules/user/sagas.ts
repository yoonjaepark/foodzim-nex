import { put } from 'redux-saga/effects';
import {add, AddUserAction, remove} from './actions';

export function* addSaga(action: AddUserAction) {
    yield put(add(action.payload));
}

export function* removeSaga(action: AddUserAction) {
    yield put(remove(action.payload));
}