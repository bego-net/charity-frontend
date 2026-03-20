import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Target, ShieldCheck, Zap } from "lucide-react";

function Goals() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="goals" className="relative py-24 lg:py-32 overflow-hidden bg-[#fafafa] dark:bg-[#05070a] transition-colors duration-700">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
            >
              <Target size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-700 dark:text-emerald-400">
                {currentLang === 'am' ? "ራዕያችን" : "Our Vision"}
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white"
            >
              {currentLang === 'am' ? "ዋናው ግባችን" : "The Ultimate Goal"}
            </motion.h2>
          </div>

          {/* Interactive Goal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-emerald-400/20 to-sky-400/20 shadow-2xl overflow-hidden"
          >
            <div className="relative bg-white dark:bg-slate-950 rounded-[2.8rem] p-8 lg:p-20 overflow-hidden">
              
              {/* Glassmorphic Background Shapes inside the card */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors duration-700" />
              
              <div className="relative z-10 text-center space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLang}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-2xl lg:text-4xl font-bold leading-relaxed lg:leading-[1.6] text-slate-800 dark:text-slate-100 italic">
                      {currentLang === 'am' 
                        ? "“ከክርስቶስ የተካፈልነውን ፍቅር ለሌሎች በመግለጥ ሰዎችን ወደ እግዚአብሔር መንግሥት በመጥራት እና በመጨመር፤ ከሙላታቸው ብቻ ሳይሆን ከጉድለታቸው ለሌሎች በመቆረስ እንዲኖሩ ማስቻል ነው።”"
                        : "“To reflect the love of Christ by inviting souls into the Kingdom of God, empowering them to live a life of generosity—sharing not just from their abundance, but from their very needs.”"}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Impact Indicators */}
                <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="text-emerald-500 mb-2" size={32} />
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Faith Led</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Zap className="text-sky-500 mb-2" size={32} />
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Action Oriented</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold mb-2">❤</div>
                    <span className="text-xs uppercase tracking-widest font-bold text-slate-400">Heart Centered</span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Label */}
              <div className="absolute top-10 left-10 opacity-10 dark:opacity-5">
                <Target size={120} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Goals;