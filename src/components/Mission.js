import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
  id="mission"
  style={{
    background: "transparent",
    color: "#fff",
    overflow: "hidden",
    position: "relative",
  }}
    >
      {/* Decorative Circles */}
      <div
         style={{
    background: "transparent",
    color: "#fff",
  }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "250px",
          height: "250px",
          backgroundColor: "#ffd166",
          borderRadius: "50%",
          opacity: 0.1,
        }}
      ></div>

      <div className="container position-relative text-center" style={{ zIndex: 2 }}>
        <h2
          className="fw-bold mb-5"
          style={{
            color: "#10a37f",
            fontFamily: "'fantuwua','Playfair Display', serif",
            fontSize: "2.5rem",
          }}
        >
         ተልእኮ<br /> <span style={{ color: "#fff" }}>Mission</span>
        </h2>

        <div className="row justify-content-center">
          {/* Mission 1 */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              minHeight: "300px",
            }}
          >
            <h4 className="text-warning mb-3"> ከክርስቶስ የተካፈልነውን ፍቅር በልግስና በኩል ለሌሎች  መካፈል። </h4>
            <p className="bible-verse" style={{ color: "#ccc" }}>
            ሲያጣ አይቶ ያልራራለት ማንም ቢሆን፥ የእግዚአብሔር ፍቅር በእርሱ እንዴት ይኖራል?
            ነገር ግን የዚህ ዓለም ገንዘብ ያለው፥ ወንድሙም የሚያስፈልገው 
            </p>
            <p>1 ዮሐንስ 3:17</p>
          </div>

          {/* Mission 2 */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              minHeight: "300px",
            }}
          >
          <h4 className="text-warning mb-3">የቅዱሳንን ጉድለት በመሙላት ለእግዚአብሔር ብዙ ምስጋና እንዲቀርብ ምክንያት መሆን ነው፡፡</h4>
            <p className="bible-verse" style={{ color: "#ccc" }}>
            ይህ የምትሰጡት አገልግሎት የቅዱሳንን ጕድለት የሚያሟላ ብቻ ሳይሆን፣
             ብዙ ምስጋና ለእግዚአብሔር የሚቀርብበት ነው።
            </p>
            <p>2 ቆሮንቶስ 9:12</p>
          </div>

          {/* Mission 3 */}
          <div
            className="col-md-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              minHeight: "300px",
            }}
          >
          <h4 className="text-warning mb-3"> የተራቡትን በማብላት የተጠሙትን በማጠጣት እንግዶችን ፣ ስደተኛ
             የሆኑትን በመቀበል ፣ የታረዙትን በማልበስ፣ የታመሙትን በመጠየቅ እንዲሁም የታሰሩትን በመጎብኘት ጌታችን እንዳልው ልክ እንደ በጎዎቹ (የአባቱ ብሩካን ) መሆን  ነው፡፡</h4>
            <p className="bible-verse" style={{ color: "#ccc" }}>
            ተርቤ አብልታችሁኛልና፥ ተጠምቼ አጠጥታችሁኛልና፥
             እንግዳ ሆኜ ተቀብላችሁኛልና፥ ታርዤ አልብሳችሁኛልና፥
            </p>

            <p>ማቴዎስ 25:35</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
