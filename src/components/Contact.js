import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import crossImage from "../assets/mekaneeyesus.png"; // adjust path if needed

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i81pe54", // 🔹 Replace with your EmailJS service ID
        "template_7whsnui", // 🔹 Replace with your EmailJS template ID
        form.current,
        "W03jOl3lFoQj-Vqpq" // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error(error);
        }
      );
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
        style={{ fontFamily:"'fantuwua','serif'",color: "#10a37f", fontSize: "2.5rem" }}
      >
        Contact Us
      </h2>

      {/* Contact Info Section */}
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
            +251938665914 / +251912243342
          </span>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="d-flex gap-4 mb-5">
        <motion.a
          href="https://t.me/yabatubrukan"
          whileHover={{ scale: 1.2 }}
          style={{ color: "#0088cc", fontSize: "1.8rem" }}
        >
          <i className="bi bi-telegram"></i>
        </motion.a>
        <motion.a
          href="https://facebook.com"
          whileHover={{ scale: 1.2 }}
          style={{ color: "#1877F2", fontSize: "1.8rem" }}
        >
          <i className="bi bi-facebook"></i>
        </motion.a>
        <motion.a
          href="https://twitter.com"
          whileHover={{ scale: 1.2 }}
          style={{ color: "#000000", fontSize: "1.8rem" }}
        >
          <i className="bi bi-twitter"></i>
        </motion.a>
        <motion.a
          href="https://instagram.com"
          whileHover={{ scale: 1.2 }}
          style={{ color: "#E4405F", fontSize: "1.8rem" }}
        >
          <i className="bi bi-instagram"></i>
        </motion.a>
      </div>

      {/* Message Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
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
            name="user_name"
            className="form-control bg-transparent text-white"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control bg-transparent text-white"
            placeholder="your@email.com"
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
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
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
          Send Message
        </motion.button>
      </motion.form>

      {/* Cross Image and Text */}
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
      borderRadius: "20px", // ⬅️ Curves on the image itself
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
