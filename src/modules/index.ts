import { combineReducers } from 'redux';
import counter, {counterSaga} from './counter';
import user, {userSaga} from './user';
import auth, {authSaga} from './auth';
import {all} from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    user,
    auth,
});

export function* rootSaga() {
    yield all([counterSaga(), userSaga(), authSaga()]);
}

export type RootReducerType = ReturnType<typeof rootReducer>; // (1)

export default rootReducer;