import React from 'react'
import App from 'next/app'
import '../assets/less/_app.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}