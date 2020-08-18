import { combineReducers } from 'redux';
import counter, {counterSaga} from './counter';
import user, {userSaga} from './user';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    user
});

export function* rootSaga() {
    yield all([counterSaga(), userSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>; // (1)

export default rootReducer;