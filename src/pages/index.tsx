/*
* 최상위 루트 페이지
*/
import React from 'react';
import Head from 'next/head';
import Home from './home';

type Props = {};


export default function HomePage(): React.ReactElement<Props> {
    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
            </Head>
            <Home/>
        </>
    );
}
