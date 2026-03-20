import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Users, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import aboutImg from "../assets/about.jpg";

function About() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Font class constants
  const headingFont = "font-heading"; // Entoto
  const subFont = "font-subheading"; // Benaiah

  const features = [
    { 
      icon: <ShieldCheck className="w-5 h-5" />, 
      title: currentLang === 'am' ? "ግልጽነት" : "Transparency",
      desc: currentLang === 'am' ? "ታማኝነት መመሪያችን ነው" : "Integrity is our guide"
    },
    { 
      icon: <Users className="w-5 h-5" />, 
      title: currentLang === 'am' ? "ማህበረሰብ" : "Community",
      desc: currentLang === 'am' ? "በህብረት እናገለግላለን" : "Serving together"
    },
    { 
      icon: <Heart className="w-5 h-5" />, 
      title: currentLang === 'am' ? "ፍቅር" : "Compassion",
      desc: currentLang === 'am' ? "በእምነት የሚመራ ድጋፍ" : "Faith-led support"
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#fafafa] dark:bg-[#030508] py-24 lg:py-32 transition-colors duration-700">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Right Side: Visuals */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] p-3 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Our Journey"
                  className="rounded-[2.5rem] w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 z-20 p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600">
                    <Calendar size={24} />
                  </div>
                  <div className={subFont}>
                    <p className="text-2xl font-black text-slate-900 dark:text-white">2011 <span className="text-sm font-normal">ዓ.ም</span></p>
                    <p className="text-[10px] text-slate-500 dark:text-emerald-400 uppercase font-bold tracking-widest">{currentLang === 'am' ? "ተመሰረተ" : "Established"}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Modern Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 mb-4">
                <Sparkles size={14} className="text-emerald-600" />
                <span className={`text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700 dark:text-emerald-400 ${subFont}`}>
                  {currentLang === 'am' ? "ስለ እኛ" : "About Us"}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Heading using Entoto */}
                  <h2 className={`text-5xl lg:text-6xl font-black leading-tight mb-8 ${headingFont}`}>
                    <span className="text-slate-900 dark:text-white">
                      {currentLang === 'am' ? "የአባቱ ቡሩካን" : "Blessed of the Father"}
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600 dark:from-emerald-400 dark:to-sky-400">
                      {currentLang === 'am' ? "ታሪካችን እና ህብረታችን" : "Our Story & Fellowship"}
                    </span>
                  </h2>

                  {/* Body Text using Benaiah */}
                  <div className={`space-y-6 text-slate-700 dark:text-slate-300 text-lg lg:text-xl leading-relaxed max-w-2xl ${subFont}`}>
                    <p className="relative pl-6 border-l-4 border-emerald-500/40 italic">
                      {currentLang === 'am' 
                        ? "የአባቱ ቡሩካን ሕብረት በልግስና የፀጋ ስጦታ የሚያገለግል ሕብረት ሲሆን ስያሜውን ያገኘው በመጽሐፍ ቅዱስ የመጀመሪያው የወንጌል መጽሐፍ ከሆነው ከ(ማቴዎስ 25፥34) 'የአባቴ ቡሩካን' ከሚለው የተወሰደ ነው።"
                        : "The Blessed of the Father fellowship serves through the gift of generosity, drawing its name from the Gospel of Matthew 25:34, 'Come, you who are blessed by my Father.'"}
                    </p>
                    
                    <p>
                      {currentLang === 'am'
                        ? "አመራረጡ በ2011 ዓ.ም ወርሀ ሐምሌ ላይ በቤቴል መካነ ኢየሱስ የአገልግሎት ትምህርት ተማሪዎች የተጀመረ ሲሆን በ2013 ዓ.ም ወርሀ ጥር 03 ቀን በቤቴል መካነ ኢየሱስ አባላት እና አገልጋዮችን በማፍራት 42 ቅዱሳን በአባልነት ይዞ እንደ ሕብረት ተመሠረተ።"
                        : "Founded in July 2011 E.C. by students of Bethel Mekane Yesus, it was officially established as a fellowship in January 2013 E.C. with 42 founding members and ministers."}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Feature Grid using Benaiah */}
              <div className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 ${subFont}`}>
                {features.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.4)" }}
                    className="p-5 bg-white dark:bg-white/[0.03] rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-md font-black text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;