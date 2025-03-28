import React from "react";
import { Form, Input, Button } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Received values: ", values);
  };

  return (
    <div>
      <Navbar/>
 <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>
          
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Your Email" />
          </Form.Item>
          
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="Your Message" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
   <Footer/>
    </div>
  );
};

export default ContactPage;