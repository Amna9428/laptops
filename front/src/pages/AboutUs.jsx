import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { LaptopOutlined, SafetyOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <div style={{ padding: "50px", background: "#f5f5f5" }}>
      <Row justify="center">
        <Col span={16} style={{ textAlign: "center" }}>
          <Title level={2}>About Us</Title>
          <Paragraph>
            Welcome to Laptop Store, your number one source for high-quality laptops. 
            We are dedicated to providing you with the best selection of laptops,
            focusing on reliability, customer service, and uniqueness.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center" style={{ marginTop: "40px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ textAlign: "center" }}>
            <LaptopOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
            <Title level={3}>Wide Selection</Title>
            <Paragraph>
              We offer a vast range of laptops, from budget-friendly options to high-end gaming machines.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ textAlign: "center" }}>
            <SafetyOutlined style={{ fontSize: "40px", color: "#52c41a" }} />
            <Title level={3}>Trusted Quality</Title>
            <Paragraph>
              Our laptops are sourced from the most reliable manufacturers to ensure top-notch quality and performance.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ textAlign: "center" }}>
            <CustomerServiceOutlined style={{ fontSize: "40px", color: "#faad14" }} />
            <Title level={3}>Customer Support</Title>
            <Paragraph>
              Our dedicated support team is here to help you with any inquiries or issues you may have.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
    <Footer />
    </div>
    
  );
};

export default AboutUs;
