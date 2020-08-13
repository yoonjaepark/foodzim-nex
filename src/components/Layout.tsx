import React, { ReactNode } from 'react'
import { Layout as AntLayout } from 'antd';

const { Header, Footer, Sider, Content } = AntLayout;

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <AntLayout>
        <Header>asdasd</Header>
        <Content>{ children }</Content>
        <Footer>Footer</Footer>
    </AntLayout>
)

export default Layout
