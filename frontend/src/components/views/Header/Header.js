import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AndroidFilled } from '@ant-design/icons/AndroidFilled';

function Header() {
    const user = useSelector(
        (state) => state.user
    );

    if (user.userData && !user.userData.isAuth) {
        return (
            <>
                {/* <AndroidFilled twoToneColor="#eb2f96" /> */}

                <Menu
                    theme="Compact"
                    mode="horizontal"
                    style={{
                        color: 'black',
                        fontWeight: 1000,
                        backgroundColor: 'white',
                    }}
                >
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item key="mail">
                        <a href="/login">
                            Signin
                        </a>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <a href="/register">
                            Signup
                        </a>
                    </Menu.Item>
                </Menu>
            </>
        );
    } else {
        return (
            <div className="header">
                <Menu
                    theme="Compact"
                    mode="horizontal"
                    style={{
                        color: 'black',
                        fontWeight: 1000,
                        backgroundColor: 'white',
                    }}
                >
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;
