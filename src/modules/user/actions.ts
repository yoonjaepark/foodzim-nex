// src/modules/counter/actions.ts
import {User} from "../../../interfaces";

export interface UserSate {
    list: User[];
}

export interface UserSate {
    list: User[];
}

export type actionTypes =
    | ReturnType<typeof add>
    | ReturnType<typeof remove>

// 액션
export const ADD = 'user/ADD' as const;
export const REMOVE = 'user/REMOVE' as const;

export interface AddUserAction {
    type: typeof ADD;
    payload: User;
}

export interface RemoveUserAction {
    type: typeof REMOVE;
    payload: User;
}


// 액션 생성함수
export const add = (user: User): AddUserAction => {
    console.log(user)
    return ({ // 액션 생성 함수
        type: ADD,
        payload: user
    })
};

export const remove = (user: User): RemoveUserAction => ({
    type: REMOVE,
    payload: user
})