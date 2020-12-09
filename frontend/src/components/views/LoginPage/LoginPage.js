import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Checkbox,
} from 'antd';
import { Card } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled(Card)`
    min-width: 500px;
    min-height: 500px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function LoginPage(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };
    const onSubmit = (e) => {
        let body = {
            email: email,
            password: password,
        };
        dispatch(loginUser(body)).then((res) => {
            if (res.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert('Error');
            }
        });
    };
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    return (
        <FormWrapper>
            <Form
                {...layout}
                name="basic"
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your email!',
                        },
                    ]}
                >
                    <Input
                        value={email}
                        onChange={onEmailHandler}
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message:
                                'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password
                        value={password}
                        onChange={
                            onPasswordHandler
                        }
                    />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        로그인
                    </Button>
                </Form.Item>
            </Form>
        </FormWrapper>
    );
}

export default withRouter(LoginPage);
