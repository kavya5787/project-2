import React from "react";
import { Form, Input, Button, Row, Col } from "antd";

const LoginFom = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={20} sm={16} md={12} lg={8}>
          <Form
            name="loginForm"
            onFinish={onFinish}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginFom;
