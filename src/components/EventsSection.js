import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

function EventsSection() {
  const events = [
    {
      title: "የበዓል ድጋፍ",
      image: "/images/event1.jpg",
    },
    {
      title: "የተማሪዎች ምርቃት ",
      image: "/images/event2.jpg",
    },
    {
      title: "የተማሪዎች ምርቃት ",
      image: "/images/event3.jpg",
    },
    {
      title: "እንግዶችን በመቀበል ",
      image: "/images/event4.jpg",
      description:
        "ከተለያዩ ቦታዎች ለመጡ ስደተኞች የመኖሪያ ቤት እና አስፈላጊውን ነገር በመዘጋጀት ላይ",
    },
    {
      title: "Fundraising ",
      image: "/images/event6.jpg",
      description: "ዕቃዎች በመሸጥ ለሕብረቱ ገቢ በማሰባሰብ ላይ",
    },
    {
      title: "Fundraising ",
      image: "/images/event7.jpg",
      description: "ጫማ በመጥረግ ለሕብረቱ ገቢ በማሰባሰብ ላይ",
    },
    {
      title: "ሆስፒታል ",
      image: "/images/event8.jpg",
      description: "ለህሙማን በመፀለይ እና የተለያዩ ድጋፎችን በማድረግ ",
    },
    {
      title: "የበዓል ዝግጅት",
      image: "/images/event9.jpg",
    },
    {
      title: "ማረሚያ ቤት",
      image: "/images/event10.jpg",
      description: "በማረሚያ የሚገኙትን ወገኖች በመጠየቅ በመጠየቅ",
    },
    {
      title: "የገና በአል",
      image: "/images/event11.jpg",
      description:
        "የሕብረቱ አባላት በዓልን ከተቸገሩ ወገኖች ጋር ለማክበር ሲሰባሰቡ",
    },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // ✅ useCallback ensures handleNext doesn’t trigger extra renders
  const handleNext = useCallback(
    () => setIndex((prev) => (prev + 1) % events.length),
    [events.length]
  );

  const handlePrev = useCallback(
    () => setIndex((prev) => (prev - 1 + events.length) % events.length),
    [events.length]
  );

  // ✅ Fixed useEffect dependencies (no ESLint warning now)
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [paused, handleNext]);

  return (
    <section
      id="events"
      className="py-5"
      style={{
        backgroundColor: "#0b032d",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center">
        <h2
          className="fw-bold mb-5"
          style={{
            fontFamily: "'fantuwua','Playfair Display', serif",
            color: "#10a37f",
            fontSize: "2.5rem",
          }}
        >
          ማስታወሻዎች<br />
          <span style={{ color: "#fff" }}>Events</span>
        </h2>

        <div
          className="position-relative d-flex justify-content-center align-items-center"
          style={{ height: "500px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{
                rotateY: 0,
                opacity: 1,
                scale: paused ? 1.05 : 1,
                boxShadow: paused
                  ? "0 0 2px 2px #eeeeee, 0 0 10px 5px #eeeeee"
                  : "0 20px 40px rgba(0,0,0,0.4)",
                transition: { duration: 0.8, ease: "easeOut" },
              }}
              exit={{
                rotateY: -90,
                opacity: 0,
                transition: { duration: 0.6, ease: "easeIn" },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                borderRadius: "25px",
                overflow: "hidden",
                width: "80%",
                maxWidth: "800px",
                background: "rgba(255,255,255,0.05)",
                cursor: "pointer",
                position: "absolute",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onClick={() => setPaused(!paused)}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  overflow: "hidden",
                  borderRadius: "25px",
                }}
              >
                <img
                  src={events[index].image}
                  alt={events[index].title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform: paused ? "scale(1.1)" : "scale(1)",
                    filter: paused
                      ? "brightness(1.1) saturate(1.2)"
                      : "brightness(0.9)",
                  }}
                />

                {/* Glowing border on hover */}
                <div
                  className="glow-border"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "25px",
                    boxShadow: paused
                      ? "0 0 25px 5px #ff4d4d, 0 0 50px 15px #ff4d4d"
                      : "none",
                    transition: "all 0.4s ease",
                    pointerEvents: "none",
                  }}
                ></div>
              </div>

              <div className="p-4">
                <h4 style={{ color: "#10a37f", fontWeight: "bold" }}>
                  {events[index].title}
                </h4>
                <p style={{ color: "#ddd", fontSize: "1rem" }}>
                  {events[index].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Button */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "2%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid #444",
              borderRadius: "50%",
              color: "#10a37f",
              width: "50px",
              height: "50px",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
          >
            ‹
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "2%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid #444",
              borderRadius: "50%",
              color: "#10a37f",
              width: "50px",
              height: "50px",
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
