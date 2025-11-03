import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TypeAnimation } from "react-type-animation";
import bgImage from "../assets/bg-dark.jpg"; // 👈 background image path
import { Link } from "react-scroll"; 

function Hero() {
  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: "100vh",
        position: "relative",
        color: "#e0e0e0",
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
      ></div>

      {/* Dark overlay to make text visible */}
      <div
        style={{
          background:
            "linear-gradient(145deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.85) 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      ></div>

      {/* Text Content */}
      <div data-aos="fade-down">
        <div
          className="mb-3"
          style={{
            fontFamily:"'Benaiah', 'serif'",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid #333",
            borderRadius: "30px",
            padding: "8px 20px",
            display: "inline-block",
            color: "#ccc",
          }}
        >
          Sharing the Father’s Love with Every Hand
        </div>
      </div>

      <h1
        className="display-3 fw-bold mt-4 amharic-title"
        data-aos="zoom-in"
        data-aos-delay="300"
        style={{ color: "#fff" }}
        
      >
        <TypeAnimation
          sequence={[
            "የአባቱ ብሩካን",
            2000,
            "የአባቱ ብሩካን የልግስና ህብረት",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <p
        className="lead mt-3 text-secondary bible-verse"
        style={{fontSize: "1.5rem",  marginTop: "100px", maxWidth: "500px", margin: "0 auto", color: "#8ecae6" }}
        data-aos="fade-up"
        data-aos-delay="600"
        
  
        

      >
        
እናንተ የአባቴ ቡሩካን፥ ኑ፤ ዓለም ከተፈጠረበት ጊዜ ጀምሮ የተዘጋጀላችሁን መንግሥት ውረሱ... 
ተርቤ አብልታችሁኛልና፥ ተጠምቼ አጠጥታችሁኛልና፥ እንግዳ ሆኜ ተቀብላችሁኛልና፥ ታርዤ አልብሳችሁኛልና ማቴዎስ 25:34


      </p>

      
<div className="mt-4" data-aos="fade-up" data-aos-delay="900">
  <Link
    to="donate" // The section ID (must match your Donate section's id)
    smooth={true}
    duration={700}
    offset={-80}
    className="btn btn-danger btn-lg me-3"
    style={{
      borderRadius: "30px",
      backgroundColor: "#e63946",
      border: "none",
      color: "#fff",
      fontWeight: "600",
      boxShadow: "0 0 10px rgba(230, 57, 70, 0.5)",
    }}
  >
    Donate
  </Link>
</div>

    </section>
  );
}

export default Hero;
