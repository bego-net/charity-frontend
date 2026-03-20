import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";

function EventsSection() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const events = [
    {
      title: { am: "የበዓል ድጋፍ", en: "Holiday Support" },
      image: "/images/event1.jpg",
      description: { 
        am: "በበዓላት ወቅት ለተቸገሩ ወገኖች የምናደርገው ልዩ ድጋፍ", 
        en: "Providing specialized support to those in need during festive seasons." 
      },
    },
    {
      title: { am: "የተማሪዎች ምርቃት", en: "Students Graduation" },
      image: "/images/event2.jpg",
      description: { 
        am: "የተማሪዎቻችንን ስኬት አብረን የምናከብርበት ደማቅ በዓል", 
        en: "Celebrating the hard-earned success of our community students." 
      },
    },
    {
      title: { am: "እንግዶችን መቀበል", en: "Welcoming Guests" },
      image: "/images/event4.jpg",
      description: { 
        am: "ከተለያዩ ቦታዎች ለመጡ ስደተኞች የመኖሪያ ቤት እና አስፈላጊውን ነገር ማዘጋጀት", 
        en: "Arranging housing and basic necessities for arriving refugees." 
      },
    },
    {
      title: { am: "ገቢ ማሰባሰቢያ", en: "Fundraising Drive" },
      image: "/images/event6.jpg",
      description: { 
        am: "ዕቃዎች በመሸጥ ለሕብረቱ ገቢ በማሰባሰብ ላይ የሚደረግ ጥረት", 
        en: "Community efforts to raise funds through charity sales and events." 
      },
    },
    {
      title: { am: "የሆስፒታል ጉብኝት", en: "Hospital Ministry" },
      image: "/images/event8.jpg",
      description: { 
        am: "ለህሙማን በመፀለይ እና የተለያዩ ድጋፎችን በማድረግ አብሮነታችንን የምንገልጽበት", 
        en: "Showing solidarity through prayer and support for the hospitalized." 
      },
    },
    {
      title: { am: "የገና በአል", en: "Christmas Celebration" },
      image: "/images/event11.jpg",
      description: { 
        am: "የሕብረቱ አባላት በዓልን ከተቸገሩ ወገኖች ጋር ለማክበር ሲሰባሰቡ", 
        en: "Members gathering to celebrate the holidays with the underprivileged." 
      },
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [paused, setPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % events.length);
  }, [events.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + events.length) % events.length);
  }, [events.length]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [paused, handleNext]);

  // Framer Motion Variants for Modern Slide + Fade
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "20%" : "-20%",
      opacity: 0,
      filter: "blur(10px)",
      scale: 1.1
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      x: direction > 0 ? "-20%" : "20%",
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.9,
      transition: { duration: 0.6 }
    })
  };

  return (
    <section id="events" className="relative py-24 bg-white dark:bg-[#05070a] transition-colors duration-700 overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Consistent with Goals Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-700 dark:text-emerald-400">
              {currentLang === 'am' ? "ማስታወሻዎች" : "Our Gallery"}
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white">
            {currentLang === 'am' ? "የማህበረሰብ እንቅስቃሴዎች" : "Recent Events"}
          </h2>
        </div>

        {/* Cinematic Slider Container */}
        <div className="relative max-w-6xl mx-auto h-[500px] md:h-[650px] group">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="absolute inset-0 w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-white/5"
            >
              {/* The Image with "Ken Burns" subtle zoom */}
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear" }}
                src={events[index].image}
                alt={events[index].title[currentLang]}
                className="w-full h-full object-cover"
              />

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

              {/* Text Content Reveal */}
              <div className="absolute bottom-0 left-0 p-10 md:p-20 w-full">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 text-emerald-400 font-bold tracking-widest text-xs uppercase">
                    <Calendar size={16} />
                    <span>{currentLang === 'am' ? "መጋቢት 2018" : "March 2026"}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                    {events[index].title[currentLang]}
                  </h3>
                  
                  <p className="text-slate-300 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
                    {events[index].description[currentLang]}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Glassmorphism style */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-10 right-4 md:-right-10 flex justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Visual Pagination */}
        <div className="flex justify-center gap-4 mt-12">
          {events.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`group relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                i === index ? "w-16 bg-emerald-500" : "w-4 bg-slate-200 dark:bg-slate-800"
              }`}
            >
              {i === index && (
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 bg-white/30"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsSection;