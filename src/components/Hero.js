import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Heart, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "../assets/bg-dark.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // 1. Font Class Constants
  const headingFont = "font-heading";    // Uses 'Entoto' from your CSS
  const subFont = "font-subheading";     // Uses 'Benaiah' from your CSS

  // 2. Dynamic Heading Size & Weight Logic
  // Amharic: font-black (thicker) and 8xl size
  // English: font-bold (standard bold) and 5xl size
  const responsiveTitleSize = currentLang === 'am' 
    ? "text-6xl md:text-7xl lg:text-7xl font-black" 
    : "text-4xl md:text-5xl lg:text-5xl font-bold";

  // 3. Force Two-Line Heading for English
  // 'max-w-md' limits the width so English text wraps exactly into two lines.
  const titleWrapperWidth = currentLang === 'am' 
    ? "max-w-full" 
    : "max-w-md lg:max-w-xl"; 

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#030508] transition-colors duration-700">
      
      {/* Premium Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 dark:bg-sky-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-20">
          
          {/* Left: Content Section */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-8">
                <Sparkles size={14} className="text-emerald-600 dark:text-emerald-400" />
                <span className={`text-[11px] uppercase tracking-[0.3em] font-bold text-emerald-800 dark:text-emerald-300 ${subFont}`}>
                  {t('hero.tagline', "Sharing the Father's Love")}
                </span>
              </div>

              {/* Main Heading with Language-Specific Logic */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLang}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={titleWrapperWidth}
                >
                  <h1 className={`${responsiveTitleSize} leading-[1.1] tracking-tight ${headingFont}`}>
                    <span className="text-slate-900 dark:text-white">
                       {t('hero.title', 'Blessed of the Father')}
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600 dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400">
                      {t('hero.subtitle', 'Charity Team')}
                    </span>
                  </h1>

                  {/* Verse Card */}
                  <div className="mt-10 group relative p-8 rounded-[2rem] bg-white/60 dark:bg-white/[0.03] border border-emerald-100 dark:border-white/[0.08] backdrop-blur-xl shadow-xl shadow-emerald-900/5 transition-all hover:border-emerald-300">
                    <p className={`text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic ${subFont}`}>
                      {t('hero.verse')}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-[3px] w-12 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full" />
                      <span className={`text-sm font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-[0.2em] ${subFont}`}>
                        {t('hero.ref')}
                      </span>
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-5">
                    <ScrollLink to="donate" smooth duration={800} offset={-80}>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full sm:w-auto px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/30 transition-all ${subFont}`}
                      >
                        <Heart size={22} className="fill-white" />
                        {t('hero.cta', 'Donate Now')}
                      </motion.button>
                    </ScrollLink>
                    
                    <ScrollLink to="mission" smooth duration={800} offset={-80}>
                      <button className={`w-full sm:w-auto px-12 py-6 bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/10 transition-all ${subFont}`}>
                        {t('hero.mission', 'Our Mission')}
                        <ArrowRight size={20} />
                      </button>
                    </ScrollLink>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right: Visual Section */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="relative z-10"
            >
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white dark:border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                <img
                  src={heroImage}
                  alt="Impact"
                  className="w-full h-[500px] lg:h-[700px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Social Proof Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-6 lg:-left-16 p-8 bg-white/90 dark:bg-slate-900/95 backdrop-blur-2xl border border-white dark:border-white/10 rounded-[2.5rem] shadow-2xl flex items-center gap-6"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-tr from-emerald-500 to-sky-400" />
                  ))}
                </div>
                <div>
                  <h4 className={`text-3xl font-black text-slate-900 dark:text-white leading-none ${subFont}`}>Powered by </h4>
                  <p className={`text-[11px] uppercase font-black text-emerald-600 tracking-tighter mt-1 ${subFont}`}>
                    {t('hero.donors', 'Kind Hearts ❤️')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;