import {User} from "../../interfaces";

export const USER_ADD = 'USER_ADD'; // count 1을 증가시킬 액션 타입이다.
export const USER_DELETE = 'USER_DELETE'; // count 1을 감소시킬 액션 타입이다.

interface userAddAction {
    type: typeof USER_ADD,
    payload: User
}

export interface UserSate {
    list: User[];
}

interface userDeleteAction {
    type: typeof USER_DELETE,
    payload: User
}

export const initialState: UserSate = {list: []}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export type actionTypes =
    | ReturnType<typeof userAddAction>
    | ReturnType<typeof userDeleteAction>


export const userAddAction = (user: User) => {
    console.log(user)
    return ({ // 액션 생성 함수
        type: USER_ADD,
        payload: user
    })
};

export const userDeleteAction = (user: User) => ({
    type: USER_DELETE,
    payload: user
})

function users(state: UserSate = initialState, action: actionTypes): UserSate { // 리듀서
    console.log('users', action)
    switch (action.type) {
        case USER_ADD:
            state = {list: state.list.concat(action.payload)}
            return state
        case USER_DELETE:
            return state
        // return {value: state.value - 1};
        default:
            return state
        // return {value: state.value};
    }
};

export default users;