import React, { ReactNode } from 'react'
import { Layout as AntLayout } from 'antd';

const { Header, Footer, Content } = AntLayout;

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <AntLayout>
        <Header>{ title }</Header>
        <Content>{ children }</Content>
        <Footer>Footer</Footer>
    </AntLayout>
)

export default Layout
