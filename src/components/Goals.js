// src/components/Goals.js
import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function Goals() {
  return (
    <section
      id="goals"
      className="py-5"
      style={{
        backgroundColor: "#0d1117", // same as the body color
        color: "#e6edf3", // soft white for readability
        textAlign: "center",
      }}
    >
      <div className="container">
        <motion.h2
          className="fw-bold mb-4"
          style={{
            color: "#10a37f",
            fontFamily: "'fantuwua','Playfair Display', serif",
            fontSize: "2.5rem",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ግብ <br /> <span style={{ color: "#e6edf3" }}>Our Goals</span>
        </motion.h2>

        <motion.p
          className="lead mx-auto"
          style={{
            maxWidth: "900px",
            fontSize: "1.2rem",
            color: "#c9d1d9", // lighter text shade
            lineHeight: "1.8",
            fontFamily: "'washrab','Entoto','serif'",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ከክርስቶስ የተካፈልነውን ፍቅር ለሌሎች በመግለጥ ሰዎችን ወደ እግዚአብሐር መንግሰት በመጥራት
          እና በመጨመር ከሙላታቸው ብቻ ሳይሆን ከጉድለታቸው ለሌሎች በመቆረስ እንዲኖሩ ማስቻል ነው።
        </motion.p>
      </div>
    </section>
  );
}

export default Goals;
