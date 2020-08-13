import React from 'react'
import App from 'next/app'
import '../assets/less/_app.less';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Component {...pageProps} />
        )
    }
}