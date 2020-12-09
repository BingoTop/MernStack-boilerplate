import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import NavBar from './components/views/NavBar/NavBar';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const ContentWrapper = styled(Content)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

function App() {
    return (
        <Router>
            <Layout>
                <Header>Header</Header>
                <ContentWrapper
                    style={{ minHeight: '80vh' }}
                >
                    <Route
                        exact
                        path="/"
                        component={Auth(
                            LandingPage,
                            null
                        )}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        component={Auth(
                            LoginPage,
                            false
                        )}
                    ></Route>
                    <Route
                        exact
                        path="/register"
                        component={Auth(
                            RegisterPage,
                            false
                        )}
                    ></Route>
                </ContentWrapper>
            </Layout>
        </Router>
    );
}

export default App;
