import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function Donate() {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePresetClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 This is just the frontend placeholder.
    console.log({
      name: e.target.name.value,
      email: e.target.email.value,
      amount: amount || customAmount,
      message,
    });

    alert(`✅ Frontend only: You donated $${amount || customAmount}!`);
    setShowForm(false);
  };

  return (
    <section
      id="donate"
      style={{
        background: "linear-gradient(135deg, #0b032d, #1a1a2e)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      {/* 🔹 Placeholder color styling */}
      <style>
        {`
          ::placeholder {
            color: #A0A0A0 !important;
            opacity: 1;
          }
        `}
      </style>

      <h2
        className="fw-bold mb-4"
        style={{
          fontFamily: "'fantuwua','serif'",
          color: "#10a37f",
          fontSize: "2.5rem",
        }}
      >
        አብረውን ያገልግሉ
      </h2>

      {/* Donate Button */}
      {!showForm && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          style={{
            background: "#10a37f",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "15px 50px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(16,163,127,0.6)",
          }}
        >
          Donate Now
        </motion.button>
      )}

      {/* Animated Donation Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "40px",
              marginTop: "30px",
              width: "90%",
              maxWidth: "500px",
              position: "relative",
              boxShadow: "0 0 30px rgba(16,163,127,0.3)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              ❌
            </button>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control bg-transparent text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-transparent text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Select Donation Amount</label>
                <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                  {[50, 100, 200, 500, 1000].map((value) => (
                    <motion.button
                      key={value}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handlePresetClick(value)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "30px",
                        border:
                          amount === value
                            ? "2px solid #10a37f"
                            : "1px solid #555",
                        background:
                          amount === value ? "#10a37f" : "transparent",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {value} birr
                    </motion.button>
                  ))}
                </div>

                <input
                  type="number"
                  className="form-control bg-transparent text-white"
                  placeholder="Or enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("");
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message (optional)</label>
                <textarea
                  className="form-control bg-transparent text-white"
                  rows="3"
                  placeholder="Write a short message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "#10a37f",
                  color: "white",
                  border: "none",
                  borderRadius: "30px",
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  width: "100%",
                }}
              >
                Confirm Donation
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Donate;
