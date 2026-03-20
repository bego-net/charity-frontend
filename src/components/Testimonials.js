import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, MessageSquare, Star } from "lucide-react";

function Testimonials() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Helper to apply Benaiah font only for Amharic
  const amharicFont = currentLang === "am" ? "font-amharic" : "";

  const testimonials = [
    {
      name: "Sara T.",
      role: { am: "ወርሃዊ ለጋሽ", en: "Monthly Donor" },
      quote: {
        am: "ግልጽ የሆኑ ዝመናዎችን ማየቴ እያንዳንዱ ልገሳ ችግረኛ ቤተሰቦች ጋር መድረሱን እንድተማመን ያደርገኛል።",
        en: "Seeing the transparent updates makes me confident that every donation truly reaches families in need.",
      },
      color: "from-emerald-500/20",
    },
    {
      name: "Daniel M.",
      role: { am: "በጎ ፈቃደኛ", en: "Volunteer" },
      quote: {
        am: "ቡድኑ የአካባቢውን መሪዎች ያበረታታል እንዲሁም ቅድሚያ ያዳምጣል። ተፅዕኖው ግላዊ እና ዘላቂ ነው።",
        en: "The team empowers local leaders and listens first. The impact is personal and lasting.",
      },
      color: "from-sky-500/20",
    },
    {
      name: "Hana G.",
      role: { am: "የማህበረሰብ አጋር", en: "Community Partner" },
      quote: {
        am: "የተከበርን እና የተደገፍን ሆኖ ይሰማናል። ፕሮጀክቶቹ ክብርን ይመልሳሉ እድሎችንም ይፈጥራሉ።",
        en: "We feel respected and supported. The projects restore dignity and create opportunities.",
      },
      color: "from-purple-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden bg-[#fafafa] dark:bg-[#05070a] transition-colors duration-700">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <MessageSquare size={14} className="text-emerald-600 dark:text-emerald-400" />
            <span className={`text-[10px] uppercase tracking-[0.4em] font-black text-emerald-700 dark:text-emerald-400 ${amharicFont}`}>
              {currentLang === 'am' ? "ምስክርነቶች" : "Testimonials"}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 ${amharicFont}`}
          >
            {currentLang === 'am' ? "የተስፋ ድምጾች" : "Voices of Hope"}
          </motion.h2>
          <p className={`text-slate-500 dark:text-slate-400 text-lg ${amharicFont}`}>
            {currentLang === 'am' 
              ? "የምናደርገው ጉዞ በሰዎች ህይወት ላይ እያመጣ ያለው ለውጥ በራሳቸው አንደበት።" 
              : "Real stories from those who have experienced the power of community firsthand."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] blur-2xl`} />
              
              <div className="relative h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/5 p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col justify-between">
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />
                      ))}
                    </div>
                    <Quote className="text-slate-200 dark:text-slate-800" size={40} />
                  </div>

                  {/* Apply Amharic Font to the Quote */}
                  <p className={`text-lg lg:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic mb-8 ${amharicFont}`}>
                    "{item.quote[currentLang]}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
                      {item.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-none mb-1">
                      {item.name}
                    </h4>
                    {/* Apply Amharic Font to the Role */}
                    <p className={`text-xs uppercase tracking-widest font-black text-emerald-600 dark:text-emerald-400 ${amharicFont}`}>
                      {item.role[currentLang]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className={`text-slate-400 text-sm font-medium ${amharicFont}`}>
            {currentLang === 'am' ? "በመቶዎች በሚቆጠሩ ሰዎች የታመነ" : "Trusted by hundreds of community members"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;