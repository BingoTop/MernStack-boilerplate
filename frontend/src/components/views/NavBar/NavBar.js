import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { Menu } from 'antd';
import { Layout } from 'antd';

const { Header } = Layout;

function NavBar() {
    return (
        <Header>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>메인</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default NavBar;
