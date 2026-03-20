import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, ExternalLink, Sparkles, Plus } from "lucide-react";

import project1 from "../assets/gallery/project1.jpg";
import project2 from "../assets/gallery/project2.jpg";
import project3 from "../assets/gallery/project3.jpg";
import project4 from "../assets/gallery/project4.jpg";
import project5 from "../assets/gallery/project5.jpg";

const ProjectCard = ({ project, index }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl"
    >
      {/* Background Image with Zoom & Overlay */}
      <motion.img
        src={project.image}
        alt={project.titleEn}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          filter: isHovered ? "blur(2px) brightness(0.5)" : "blur(0px) brightness(0.8)" 
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

      {/* Content Layer */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Tag/Category */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-md mb-4">
            <Sparkles size={12} className="text-emerald-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300">
              {currentLang === 'am' ? "የተሳካ ስራ" : "Impact Story"}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentLang}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                {currentLang === 'am' ? project.titleAm : project.titleEn}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Expandable Description */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isHovered ? "auto" : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-slate-300 text-sm leading-relaxed font-medium">
              {currentLang === 'am' ? project.descAm : project.descEn}
            </p>
            
            <button className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 group/btn">
              {currentLang === 'am' ? "ዝርዝር መረጃ" : "View Details"}
              <div className="p-2 rounded-full bg-white/10 group-hover/btn:bg-emerald-500 group-hover/btn:text-white transition-all">
                <Plus size={14} />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
          <ExternalLink size={20} />
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const projects = [
    {
      id: 1,
      titleAm: "ተማሪዎችን ማስተማር",
      titleEn: "Educating Students",
      descAm: "በተለያዩ ምክንያቶች መማር ያልቻሉ የአቅመ ደካሞችን ልጆች ማስተማር።",
      descEn: "Providing full scholarships and supplies for children whose families cannot afford schooling.",
      image: project1,
    },
    {
      id: 2,
      titleAm: "የታመሙ ሰዎችን መጠየቅ",
      titleEn: "Visiting the Sick",
      descAm: "በሕክምና ማዕከል የታመሙ ሰዎችን ሄዶ መጠየቅ እና ማሳከም፣ በሚያስፈልጋቸው ነገር መርዳት።",
      descEn: "Weekly visits to medical wards to provide financial aid for medicine and spiritual comfort.",
      image: project2,
    },
    {
      id: 3,
      titleAm: "ታራሚዎች መጠየቅ",
      titleEn: "Prison Ministry",
      descAm: "የታሰሩ ሰዎችን መጠየቅ እና መርዳት።",
      descEn: "Supporting incarcerated individuals with basic hygiene kits and family reconnection services.",
      image: project3,
    },
    {
      id: 4,
      titleAm: "የጎዳና ተዳዳሪዎች መርዳት",
      titleEn: "Street Outreach",
      descAm: "በተለያዩ ጊዜያት የምገባ ፕሮግራም ማዘጋጀት እንዲሁም ስራ ማስጀመር።",
      descEn: "Sustainable feeding programs and vocational training to help individuals transition off the streets.",
      image: project4,
    },
    {
      id: 5,
      titleAm: "ተፈናቃዮችን መቀበል",
      titleEn: "Displaced Families",
      descAm: "ከተለያዩ ቦታዎች ተሰደው የመጡ ሰዎችን መቀበል እና በሚያስፈልጋቸው ነገር መርዳት።",
      descEn: "Providing emergency shelter and essential resources for families fleeing regional conflicts.",
      image: project5,
    },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-[#05070a] transition-colors duration-700">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
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
          <button className="hidden lg:flex items-center gap-3 px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-all">
            {currentLang === 'am' ? "ሁሉንም ስራዎች ይመልከቱ" : "View Archive"}
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Interactive Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;