import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Info, ChevronUp, Plus } from "lucide-react";

import project1 from "../assets/gallery/project1.jpg";
import project2 from "../assets/gallery/project2.jpg";
import project3 from "../assets/gallery/project3.jpg";
import project4 from "../assets/gallery/project4.jpg";
import project5 from "../assets/gallery/project5.jpg";
import project6 from "../assets/gallery/project6.jpg";
import project7 from "../assets/gallery/project7.jpg";
import project8 from "../assets/gallery/project8.jpg";

const ProjectCard = ({ project, index }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      className="group relative h-[400px] lg:h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl cursor-pointer"
    >
      <motion.img
        src={project.image}
        alt={project.titleEn}
        animate={{ 
          scale: isHovered || isClicked ? 1.1 : 1,
          filter: isHovered || isClicked ? "blur(4px) brightness(0.3)" : "blur(0px) brightness(0.8)" 
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
        <motion.div
          animate={{ y: isClicked ? -10 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {!isClicked && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-[10px] uppercase tracking-widest bg-emerald-500/10 w-fit px-3 py-1 rounded-full border border-emerald-500/20"
            >
              <Info size={12} />
              {currentLang === 'am' ? "ዝርዝር ለማየት ይጫኑ" : "See Details"}
            </motion.div>
          )}

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            <Sparkles size={12} className="text-emerald-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white">
              {currentLang === 'am' ? "የተሳካ ስራ" : "Impact Story"}
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
            {currentLang === 'am' ? project.titleAm : project.titleEn}
          </h3>

          <AnimatePresence>
            {isClicked && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-slate-200 text-sm leading-relaxed font-medium">
                  {currentLang === 'am' ? project.descAm : project.descEn}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [showArchive, setShowArchive] = useState(false);

  // Initial display: 6 projects (2 rows of 3 on desktop)
  const initialProjects = [
    { id: 1, titleAm: "ተማሪዎችን ማስተማር", titleEn: "Educating Students", descAm: "በተለያዩ ምክንያቶች መማር ያልቻሉ የአቅመ ደካሞችን ልጆች ማስተማር።", descEn: "Providing full scholarships and supplies for children whose families cannot afford schooling.", image: project1 },
    { id: 2, titleAm: "የታመሙ ሰዎችን መጠየቅ", titleEn: "Visiting the Sick", descAm: "በሕክምና ማዕከል የታመሙ ሰዎችን ሄዶ መጠየቅ እና ማሳከም፣ በሚያስፈልጋቸው ነገር መርዳት።", descEn: "Weekly visits to medical wards to provide financial aid for medicine and spiritual comfort.", image: project2 },
    { id: 3, titleAm: "ታራሚዎች መጠየቅ", titleEn: "Prison Ministry", descAm: "የታሰሩ ሰዎችን መጠየቅ እና መርዳት።", descEn: "Supporting incarcerated individuals with basic hygiene kits and family reconnection services.", image: project3 },
    { id: 4, titleAm: "የጎዳና ተዳዳሪዎች መርዳት", titleEn: "Street Outreach", descAm: "በተለያዩ ጊዜያት የምገባ ፕሮግራም ማዘጋጀት እንዲሁም ስራ ማስጀመር።", descEn: "Sustainable feeding programs and vocational training to help individuals transition off the streets.", image: project4 },
    { id: 5, titleAm: "ተፈናቃዮችን መቀበል", titleEn: "Displaced Families", descAm: "ከተለያዩ ቦታዎች ተሰደው የመጡ ሰዎችን መቀበል እና በሚያስፈልጋቸው ነገር መርዳት።", descEn: "Providing emergency shelter and essential resources for families fleeing regional conflicts.", image: project5 },
    { id: 6, titleAm: "ልጆችን ማስተማር", titleEn: "Educating Children", descAm: "በተለያዩ ምክንያቶች መማር ያልቻሉ የአቅመ ደካሞችን ልጆች ማስተማር።", descEn: "Providing full scholarships and supplies for children whose families cannot afford schooling.", image: project6 },
  ];

  // Hidden projects
  const archiveProjects = [
    { id: 7, titleAm: "ህፃናትን ማስተማር", titleEn: "Teaching Children", descAm: "ሙሉ የልጆቹን ወጪ በመሸፈን ህፃናት ወደ ትምህርት ቤት መላክ።", descEn: "Providing educational support and resources to underprivileged children.", image: project7 },
    { id: 8, titleAm: "ተረጂዎችን መጎብኘት ", titleEn: "Visiting the Needy", descAm: "ወደ ተረጂዎች የሚያስፈልጋቸውን ነገር ይዞ በመሄድ መጠየቅ", descEn: "Visiting and supporting individuals in need within the community.", image: project8 },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-[#05070a] transition-colors duration-700">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 mb-4">
            <Sparkles size={14} className="text-emerald-600" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-700 dark:text-emerald-400">
              {currentLang === 'am' ? "የተሰሩ ስራዎች" : "Our Legacy"}
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            {currentLang === 'am' ? "በህብረት የሰራናቸው ተግባራት" : "Service Beyond Borders"}
          </h2>
        </div>

        {/* Main Grid: Shows 6 cards (2 rows of 3 on desktop) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initialProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* Archive Grid: Appears when showArchive is true */}
          <AnimatePresence>
            {showArchive && archiveProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="lg:col-span-1"
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Full-Width Section Divider Button */}
        <motion.div 
          initial={false}
          className="mt-16 relative py-4"
        >
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-200 dark:border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="group flex items-center gap-3 px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full font-bold text-slate-900 dark:text-white shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all active:scale-95"
            >
              <div className="bg-emerald-500 rounded-full p-1 text-white group-hover:rotate-90 transition-transform duration-300">
                {showArchive ? <ChevronUp size={18} /> : <Plus size={18} />}
              </div>
              <span className="text-sm tracking-wide">
                {showArchive 
                  ? (currentLang === 'am' ? "ተመለስ" : "Close Archive") 
                  : (currentLang === 'am' ? "ሌሎች ተግባራትን ይመልከቱ" : "View Other Activities")
                }
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;