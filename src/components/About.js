import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-5 position-relative"
      style={{
        background: "transparent",
        color: "#fff",
        overflow: "hidden",
      }}
    >

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(16,163,127,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "transform 0.5s ease",
              }}
            >
              <img
                src={aboutImg}
                alt="About Father Blessed Team"
                className="img-fluid"
                style={{
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="col-md-6 text-start">
            <h2
              className="fw-bold mb-3"
              style={{
                fontFamily: "'fantuwua', serif",
                color: "#10a37f",
                fontSize: "2.5rem",
                textAlign: "center",
              }}
            >​መግቢያ <br /> <span style={{ color: "#fff" }}>About Us</span>
            </h2>

            <p
              className="lead"
              style={{
                fontFamily: " 'Benaiah', 'Entoto','washrab' , serif",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#d1d1d1",
                textAlign: "justify",
              }}
            >
                የአባቱ  ቡሩካን  ሕብረት በልግስና  የፀጋ ስጦታ የሚያገለግል ሕብረት  ሲሆን
                ስያሜዉን  ያገኘዉ በመፅሀፍ ቅዱስ የመጀመሪያዉ   
                የወንጌል መፅሀፍ ከሆነዉ ከ(ማቴዎስ 25÷34)
                "የአባቴ  ቡሩካን" ከሚለዉ የተወሰደ ነዉ፡፡

               
              </p>

            <p
              style={{
                fontFamily: " 'Benaiah','Entoto','washrab' , serif",
                color: "#b5b5b5",
                fontSize: "1rem",
                lineHeight: "1.7",
                textAlign: "justify",
              }}
            >
               አመሠራረቱ  በ2011 ዓ.ም ወርሀ ሐምሌ  ላይ በቤቴል መካነ ኢየሱስ
               የአገልግሎት ትምህርት ተማሪዎች የተጀመረ ሲሆን በ2013 ዓ.ም ወርሃ ጥር በ ቀን 03
                 በቤቴል መካነ ኢየሱስ አባላት እና አገልጋዮችን በማፍራት
                  42 ቅዱሳን በአባልነት ይዞ እንደ ህብረት ተመሰረተ ። 
                  በአሁኑ ሰአት ከተለያዩ ግለሰቦች እና ድርጅቶች ጋር በመሆን ዘርፈ ብዙ 
                  ስራዎችን እየሰራ ይገኛል፡፡
              
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatBlob {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(20px) scale(1.1); }
        }
      `}</style>
    </section>
  );
}

export default About;
