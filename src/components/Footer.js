import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0b032d, #1a1a2e)",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "2px solid #10a37f",
        boxShadow: "0 -2px 20px rgba(16,163,127,0.2)",
      }}
    >
      <div className="container">
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

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "0.95rem", color: "#aaa", marginTop: "20px" }}
        >
          © 2025 <strong>Father Blessed Charity Team</strong>. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
