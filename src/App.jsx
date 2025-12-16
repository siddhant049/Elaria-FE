import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Button, Input, Modal, Form, Steps, message } from "antd";
import {
  CheckCircleOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import TreatmentDetailPage from "./pages/treatments/TreatmentDetailPage";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";
import AIAssessmentPage from "./pages/AIAssessmentPage";
import HomePage from "./pages/HomePage";

// ============================================================================
// BOOKING MODAL COMPONENT
// ============================================================================
const BookingModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState({
    category: "",
    treatment: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [form] = Form.useForm();

  // Booking categories and their treatments (simplified for brevity)
  const bookingCategories = [
    {
      value: "hair",
      label: "Hair",
      description: "Hair fall, thinning, dandruff & scalp concerns",
      treatments: ["QR678", "Hair Growth Boosters", "GFC"],
    },
    {
      value: "skin",
      label: "Skin",
      description:
        "Pigmentation, infections, moles, tags & overall skin health",
      treatments: ["Acne scars", "Xanthelasma", "Skin infections"],
    },
  ];

  const steps = [
    { title: "Category", description: "Choose concern area" },
    { title: "Treatment", description: "Select treatment" },
    { title: "Details", description: "Share contact details" },
  ];

  const handleCategorySelect = (category) => {
    setBookingData({ ...bookingData, category, treatment: "" });
    setCurrentStep(1);
  };

  const handleTreatmentSelect = (treatment) => {
    setBookingData({ ...bookingData, treatment });
    setCurrentStep(2);
  };

  const handleFormSubmit = (values) => {
    const finalData = { ...bookingData, ...values };
    message.success("Thank you! Our team will reach out shortly.");
    onClose();
    setCurrentStep(0);
    setBookingData({
      category: "",
      treatment: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
    });
    form.resetFields();
  };

  return (
    <Modal
      title={
        <div className="text-center py-4">
          <h2>Book Your Transformation</h2>
        </div>
      }
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={900}
      centered
    >
      <div className="py-4">
        <Steps current={currentStep} items={steps} className="mb-8" />

        {currentStep === 0 && (
          <div className="space-y-4">
            <h3 className="text-xl mb-6 text-center">Choose Your Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bookingCategories.map((category) => {
                const isSelected = bookingData.category === category.value;
                return (
                  <div
                    key={category.value}
                    onClick={() => handleCategorySelect(category.value)}
                    className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${
                      isSelected
                        ? "border-[#efae4c] bg-[#efae4c]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <h4
                      className={`font-semibold ${
                        isSelected ? "text-[#efae4c]" : ""
                      }`}
                    >
                      {category.label}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl mb-6 text-center">Select Treatment</h3>
            {bookingData.category && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {bookingCategories
                  .find((c) => c.value === bookingData.category)
                  ?.treatments.map((treatment) => (
                    <Button
                      key={treatment}
                      onClick={() => handleTreatmentSelect(treatment)}
                      className={`${
                        bookingData.treatment === treatment
                          ? "bg-[#efae4c]/10 border-[#efae4c]"
                          : ""
                      }`}
                    >
                      {treatment}
                    </Button>
                  ))}
              </div>
            )}
            <div className="flex gap-3 pt-4">
              <Button onClick={() => setCurrentStep(0)} className="flex-1">
                Back
              </Button>
              <Button
                type="primary"
                disabled={!bookingData.treatment}
                onClick={() => setCurrentStep(2)}
                className="flex-1 bg-[#efae4c]"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h3 className="text-xl mb-6 text-center">Your Information</h3>
            <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Enter your full name"
                />
              </Form.Item>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<PhoneOutlined />}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    placeholder="your@email.com"
                  />
                </Form.Item>
              </div>
              <div className="flex gap-3 pt-4">
                <Button onClick={() => setCurrentStep(1)} className="flex-1">
                  Back
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="flex-1 bg-[#efae4c]"
                >
                  Submit Request
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </Modal>
  );
};

// ============================================================================
// SCROLL TO TOP COMPONENT
// ============================================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookAppointment = () => {
    setBookingModalOpen(true);
  };

  return (
    <>
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<HomePage onBookAppointment={handleBookAppointment} />}
        />
        <Route
          path="/treatment/:treatmentId"
          element={
            <TreatmentDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/service/:serviceId"
          element={
            <ServiceDetailPage onBookAppointment={handleBookAppointment} />
          }
        />
        <Route
          path="/ai-assessment"
          element={
            <AIAssessmentPage onBookAppointment={handleBookAppointment} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
