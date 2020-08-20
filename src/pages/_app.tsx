import React from 'react';
import {createWrapper} from 'next-redux-wrapper';

import createSagaMiddleware, {Task} from "@redux-saga/core";
import {applyMiddleware, compose, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/index";
import rootReducer, {rootSaga} from "../modules";
import AppLayout from "../components/AppLayout";
import '../assets/less/_app.less';
import {AppPropsType} from "next/dist/next-server/lib/utils";

const MyApp = ({Component, pageProps, router}: AppPropsType) => {
    console.log('pageProps', router)
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )
};


// 스토어의 모든 타입
export type RootState = ReturnType<typeof rootReducer>;
// Saga 스토어 타입
export type SagaStore = Store & {
    sagaTask?: Task;
};
// export store wrapper
export const wrapper = createWrapper<RootState>(
    (/*context: Context*/) => {
        const sagaMiddleware = createSagaMiddleware();
        const middlewares = [sagaMiddleware]; // 미들웨어 목록
        const enhancer = process.env.NODE_ENV === 'production'
            ? compose(applyMiddleware(...middlewares))
            : composeWithDevTools(applyMiddleware(...middlewares));
        const store: SagaStore = createStore(rootReducer, enhancer);

        store.sagaTask = sagaMiddleware.run(rootSaga);

        return store;
    },
    {debug: false}
);
export default wrapper.withRedux(MyApp);
