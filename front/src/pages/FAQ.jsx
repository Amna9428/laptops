import React from "react";
import { Collapse } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const { Panel } = Collapse;

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 flex-grow">
        <h2 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Collapse accordion>
          <Panel header="1. What brands of laptops do you offer?" key="1">
            <p className="text-gray-700">We offer a variety of brands including Apple, Dell, HP, Lenovo, ASUS, Acer, and more.</p>
          </Panel>
          <Panel header="2. Do you provide warranty on laptops?" key="2">
            <p className="text-gray-700">Yes, all our laptops come with a manufacturer warranty. Warranty duration depends on the brand and model.</p>
          </Panel>
          <Panel header="3. What is your return policy?" key="3">
            <p className="text-gray-700">We offer a 14-day return policy for unused and unopened laptops. Please refer to our return policy page for more details.</p>
          </Panel>
          <Panel header="4. Do you offer international shipping?" key="4">
            <p className="text-gray-700">Currently, we only ship within [Country Name]. We are working on expanding our shipping services.</p>
          </Panel>
          <Panel header="5. Can I customize my laptop before purchase?" key="5">
            <p className="text-gray-700">Yes, we offer customization options for select brands. You can upgrade RAM, storage, and other specifications before placing your order.</p>
          </Panel>
        </Collapse>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;