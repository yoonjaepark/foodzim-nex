import { combineReducers } from 'redux';
import counter, { increaseSaga, decreaseSaga } from './counter';
import user, { addSaga, removeSaga } from './user';
import {all, fork} from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    user
});

export function* rootSaga() {
    yield all([fork(increaseSaga), fork(decreaseSaga)]);
}

export type RootReducerType = ReturnType<typeof rootReducer>; // (1)

export default rootReducer;