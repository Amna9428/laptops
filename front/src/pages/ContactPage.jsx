import React from "react";
import { Form, Input, Button, Card } from "antd";
import { MailOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <Navbar/>
<div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card title="Contact Us" className="w-full max-w-lg shadow-lg rounded-lg">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Your Name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Your Email" />
          </Form.Item>

          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please enter a subject!" }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message!" }]}
          >
            <Input.TextArea prefix={<MessageOutlined />} placeholder="Your Message" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
    </div>
    
  );
};

export default ContactPage;
