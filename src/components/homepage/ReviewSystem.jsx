import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, message } from "antd";
import { StarFilled, UploadOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const ReviewSystem = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: "",
    treatment: "",
    rating: 0,
    review: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const treatments = [
    "HydraFacial",
    "Laser Hair Removal",
    "Botox",
    "PRP Therapy",
    "Chemical Peel",
    "Body Contouring",
  ];

  const handleRatingClick = (rating) => {
    setReviewData((prev) => ({ ...prev, rating }));
  };

  const handleSubmitReview = () => {
    if (!reviewData.name || !reviewData.treatment || reviewData.rating === 0 || !reviewData.review) {
      message.error("Please fill in all required fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      ...reviewData,
      date: new Date().toLocaleDateString(),
      initials: reviewData.name.split(" ").map((n) => n[0]).join("").toUpperCase(),
      verified: true,
    };

    setSubmittedReviews((prev) => [newReview, ...prev]);
    setReviewData({
      name: "",
      treatment: "",
      rating: 0,
      review: "",
    });
    setIsReviewModalOpen(false);

    message.success("Thank you for your review! It will be published after moderation.");
  };

  return (
    <>
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="text-center mb-16"
          >
            <div className="w-16 h-px bg-[#efae4c] mx-auto mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light text-[#001b3d] mb-6 tracking-tight">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600 font-light tracking-wide mb-8">
              Your review helps others discover their confidence journey
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-[#efae4c] hover:bg-[#d89b3e] border-none rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <StarFilled className="mr-2" />
              Write a Review
            </Button>
          </motion.div>

          {/* Recent Reviews */}
          {submittedReviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-[#001b3d] text-center mb-8">
                Recent Reviews
              </h3>
              {submittedReviews.slice(0, 3).map((review) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#001b3d] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#efae4c] font-semibold">
                        {review.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-[#001b3d]">
                          {review.name}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarFilled
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-[#efae4c]"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{review.treatment}</p>
                      <p className="text-gray-700 italic">"{review.review}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Review Modal */}
      <Modal
        title={
          <div className="text-center py-4">
            <h2 className="text-2xl font-light text-[#001b3d] tracking-wide">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Help others discover their beauty journey
            </p>
          </div>
        }
        open={isReviewModalOpen}
        onCancel={() => setIsReviewModalOpen(false)}
        footer={null}
        width={600}
        centered
        className="review-modal"
      >
        <div className="space-y-6">
          <Form layout="vertical" className="space-y-4">
            <Form.Item label="Your Name" required>
              <Input
                size="large"
                placeholder="Enter your full name"
                value={reviewData.name}
                onChange={(e) =>
                  setReviewData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </Form.Item>

            <Form.Item label="Treatment Received" required>
              <Select
                size="large"
                placeholder="Select the treatment you received"
                value={reviewData.treatment || undefined}
                onChange={(value) =>
                  setReviewData((prev) => ({ ...prev, treatment: value }))
                }
              >
                {treatments.map((treatment) => (
                  <Select.Option key={treatment} value={treatment}>
                    {treatment}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Your Rating" required>
              <div className="space-y-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRatingClick(star)}
                    >
                      <StarFilled
                        className={`text-2xl transition-colors ${
                          star <= (hoverRating || reviewData.rating)
                            ? "text-[#efae4c]"
                            : "text-gray-300"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  {reviewData.rating > 0 &&
                    `${reviewData.rating} star${
                      reviewData.rating > 1 ? "s" : ""
                    }`}
                </div>
              </div>
            </Form.Item>

            <Form.Item label="Your Review" required>
              <Input.TextArea
                rows={4}
                placeholder="Share your experience, results, and what you loved about the treatment..."
                value={reviewData.review}
                onChange={(e) =>
                  setReviewData((prev) => ({ ...prev, review: e.target.value }))
                }
                maxLength={500}
                showCount
              />
            </Form.Item>
          </Form>

          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={() => setIsReviewModalOpen(false)}
              className="flex-1"
              size="large"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleSubmitReview}
              disabled={
                !reviewData.name ||
                !reviewData.treatment ||
                reviewData.rating === 0 ||
                !reviewData.review
              }
              className="flex-1 bg-[#efae4c] hover:bg-[#d89b3e] border-none"
              size="large"
            >
              Submit Review
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ReviewSystem;
