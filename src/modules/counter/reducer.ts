import {actionTypes, CountState, DECREASE, INCREASE} from "./actions";

export const initialState: CountState = {value: 0}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

function counter(state: CountState = initialState, action: actionTypes): CountState { // 리듀서
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
        case INCREASE:
            return {value: state.value + 1};
        case DECREASE:
            return {value: state.value - 1};
        default:
            return {value: state.value};
    }
};

export default counter;
