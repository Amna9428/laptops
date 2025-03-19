import React from "react";
import { Layout, Row, Col, Typography, Space, Input } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ background: "#001529", color: "white", padding: "40px 50px" }}>
      <Row gutter={[32, 32]}> 
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "white" }}>LapStore</Title>
          <Text style={{ color: "#ccc" }}>
            Your go-to online store for the latest products and exclusive deals.
          </Text>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "white" }}>Quick Links</Title>
          <Space direction="vertical">
            <Text style={{ color: "#ccc" }}>About Us</Text>
            <Text style={{ color: "#ccc" }}>Contact</Text>
            <Text style={{ color: "#ccc" }}>Privacy Policy</Text>
            <Text style={{ color: "#ccc" }}>Terms of Service</Text>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "white" }}>Customer Service</Title>
          <Space direction="vertical">
            <Text style={{ color: "#ccc" }}>FAQ</Text>
            <Text style={{ color: "#ccc" }}>Shipping & Returns</Text>
            <Text style={{ color: "#ccc" }}>Order Tracking</Text>
            <Text style={{ color: "#ccc" }}>Support</Text>
          </Space>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: "white" }}>Newsletter</Title>
          <Text style={{ color: "#ccc" }}>
            Subscribe to our newsletter for the latest updates.
          </Text>
          <Input placeholder="Enter your email" style={{ marginTop: "10px" }} />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "30px" }}>
        <Space size="large">
          <FacebookOutlined style={{ fontSize: "20px", color: "#ccc" }} />
          <TwitterOutlined style={{ fontSize: "20px", color: "#ccc" }} />
          <InstagramOutlined style={{ fontSize: "20px", color: "#ccc" }} />
          <YoutubeOutlined style={{ fontSize: "20px", color: "#ccc" }} />
        </Space>
      </Row>

      <Row justify="center" style={{ marginTop: "20px" }}>
        <Text style={{ color: "#ccc" }}>© {new Date().getFullYear()} LapStore. All Rights Reserved.</Text>
      </Row>
    </Footer>
  );
};

export default AppFooter;
