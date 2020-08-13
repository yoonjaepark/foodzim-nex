/*
 * 최상위 루트 페이지
 */
import React from 'react';
import Head from 'next/head';
import { Layout } from 'antd';
import Home from './home';

type Props = {};


export default function HomePage (): React.ReactElement<Props> {
    return (
        <>
            <Head>
                <meta property="og:type" content="website"/>
            </Head>

            <Layout className="layout home-page">
                <Layout.Header>
                    header
                </Layout.Header>
                <Layout.Content>
                    dsad
                    <article>
                        <Home/>
                    </article>
                </Layout.Content>
                <Layout.Footer>
                    footer
                </Layout.Footer>
            </Layout>
        </>
    );
}
