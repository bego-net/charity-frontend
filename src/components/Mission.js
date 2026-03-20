import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Stars, Globe, Quote, Sparkles } from "lucide-react";

const Mission = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const missionData = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      titleAm: "የክርስቶስን ፍቅር መካፈል",
      titleEn: "Sharing Christ's Love",
      descAm: "ከክርስቶስ የተካፈልነውን ፍቅር በልግስና በኩል ለሌሎች መካፈል",
      descEn: "Sharing the Love of Christ through radical generosity to all.",
      verse: "ሲያጣ አይቶ ያልራራለት ማንም ቢሆን፥ የእግዚአብሔር ፍቅር በእርሱ እንዴት ይኖራል?",
      verseEn: "If anyone has material possessions and sees a brother in need but has no pity, how can the love of God be in them?",
      ref: "1 ዮሐንስ 3:17",
      refEn: "1 John 3:17",
      accent: "from-rose-500 to-pink-600",
      glow: "rgba(244, 63, 94, 0.3)", // External Glow
      bgInternal: "bg-rose-500/10", // Internal Box Color (matches icon)
      borderActive: "border-rose-500/40"
    },
    {
      id: 2,
      icon: <Stars className="w-8 h-8" />,
      titleAm: "ምስጋናን ማብዛት",
      titleEn: "Multiplying Thanks",
      descAm: "የቅዱሳንን ጉድለት በመሙላት ለእግዚአብሔር ብዙ ምስጋና ምክንያት መሆን",
      descEn: "Meeting needs to overflow in many expressions of thanks to God.",
      verse: "ይህ የምትሰጡት አገልግሎት የቅዱሳን ጉድለት የሚያሟላ ብቻ ሳይሆን፣ ብዙ ምስጋና ለእግዚአብሔር የሚቀርብበት ነው።",
      verseEn: "This service is not only supplying needs but is overflowing in thanks to God.",
      ref: "2 ቆሮንቶስ 9:12",
      refEn: "2 Cor 9:12",
      accent: "from-emerald-500 to-teal-600",
      glow: "rgba(16, 185, 129, 0.3)",
      bgInternal: "bg-emerald-500/10",
      borderActive: "border-emerald-500/40"
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      titleAm: "የአባቱ ብሩካን መሆን",
      titleEn: "Blessed of the Father",
      descAm: "የተራቡትን በማብላትና የታሰሩትን በመጎብኘት 'የአባቱ ብሩካን' መሆን",
      descEn: "Serving the hungry and visiting the prisoner to honor the Father.",
      verse: "ተርቤ አብልታችሁኛልና፥ ተጠምቼ አጠጥታችሁኛልና፥ እንግዳ ሆኜ ተቀብላችሁኛልና...",
      verseEn: "For I was hungry and you gave me food, I was a stranger and you invited me in...",
      ref: "ማቴዎስ 25:35",
      refEn: "Matthew 25:35",
      accent: "from-sky-500 to-indigo-600",
      glow: "rgba(14, 165, 233, 0.3)",
      bgInternal: "bg-sky-500/10",
      borderActive: "border-sky-500/40"
    }
  ];

  // Variants for synchronized scroll and hover animations
  const cardContainerVariants = {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    active: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    active: { opacity: 1, scale: 1.05 }
  };

  return (
    <section id="mission" className="relative py-24 lg:py-32 overflow-hidden bg-[#f8fafc] dark:bg-[#020408] transition-colors duration-700">
      
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6"
          >
            <Sparkles size={16} className="text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 dark:text-slate-400">
              {currentLang === 'am' ? "ተልዕኳችን" : "Our Mission"}
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter italic">
            {currentLang === 'am' ? "የአገልግሎት ዓላማችን" : "Divine Purpose"}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {missionData.map((item, index) => (
            <motion.div
              key={item.id}
              initial="initial"
              whileInView="active"
              whileHover="active"
              viewport={{ once: false, amount: 0.5 }} // Triggers when half visible
              variants={cardContainerVariants}
              className="group relative"
            >
              {/* EXTERNAL COLOR CHANGE (Glow) */}
              <motion.div 
                variants={glowVariants}
                className="absolute -inset-4 rounded-[4rem] blur-[40px] pointer-events-none z-0"
                style={{ backgroundColor: item.glow }}
              />

              {/* MAIN CARD BOX */}
              <div className="relative z-10 h-full p-10 lg:p-14 rounded-[3.5rem] bg-white/90 dark:bg-[#0a0f18] border-2 border-white dark:border-white/5 backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all duration-700">
                
                {/* INTERNAL COLOR CHANGE (Background Tint) */}
                <motion.div 
                  variants={{
                    initial: { opacity: 0 },
                    active: { opacity: 1 }
                  }}
                  className={`absolute inset-0 ${item.bgInternal} transition-opacity duration-700 pointer-events-none`}
                />

                {/* ACTIVE BORDER */}
                <motion.div 
                   variants={{
                     initial: { opacity: 0 },
                     active: { opacity: 1 }
                   }}
                   className={`absolute inset-0 rounded-[3.5rem] border-2 ${item.borderActive} pointer-events-none transition-all duration-700`}
                />

                <div className="relative z-20">
                  {/* Icon with gradient matching the box's specific color */}
                  <motion.div 
                    variants={{
                        initial: { rotate: 0, scale: 1 },
                        active: { rotate: 12, scale: 1.1 }
                    }}
                    className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 text-white shadow-2xl bg-gradient-to-br ${item.accent} transition-transform duration-500`}
                  >
                    {item.icon}
                  </motion.div>

                  <AnimatePresence mode="wait">
                    <motion.div key={currentLang} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-none">
                        {currentLang === 'am' ? item.titleAm : item.titleEn}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed mb-10 text-lg">
                        {currentLang === 'am' ? item.descAm : item.descEn}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative z-20 pt-10 border-t border-slate-200 dark:border-white/10 mt-auto">
                  <Quote className="absolute -top-4 -left-2 w-16 h-16 text-slate-100 dark:text-white/[0.05] -z-10" />
                  <p className="text-slate-800 dark:text-slate-200 italic leading-relaxed font-serif text-lg">
                    {currentLang === 'am' ? item.verse : item.verseEn}
                  </p>
                  <div className="mt-8">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-lg">
                      {currentLang === 'am' ? item.ref : item.refEn}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;