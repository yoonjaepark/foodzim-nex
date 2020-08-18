import {ADD, REMOVE, UserSate, actions} from "./actions";
import produce from 'immer';
import {createReducer, ActionType} from 'typesafe-actions';

export const initialState: UserSate = {list: []}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

// function counter(state: UserSate = initialState, action: actionTypes): UserSate { // 리듀서
//     console.log(state)
//     switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
//         case ADD:
//             state = {list: state.list.concat(action.payload)}
//             return state;
//         case REMOVE:
//             return state
//         default:
//             return state
//     }
// };

// immer
export default createReducer<UserSate, ActionType<typeof actions>>(initialState, {
    [ADD]: produce((state, { payload }) => {
        state.list = [...state.list, payload]
    }),
    [REMOVE]: produce((state) => {
        console.log(state);
    })
});

// export default counter;
