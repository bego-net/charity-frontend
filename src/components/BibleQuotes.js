import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, Sparkles } from "lucide-react";

const BibleQuotes = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const quotes = [
    {
      textAm: "“ሁለት ልብስ ያለው ምንም ለሌለው ያካፍል፤ ምግብ ያለውም እንዲሁ ያድርግ.”",
      textEn: "“Anyone who has two shirts should share with the one who has none, and anyone who has food should do the same.”",
      verseAm: "ሉቃስ 3:11",
      verseEn: "Luke 3:11",
      // High-intensity theme colors
      accent: "from-emerald-400 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.4)", // Stronger Alpha for visibility
      hoverBg: "group-hover:bg-emerald-500/[0.08]" 
    },
    {
      textAm: "“በልግስና ስጠው፤ ስትሰጠውም ልብህ አይጸጸት....”",
      textEn: "“Give generously to them and do so without a grudging heart....”",
      verseAm: "ዘዳግም 15:10",
      verseEn: "Deuteronomy 15:10",
      accent: "from-amber-400 to-orange-500",
      glowColor: "rgba(245, 158, 11, 0.4)",
      hoverBg: "group-hover:bg-amber-500/[0.08]"
    },
    {
      textAm: "“ለድሀ ቸርነትን የሚያደርግ ለእግዚአብሔር ያበድራል”",
      textEn: "“Whoever is kind to the poor lends to the Lord.”",
      verseAm: "ምሳሌ 19:17",
      verseEn: "Proverbs 19:17",
      accent: "from-blue-400 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.4)",
      hoverBg: "group-hover:bg-blue-500/[0.08]"
    },
    {
      textAm: "“እግዚአብሔር በደስታ የሚሰጠውን ይወዳል.”",
      textEn: "“For God loves a cheerful giver.”",
      verseAm: "2 ቆሮ 9:7",
      verseEn: "2 Corinthians 9:7",
      accent: "from-rose-400 to-purple-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
      hoverBg: "group-hover:bg-rose-500/[0.08]"
    },
  ];

  return (
    <section id="bible-quotes" className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#020408] transition-colors duration-700">
      
      {/* Dynamic Background Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 shadow-inner"
          >
            <Sparkles size={16} className="text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-500 dark:text-slate-400">
              {currentLang === 'am' ? "ቅዱስ ቃል" : "The Living Word"}
            </span>
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter italic">
            {currentLang === 'am' ? "የሚመሩን ቃላት" : "Guided by Truth"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* EXTERNAL INTENSE GLOW (Outer Part) */}
              <div 
                className="absolute -inset-4 rounded-[4rem] opacity-0 group-hover:opacity-100 blur-[40px] transition-all duration-700 pointer-events-none z-0 scale-95 group-hover:scale-105"
                style={{ backgroundColor: quote.glowColor }}
              />

              {/* MAIN CARD (Interior Part) */}
              <div className={`relative z-10 h-full p-12 lg:p-16 rounded-[3.5rem] bg-white dark:bg-slate-900/40 border-2 border-slate-100 dark:border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 ${quote.hoverBg} group-hover:border-transparent group-hover:shadow-2xl`}>
                
                {/* Floating Gradient Orb inside card on hover */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${quote.accent}`} />

                <div className="relative z-20">
                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-24 h-2 rounded-full bg-gradient-to-r ${quote.accent} shadow-lg shadow-current/20`} />
                    <Quote className="text-slate-200 dark:text-white/10 group-hover:text-white/40 transition-colors duration-500" size={48} />
                  </div>
                  
                  <blockquote className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white leading-[1.4] mb-14 drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                    {currentLang === 'am' ? quote.textAm : quote.textEn}
                  </blockquote>

                  <div className="flex items-center gap-6">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${quote.accent} shadow-xl shadow-current/30 text-white transform group-hover:rotate-12 transition-transform duration-500`}>
                      <Sparkles size={24} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-1 font-bold">Verse Ref:</span>
                      <span className="text-sm font-black text-slate-900 dark:text-emerald-400 uppercase tracking-widest">
                        {currentLang === 'am' ? quote.verseAm : quote.verseEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner Glass Detail */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-white/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BibleQuotes;