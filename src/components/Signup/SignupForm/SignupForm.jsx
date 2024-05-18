import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SignupForm = () => (
  <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input placeholder="Username" className="w-96" />
    </Form.Item>

    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your email!",
        },
      ]}
    >
      <Input placeholder="Email" className="w-96" />
    </Form.Item>

    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password className="w-96" placeholder="Password" />
    </Form.Item>

    <div className="text-start ps-16 mt-1 mb-5">
      <p>
        Already have an acoount?{" "}
        <span className="text-blue-500 font-semibold">
          <Link to="/">Login</Link>
        </span>
      </p>
    </div>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Signup
      </Button>
    </Form.Item>
  </Form>
);
export default SignupForm;
