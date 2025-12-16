import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";

const GetInTouchSection = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);

    // Here you would normally send data to your backend / CRM
    setTimeout(() => {
      message.success(
        "Thank you! Our team will call you back shortly to discuss your concerns."
      );
      form.resetFields();
      setSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#001b3d] via-[#002952] to-[#001b3d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Get in touch
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Share your details and our clinic team will call you back to guide
            you on the right treatments for your concerns.
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Quick call-back from our care team</li>
            <li>Help choosing the right category and treatments</li>
            <li>No obligation – just honest guidance</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h3 className="text-xl font-semibold text-[#001b3d] mb-4">
            Request a call back
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Fill in your basic details and select the category you are
            interested in.
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input placeholder="+91 XXXXX XXXXX" size="large" />
            </Form.Item>

            <Form.Item
              name="category"
              label="Service category you're interested in"
              rules={[
                { required: true, message: "Please select a service category" },
              ]}
            >
              <Select
                placeholder="Select a category"
                size="large"
                options={[
                  { value: "hair", label: "Hair" },
                  { value: "skin", label: "Skin" },
                  { value: "acne-scars", label: "Acne & Scars" },
                  { value: "under-eye", label: "Under Eye" },
                  { value: "pigmentation", label: "Pigmentation" },
                  { value: "medifacial", label: "Medifacial" },
                  { value: "anti-aging", label: "Anti-aging" },
                  { value: "laser", label: "Laser" },
                  { value: "body-contouring", label: "Body Contouring" },
                  { value: "other", label: "Not sure / Other" },
                ]}
              />
            </Form.Item>

            <Form.Item name="notes" label="Any specific concern (optional)">
              <Input.TextArea
                rows={3}
                placeholder="Tell us briefly what you'd like help with..."
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              className="w-full bg-[#efae4c] hover:bg-[#d89b3e] border-none h-12 font-semibold text-[#001b3d] mt-2"
              size="large"
            >
              Request call back
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
