// src/modules/counter/actions.ts
export interface CountState {
    value: number;
}

export type actionTypes =
    | ReturnType <typeof increase>
    | ReturnType <typeof decrease>

// 액션
export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
