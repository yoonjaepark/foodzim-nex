import React, {ReactNode} from 'react'
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, NotificationOutlined} from '@ant-design/icons';
import Link from 'next/link';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
type Props = {
    children?: ReactNode
    title?: string
}

const AppLayout = ({children, title = 'This is the default title'}: Props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" style={{color: 'white'}}>
                    <Link href="/">{title}</Link>
                </div>
                {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                {/*    <Menu.Item key="1">nav 1</Menu.Item>*/}
                {/*    <Menu.Item key="2">nav 2</Menu.Item>*/}
                {/*    <Menu.Item key="3">nav 3</Menu.Item>*/}
                {/*</Menu>*/}
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined/>} title="상품">
                            <Menu.Item key="1">상품 리스트</Menu.Item>
                            <Menu.Item key="2">상품 등록</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined/>} title="사용자">
                            <Menu.Item key="5">
                                <Link href="/users/list">
                                    <span className="nav-text">사용자 리스트</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link href="/users/add">
                                    <span className="nav-text">사용자 추가</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Todo">
                            <Menu.Item key="9">
                                <Link href="/todo/list">
                                    <span className="nav-text">리스트</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default AppLayout
