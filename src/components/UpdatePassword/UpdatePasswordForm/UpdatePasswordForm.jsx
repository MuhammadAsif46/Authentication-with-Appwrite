import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../../appwrite/appwriteConfig";

const UpdatePasswordForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);

    const { password } = values;

    try {
      const result = await account.updatePassword(
        password, // password
        "password" // oldPassword (optional)
      );
      console.log(result.password);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
        // rules={[
        //   {
        //     required: true,
        //     message: "Please input your oldpassword!",
        //   },
        // ]}
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
};
export default UpdatePasswordForm;
