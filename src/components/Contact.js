import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Mail, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  SendHorizontal, 
  Sparkles,
  Landmark,
  ExternalLink
} from "lucide-react";
import crossImage from "../assets/mekaneeyesus.png";

// Official Telegram SVG Icon
const TelegramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L2 10.5L11 13L19 7L13 15L18.5 21L22 2Z" fill="white" />
  </svg>
);

const Contact = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus(null), 6000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#fafafa] dark:bg-[#030508] transition-colors duration-700 overflow-hidden font-subheading">
      
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-sky-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6">
              <Sparkles size={14} className="text-emerald-600" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-700 dark:text-emerald-400">
                {currentLang === 'am' ? "ቅዱስ አገልግሎት" : "Divine Service"}
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8 font-heading leading-tight">
              {currentLang === 'am' ? "ቤቴል መካነ ኢየሱስ ሆሳዕና" : "Bethel Mekane Yesus Hossana"}
            </h2>

            <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2.5rem] bg-white dark:bg-white/5 p-6 border border-slate-200 dark:border-white/10 shadow-2xl">
              <img src={crossImage} alt="Church Logo" className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)]" />
            </motion.div>
          </motion.div>

          {/* RIGHT: Bento Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            
            {/* 1. Full-Width Form */}
            <motion.div 
              variants={itemVariants} initial="hidden" whileInView="visible"
              className="md:col-span-2 p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white outline-none focus:border-emerald-500 transition-colors"
                    placeholder={currentLang === 'am' ? "ሙሉ ስም" : "Full Name"} required
                  />
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white outline-none focus:border-emerald-500 transition-colors"
                    placeholder={currentLang === 'am' ? "ኢሜይል" : "Email Address"} required
                  />
                </div>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white outline-none focus:border-emerald-500 transition-colors"
                  placeholder={currentLang === 'am' ? "ስልክ (አማራጭ)" : "Phone (optional)"}
                />
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows="3"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white outline-none resize-none focus:border-emerald-500 transition-colors"
                  placeholder={currentLang === 'am' ? "መልእክትዎን እዚህ ይጻፉ..." : "Your Message"} required
                />
                
                <div className="relative">
                  <motion.button
                    type="submit" disabled={loading}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all"
                  >
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 
                    <><span className="uppercase tracking-widest text-sm">{currentLang === 'am' ? "መልእክት ላክ" : "Send Message"}</span><SendHorizontal size={18} /></>}
                  </motion.button>
                  <AnimatePresence>
                    {status && (
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 rounded-xl flex items-center justify-center gap-3 z-30">
                         {status === 'success' ? <div className="text-emerald-500 font-bold flex items-center gap-2 font-heading tracking-widest text-xl uppercase italic"><CheckCircle2 /> {currentLang === 'am' ? "ተልኳል!" : "Sent!"}</div> : <div className="text-red-500 font-bold flex items-center gap-2"><AlertCircle /> {currentLang === 'am' ? "ስህተት!" : "Error!"}</div>}
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>

            {/* 2. Phone & Email Info (Half Width) */}
            <motion.div 
              variants={itemVariants} initial="hidden" whileInView="visible"
              className="p-8 rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-lg space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 rounded-xl flex items-center justify-center shrink-0"><Phone size={20} /></div>
                <div className="text-xs">
                  <p className="uppercase font-black text-slate-400 tracking-widest mb-1">Phone</p>
                  <p className="text-slate-900 dark:text-white font-bold tracking-tight">+251 938665914</p>
                  <p className="text-slate-900 dark:text-white font-bold tracking-tight">+251 912243342</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-sky-100 dark:bg-sky-500/20 text-sky-600 rounded-xl flex items-center justify-center shrink-0"><Mail size={20} /></div>
                <div className="text-xs">
                  <p className="uppercase font-black text-slate-400 tracking-widest mb-1">Email</p>
                  <a href="mailto:yabatubrukan@gmail.com" className="text-slate-900 dark:text-white font-bold hover:text-emerald-500 truncate transition-colors">yabatubrukan@gmail.com</a>
                </div>
              </div>
            </motion.div>

            {/* 3. Bank Card (Half Width) */}
            <motion.div 
              variants={itemVariants} initial="hidden" whileInView="visible"
              className="p-8 rounded-[2rem] bg-emerald-600 text-white shadow-xl flex flex-col justify-center"
            >
              <Landmark size={24} className="opacity-40 mb-3" />
              <p className="text-[10px] uppercase font-black tracking-[0.2em] mb-1 opacity-80">Bank Account</p>
              <p className="text-base font-black font-mono leading-none">01325076451900</p>
              <p className="text-[9px] font-bold mt-2 opacity-70">Awash Bank • Betel Mekane Yesus</p>
            </motion.div>

            {/* 4. Telegram Card (Half Width - Original Icon) */}
            <motion.a 
              href="https://t.me/yabatubrukan" 
              target="_blank" 
              rel="noreferrer"
              variants={itemVariants} initial="hidden" whileInView="visible"
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-8 rounded-[2rem] bg-[#0088cc] text-white shadow-xl flex flex-col justify-between group transition-all"
            >
              <div className="flex justify-between items-start">
                <TelegramIcon />
                <ExternalLink size={18} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-2">
                
                <h6 className="text-xl font-black tracking-tight leading-none">Join Telegram</h6>
                
              </div>
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;