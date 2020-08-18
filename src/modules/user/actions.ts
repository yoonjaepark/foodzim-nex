// src/modules/counter/actions.ts
import {User} from "../../../interfaces";
import {action, createAction} from "typesafe-actions";

export interface UserSate {
    list: User[];
}

// export type actionTypes =
//     | ReturnType<typeof add>
//     | ReturnType<typeof remove>
//     | ReturnType<typeof addAsync>
//     | ReturnType<typeof removeAsync>;

export const add = (user: User) => action(ADD, user);
export const remove = (user: User) => action(REMOVE, user);
export const addAsync = (user: User) => action(ADD_ASYNC, user);
export const removeAsync = (user: User) => action(REMOVE_ASYNC, user);

export const actions = { add, remove, addAsync, removeAsync };

// 액션
export const ADD = 'user/ADD' as const;
export const REMOVE = 'user/REMOVE' as const;
export const ADD_ASYNC = 'user/ADD_ASYNC' as const;
export const REMOVE_ASYNC = 'user/REMOVE_ASYNC' as const;

export const ADD_ACTION = createAction(ADD)

export interface AddUserAction {
    type: typeof ADD;
    payload: User;
}

export interface RemoveUserAction {
    type: typeof REMOVE;
    payload: User;
}

export interface AddAsyncUserAction {
    type: typeof ADD_ASYNC;
    payload: User;
}

export interface RemoveAsyncUserAction {
    type: typeof REMOVE_ASYNC;
    payload: User;
}


// 액션 생성함수
// export const add = (user: User): AddUserAction => {
//     return ({ // 액션 생성 함수
//         type: ADD,
//         payload: user
//     })
// };
//
// export const remove = (user: User): RemoveUserAction => ({
//     type: REMOVE,
//     payload: user
// })
//
// export const addAsync = (user: User): AddAsyncUserAction => ({
//     type: ADD_ASYNC,
//     payload: user
// })
// export const removeAsync = (user: User): RemoveAsyncUserAction => ({
//     type: REMOVE_ASYNC,
//     payload: user
// })
