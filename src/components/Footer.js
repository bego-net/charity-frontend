import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUp, Heart, Globe } from "lucide-react";

const Footer = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white dark:bg-[#030508] border-t border-slate-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Heart size={20} className="text-white" fill="white" />
              </div>
              <span className="text-xl font-black font-heading tracking-tighter text-slate-900 dark:text-white uppercase">
                {currentLang === 'am' ? "የአባቱ ብሩካን" : "Father Blessed"}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm leading-relaxed font-subheading">
              {currentLang === 'am' 
                ? "በምህረት እና በማህበረሰብ ተግባር ተስፋን መገንባት። ለተቸገሩት የፍቅር እጅ እንዘርጋ።" 
                : "Building hope through compassion and community action. Together, we can make a difference in the lives of those who need it most."}
            </p>
          </div>

          {/* Telegram Call to Action */}
          <div className="md:col-span-4 flex flex-col md:items-center">
             <motion.a
                href="https://t.me/yabatubrukan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/20 p-4 rounded-2xl transition-all group"
              >
                <div className="w-10 h-10 bg-[#0088cc] rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L2 10.5L11 13L19 7L13 15L18.5 21L22 2Z" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-[#0088cc] tracking-widest leading-none mb-1">Join Our Channel</p>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">@yabatubrukan</p>
                </div>
              </motion.a>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-3 flex justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-slate-400">
             <p>© 2026 Father Blessed Charity Team</p>
             <span className="hidden md:block w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full" />
             <p>{currentLang === 'am' ? "መብቱ በህግ የተጠበቀ ነው" : "All Rights Reserved"}</p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full">
              <Globe size={14} className="text-emerald-500" />
              <span>{currentLang === 'am' ? "አማርኛ / English" : "English / Amharic"}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;