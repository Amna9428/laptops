import React, { useState } from "react";
import { Form, Input, InputNumber, Upload, Button, Select, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

const RAM_OPTIONS = [ "4GB", "8GB", "16GB", "32GB", "64GB"];
const STORAGE_OPTIONS = ["128GB", "256GB", "512GB", "1TB"];
const SCREEN_SIZE_OPTIONS = ["10 inches", "11.5 inches", "13.5 inches", "14.5 inches", "15 inches"];
const CATEGORY_OPTIONS = ['Gaming', 'Business', 'Student', 'Professional', 'Ultra-Portable'];

const CreateProductForm = () => {
    const [form] = Form.useForm();
    const [description, setDescription] = useState("");
    const [fileList, setFileList] = useState([]);
    const [images, setImages] = useState([]);


    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append('folder', '/uploads');
        formData.append('fileName', file.name);

        try {
            const response = await axios.post("https://upload.imagekit.io/api/v1/files/upload", formData, {
                auth: {
                    username: 'private_OhIqytMZyiIRT86L0fb0ktHgYco=', // Replace with your private API key
                },
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response.data);

            if (response.data && response.data.url) {

                setImages(prev => [...prev, { [file.uid]: response.data.url }]);


                message.success({
                    content: `${file.name} uploaded successfully`,
                    duration: 2,
                    style: { position: "fixed", top: 20, right: 20 }, // Top-right
                });
                return response.data.url;
            }
        } catch (error) {
            message.error({
                content: `Upload failed: ${error.message}`,
                duration: 2,
                style: { position: "fixed", bottom: 20, right: 20 }, // Bottom-right
            });
        }
    };

    const handleUpload = async ({ file, onSuccess, onError }) => {
        try {
            await uploadImage(file);
            onSuccess("ok");
        } catch (err) {
            onError("Upload failed");
        }
    };

    const handleChange = ({ fileList, file }) => {
        // console.log(fileList)
        console.log(file)
        if (fileList.length > 4) {
            message.warning({
                content: "You can only upload up to 4 images.",
                duration: 2,
                style: { position: "fixed", top: 20, right: 20 }, // Top-right
            });
            return;
        }
        // Remove image from images state if file is removed
        if (file.status === 'removed') {
            setImages(prev => prev.filter(img => !img[file.uid]));
        }
        setFileList(fileList);
    };

    const beforeUpload = (file) => {
        if (fileList.length >= 4) {
            message.warning({
                content: "You can only upload up to 4 images.",
                duration: 2,
                style: { position: "fixed", top: 20, right: 20 }, // Top-right
            });
            return Upload.LIST_IGNORE;
        }
        return true;
    };


    const onFinish = async (values) => {
        try {

            // convert images to images url object
            const imageUrls = [];
            for (let obj of images) {
                // Get the first (and only) value from the object
                const url = Object.values(obj)[0];
                imageUrls.push(url);
            }

            // console.log(imageUrls);

            // return;

            const productData = {
                ...values,
                description,
                images: imageUrls
            };

            // console.log(productData);
            // return;

            const response = await axios.post('http://localhost:5000/api/product/create', productData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            message.success('Product created successfully!');
            //form.resetFields();
            setDescription("");
        } catch (error) {
            message.error(error.response?.data?.message || 'Failed to create product');
            console.error('Error creating product:', error);
        }
    };


    return (
        <div className="bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-3xl font-bold mb-4">Create Product</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
          Product Creation Form – Please provide accurate information for your new product.
          </p>

            <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{}}>
                <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter the product name" }]}>
                    <Input size="large" placeholder="Enter product name" />
                </Form.Item>
                

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: "Please enter the price" }]}
                        style={{ flex: 1 }}
                    >
                        <InputNumber size="large" placeholder="Enter price" style={{ width: "100%" }} />
                    </Form.Item>
                    

                    <Form.Item
                        name="discounted_price"
                        label="Discounted Price"
                        dependencies={['price']}
                        style={{ flex: 1 }}
                        rules={[{
                            validator: async (_, value) => {
                                const price = form.getFieldValue('price');
                                if (value && price && value >= price) {
                                    throw new Error('Discounted price must be less than regular price');
                                }
                            },
                        }]}>
                        <InputNumber size="large" placeholder="Enter discounted price" style={{ width: "100%" }} />
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item
                        name="ram"
                        label="RAM"
                        rules={[{ required: true, message: "Please select RAM" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select RAM">
                            {RAM_OPTIONS.map((ram) => (
                                <Option key={ram} value={ram}>{ram}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="storage"
                        label="Storage"
                        rules={[{ required: true, message: "Please select storage capacity" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Storage">
                            {STORAGE_OPTIONS.map((storage) => (
                                <Option key={storage} value={storage}>{storage}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item
                        name="screensize"
                        label="Screen Size"
                        rules={[{ required: true, message: "Please select screen size" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Screen Size">
                            {SCREEN_SIZE_OPTIONS.map((size) => (
                                <Option key={size} value={size}>{size}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="Category"
                        label="Category"
                        rules={[{ required: true, message: "Please select screen size" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select Category">
                            {CATEGORY_OPTIONS.map((size) => (
                                <Option key={size} value={size}>{size}</Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                    <Form.Item
                        name="brand"
                        label="Brand"
                        rules={[{ required: true, message: "Please select a brand" }]}
                        style={{ flex: 1 }}
                    >
                        <Select size="large" placeholder="Select brand">
                            <Option value="Apple">Apple</Option>
                            <Option value="Dell">Dell</Option>
                            <Option value="HP">HP</Option>
                            <Option value="Lenovo">Lenovo</Option>
                            <Option value="Acer">Acer</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="model"
                        label="Model"
                        rules={[{ required: true, message: "Please enter model" }]}
                        style={{ flex: 1 }}
                    >
                        <Input size="large" placeholder="Enter model" />
                    </Form.Item>
                </div>

                <Form.Item name="images" label="Upload Images">
                    <Upload
                        multiple
                        customRequest={handleUpload}
                        listType="picture"
                        fileList={fileList}
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {fileList.length < 4 && (
                            <Button icon={<PlusOutlined />}>Upload Images (Max 4)</Button>
                        )}
                    </Upload>
                </Form.Item>


                <Form.Item label="Description" name="description" rules={[{ required: true, message: "Please enter product description" }]}>
                    <ReactQuill
                        value={description}
                        onChange={setDescription}
                        style={{ height: '300px', marginBottom: '50px' }}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </div>
    );
};

export default CreateProductForm;