export const COUNT_PLUS = 'COUNT_PLUS'; // count 1을 증가시킬 액션 타입이다.
export const COUNT_MINUS = 'COUNT_MINUS'; // count 1을 감소시킬 액션 타입이다.

interface countPlusAction {
    type: typeof COUNT_PLUS,
    payload: Number
}

export interface CountState {
    value: number;
}

interface countMinusAction {
    type: typeof COUNT_MINUS,
    payload: Number
}

export const initialState: CountState = {value: 0}; // 처음 state값으로 count 0을 주었다. state값은 객체, 배열로도 사용할 수 있다.

export type actionTypes =
    | ReturnType <typeof countPlusAction>
    | ReturnType <typeof countMinusAction>


export const countPlusAction = () => ({ // 액션 생성 함수
    type: COUNT_PLUS
});

export const countMinusAction = () => ({
    type: COUNT_MINUS
})

function count(state: CountState = initialState, action: actionTypes): CountState { // 리듀서
    console.log(state)
    switch (action.type) {  // 액션의 type이 COUNT_PLUS일땐 state에 + 1 COUNT_MINUS 일 땐 state에 -1
        case COUNT_PLUS:
            return {value: state.value + 1};
        case COUNT_MINUS:
            return {value: state.value - 1};
        default:
            return {value: state.value};
    }
};

export default count;