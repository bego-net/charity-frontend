import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import crossImage from "../assets/mekaneeyesus.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again later.");
        console.error("Server error:", data);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
      <h2
        className="fw-bold mb-5"
        style={{
          fontFamily: "'fantuwua','serif'",
          color: "#10a37f",
          fontSize: "2.5rem",
        }}
      >
        Contact Us
      </h2>

      <div className="mb-5">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:yabatubrukan@gmail.com"
            style={{ color: "#10a37f", textDecoration: "none" }}
          >
            yabatubrukan@gmail.com
          </a>
        </p>
        <p>
          <strong>Telegram:</strong>{" "}
          <a
            href="https://t.me/yabatubrukan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#10a37f", textDecoration: "none" }}
          >
            https://t.me/yabatubrukan
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <span style={{ color: "#10a37f" }}>
            +251938665914 / +251912243342 <br/> +251912243188
          </span>
        </p>

        <p>
          <strong>Awash Bank Account:</strong>{" "}
          <span style={{ color: "#10a37f" }}>
            01325076451900 <br/>betel mekane eysus
            
          </span>
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="d-flex justify-content-center gap-4 mb-4">
          {/* Telegram Icon */}
          <motion.a
            href="https://t.me/yabatubrukan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              color: "#0088cc",
              fontSize: "2rem",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
          >
            <i className="bi bi-telegram"></i>
          </motion.a>
        
        </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: "90%",
          maxWidth: "500px",
          boxShadow: "0 0 30px rgba(16,163,127,0.3)",
        }}
      >
        <div className="mb-3 text-start">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control bg-transparent text-white"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control bg-transparent text-white"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control bg-transparent text-white"
            rows="4"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: "#10a37f",
            border: "none",
            color: "white",
            borderRadius: "30px",
            padding: "12px 40px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      <div
        className="mt-5 text-center"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderRadius: "30px",
          padding: "30px 20px",
          width: "fit-content",
          margin: "50px auto 0 auto",
          boxShadow: "0 0 15px #8eeea",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <motion.img
          src={crossImage}
          alt="Cross Symbol"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "300px",
            height: "auto",
            marginBottom: "10px",
            filter:
              "drop-shadow(0 0 20px rgba(16,163,127,0.7)) drop-shadow(0 0 40px rgba(16,163,127,0.5))",
            borderRadius: "20px",
          }}
        />
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            color: "#8ceeff",
            fontWeight: "bold",
            letterSpacing: "2px",
            textShadow: "0 0 8px #fff",
            fontSize: "1.5rem",
            marginTop: "15px",
          }}
        >
          ቤቴል መካነ ኢየሱስ ሆሳዕና
        </motion.h4>
      </div>
    </section>
  );
}

export default Contact;
