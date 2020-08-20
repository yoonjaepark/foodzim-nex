import {Auth} from "../../../interfaces";
import {action, createAction} from "typesafe-actions";

export interface AuthSate {
    auth : {
        accessToken: string
        signInMethod: string
        email: string
        name: string
        id: string
        locale: string
    }
}


// export type actionTypes =
//     | ReturnType<typeof add>
//     | ReturnType<typeof remove>
//     | ReturnType<typeof addAsync>
//     | ReturnType<typeof removeAsync>;

export const add = (auth: Object | null | undefined) => action(ADD, auth);
export const remove = (auth: Object | null | undefined) => action(REMOVE, auth);
export const addAsync = (auth: Object | null | undefined) => action(ADD_ASYNC, auth);
export const removeAsync = (auth: Object | null | undefined) => action(REMOVE_ASYNC, auth);

export const actions = { add, remove, addAsync, removeAsync };

// 액션
export const ADD = 'auth/ADD' as const;
export const REMOVE = 'auth/REMOVE' as const;
export const ADD_ASYNC = 'auth/ADD_ASYNC' as const;
export const REMOVE_ASYNC = 'auth/REMOVE_ASYNC' as const;

export const ADD_ACTION = createAction(ADD)

export interface AddAuthAction {
    type: typeof ADD;
    payload: Auth;
}

export interface RemoveAuthAction {
    type: typeof REMOVE;
    payload: Auth;
}

export interface AddAsyncAuthAction {
    type: typeof ADD_ASYNC;
    payload: Auth;
}

export interface RemoveAsyncAuthAction {
    type: typeof REMOVE_ASYNC;
    payload: Auth;
}
