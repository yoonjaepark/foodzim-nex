import produce from 'immer';
import {createReducer, ActionType} from 'typesafe-actions';
import {actions, ADD, AuthSate, REMOVE} from "./actions";

export const initialState: AuthSate = {
    auth: {
        accessToken: '',
        signInMethod: '',
        email: '',
        name: '',
        id: '',
        locale: ''
    }
};

// immer
export default createReducer<AuthSate, ActionType<typeof actions>>(initialState, {
    [ADD]: produce((state, {payload}) => {
        console.log('createReducer', payload)
        state.auth = payload
    }),
    [REMOVE]: produce((state) => {
        console.log(state);
    })
});

// export default counter;
