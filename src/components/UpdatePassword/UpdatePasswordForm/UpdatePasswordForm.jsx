import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const UpdatePasswordForm = () => (
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

    <Form.Item
      name="oldpassword"
      rules={[
        {
          required: true,
          message: "Please input your oldpassword!",
        },
      ]}
    >
      <Input.Password className="w-96" placeholder="Oldpassword(optional)" />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    </Form.Item>
  </Form>
);
export default UpdatePasswordForm;
