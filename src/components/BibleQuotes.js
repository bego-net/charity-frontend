import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function BibleQuotes() {
  const quotes = [
    {
      text: "“ሁለት ልብስ ያለው ምንም ለሌለው ያካፍል፤ ምግብ ያለውም እንዲሁ ያድርግ.”",
      verse: "– ሉቃስ 3:11",
    },
    {
      text: "“በልግስና ስጠው፤ ስትሰጠውም ልብህ አይጸጸት....”",
      verse: "– ዘዳግም 15:10",
    },
    {
      text: "“ለድሀ ቸርነትን የሚያደርግ ለእግዚአብሔር ያበድራል",
      verse: "– ምሳሌ 19፡17",
    },
    {
      text: "“እግዚአብሔር በደስታ የሚሰጠውን ይወዳል.”",
      verse: "– 2 ቆሮ 9:7",
    },
  ];

  return (
    <section
      id="bible-quotes"
      className="py-5 position-relative"
      style={{
        background: "transparent",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background glow decorations */}
     
      

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <motion.h2
          className="fw-bold mb-5 text-center"
          style={{
            color: "#10a37f",
            fontFamily: "'fantuwua','Playfair Display','serif'",
            fontSize: "2.8rem",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.h2>

        <div className="row justify-content-center">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className={`col-md-10 mb-5 d-flex ${
                index % 2 === 0 ? "justify-content-start" : "justify-content-end"
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius:
                    index % 2 === 0
                      ? "60px 60px 60px 10px"
                      : "60px 60px 10px 60px",
                  padding: "30px 40px",
                  maxWidth: "70%",
                  boxShadow: "0 4px 25px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontStyle: "italic",
                    color: "#e8e8e8",
                    marginBottom: "10px",
                    fontFamily: "'Entoto' 'sans-serif'",
                  }}
                >
                  {quote.text}
                </p>
                <p style={{ color: "#10a37f", fontWeight: "bold" }}>
                  {quote.verse}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BibleQuotes;
