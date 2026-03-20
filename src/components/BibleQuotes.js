import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, Sparkles } from "lucide-react";

const BibleQuotes = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // ✅ store multiple active cards
  const [activeIndexes, setActiveIndexes] = useState(new Set());

  const quotes = [
    {
      textAm: "“ሁለት ልብስ ያለው ምንም ለሌለው ያካፍል፤ ምግብ ያለውም እንዲሁ ያድርግ.”",
      textEn: "“Anyone who has two shirts should share with the one who has none, and anyone who has food should do the same.”",
      verseAm: "ሉቃስ 3:11",
      verseEn: "Luke 3:11",
      accent: "from-emerald-400 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      hoverBg: "bg-emerald-500/[0.08]"
    },
    {
      textAm: "“በልግስና ስጠው፤ ስትሰጠውም ልብህ አይጸጸት....”",
      textEn: "“Give generously to them and do so without a grudging heart....”",
      verseAm: "ዘዳግም 15:10",
      verseEn: "Deuteronomy 15:10",
      accent: "from-amber-400 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      hoverBg: "bg-amber-500/[0.08]"
    },
    {
      textAm: "“ለድሀ ቸርነትን የሚያደርግ ለእግዚአብሔር ያበድራል”",
      textEn: "“Whoever is kind to the poor lends to the Lord.”",
      verseAm: "ምሳሌ 19:17",
      verseEn: "Proverbs 19:17",
      accent: "from-blue-400 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      hoverBg: "bg-blue-500/[0.08]"
    },
    {
      textAm: "“እግዚአብሔር በደስታ የሚሰጠውን ይወዳል.”",
      textEn: "“For God loves a cheerful giver.”",
      verseAm: "2 ቆሮ 9:7",
      verseEn: "2 Corinthians 9:7",
      accent: "from-rose-400 to-purple-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
      hoverBg: "bg-rose-500/[0.08]"
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#020408] transition-colors duration-700">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {quotes.map((quote, index) => {
            const isActive = activeIndexes.has(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                
                // ✅ ADD when enters
                onViewportEnter={() =>
                  setActiveIndexes((prev) => new Set(prev).add(index))
                }

                // ✅ REMOVE when leaves (optional but better)
                onViewportLeave={() =>
                  setActiveIndexes((prev) => {
                    const newSet = new Set(prev);
                    newSet.delete(index);
                    return newSet;
                  })
                }

                viewport={{ amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className={`absolute -inset-4 rounded-[4rem] blur-[40px] transition-all duration-700 pointer-events-none z-0
                  ${isActive ? "opacity-100 scale-105" : "opacity-0 scale-95"}`}
                  style={{ backgroundColor: quote.glowColor }}
                />

                {/* Card */}
                <div
                  className={`relative z-10 h-full p-12 lg:p-16 rounded-[3.5rem] border-2 backdrop-blur-3xl overflow-hidden transition-all duration-500
                  ${isActive ? quote.hoverBg : ""}
                  bg-white dark:bg-slate-900/40 border-slate-100 dark:border-white/5
                  ${isActive ? "border-transparent shadow-2xl" : ""}
                  `}
                >
                  
                  {/* Orb */}
                  <div
                    className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] transition-opacity duration-700
                    ${isActive ? "opacity-30" : "opacity-0"}
                    bg-gradient-to-br ${quote.accent}`}
                  />

                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-12">
                      <div className={`w-24 h-2 rounded-full bg-gradient-to-r ${quote.accent}`} />
                      <Quote
                        className={`transition-colors duration-500
                        ${isActive ? "text-white/40" : "text-slate-200 dark:text-white/10"}`}
                        size={48}
                      />
                    </div>

                    <blockquote
                      className={`text-2xl lg:text-3xl font-black leading-[1.4] mb-14 transition-transform duration-500
                      ${isActive ? "scale-[1.02]" : ""}
                      text-slate-900 dark:text-white`}
                    >
                      {currentLang === 'am' ? quote.textAm : quote.textEn}
                    </blockquote>

                    <div className="flex items-center gap-6">
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${quote.accent} shadow-xl shadow-current/30 text-white transform transition-transform duration-500
                        ${isActive ? "rotate-12" : ""}`}
                      >
                        <Sparkles size={24} />
                      </div>

                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-1 font-bold">
                          Verse Ref:
                        </span>
                        <span className="text-sm font-black text-slate-900 dark:text-emerald-400 uppercase tracking-widest">
                          {currentLang === 'am' ? quote.verseAm : quote.verseEn}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BibleQuotes;