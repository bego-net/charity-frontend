import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Replace these with your own image paths
import project1 from "../assets/gallery/project1.jpg";
import project2 from "../assets/gallery/project2.jpg";
import project3 from "../assets/gallery/project3.jpg";
import project4 from "../assets/gallery/project4.jpg";
import project5 from "../assets/gallery/project5.jpg";

function ProjectCard({ project, index }) {
  const { scrollY } = useViewportScroll();

  // Create animation values based on scroll position
  const start = index * 300;
  const end = start + 600;

  const scale = useTransform(scrollY, [start, end], [0.3, 1]);
  const borderRadius = useTransform(scrollY, [start, end], ["50%", "20px"]);
  const overlayOpacity = useTransform(scrollY, [start, end], [0.9, 0]);

  return (
    <motion.div
      className="col-md-4 mb-5"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        className="project-card text-center"
        style={{
          background: "rgba(255,255,255,0.05)",
          borderRadius: "25px",
          padding: "20px",
          overflow: "hidden",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Image that expands on scroll */}
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              scale,
              borderRadius,
              transition: "all 0.6s ease",
            }}
          />

          {/* Dark overlay that fades away */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.85)",
              borderRadius,
              opacity: overlayOpacity,
            }}
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <h4 style={{ fontFamily: "'washrab','Entoto','serif'", color: "#10a37f" }}>{project.title}</h4>
          <p style={{fontFamily: "'Entoto','serif'", color: "#ccc", fontSize: "0.95rem", lineHeight: "1.6" }}>
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ተማሪዎችን ማስተማር",
      description:
        "በተለያዩ ምክንያቶች መማር ያልቻሉ የአቅመ ደካሞችን ልጆች ማስተማር።",
      image: project1,
    },
    {
      id: 2,
      title: "የታመሙ ሰዎችን መጠየቅ",
      description:
        "በሕክምና ማዕከል የታመሙ ሰዎችን ሄዶ መጠየቅ እና ማሳከም ፣ በሚያስፈልጋቸው ነገር መርዳት",
      image: project2,
    },
    {
      id: 3,
      title: "ታራሚዎች መጠየቅ",
      description:
        "የታሰሩ ሰዎችን መጠየቅ እና መርዳት",
      image: project3,
    },
    {
      id: 4,
      title: "የጎዳና ተዳዳሪዎች መርዳት",
      description:
        "በተለያዩ ጊዜያት የምገባ ፕሮግራም ማዘጋጀት እንዲሁም ስራ ማስጀመር",
      image: project4,
    },
    {
      id: 5,
      title: "​ተፈናቃዮችን መቀበል",
      description:
        "ከተለያዩ ቦታዎች ተሰደው የመጡ ሰዎችን መቀበል እና በሚያስፈልጋቸው ነገር መርዳት",
      image: project5,
    },
    
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: "transparent",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          style={{
            color: "#10a37f",
            fontFamily: "'fantuwua','Playfair Display', serif",
            fontSize: "2.5rem",
          }}
        >
           የተሰሩ ስራዎች<br /> <span style={{ color: "#fff" }}>service</span>
        </h2>

        <div className="row justify-content-center">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
