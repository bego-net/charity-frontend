import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, X, Send,  Sparkles, Landmark, AlertCircle } from "lucide-react";

function Donate() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [showForm, setShowForm] = useState(false);
  const [showBankInfo, setShowBankInfo] = useState(false); // New state for bank info
  const [amount, setAmount] = useState("");
  

  const handlePresetClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Instead of calling the backend, we show the bank info as requested
    setShowBankInfo(true);
  };

  return (
    <section id="donate" className="relative min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#05070a] transition-colors duration-700">
      
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        
        {/* Multilingual Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <Sparkles size={16} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-emerald-700 dark:text-emerald-400">
            {currentLang === 'am' ? "መደገፍ" : "Support Us"}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white mb-12 text-center"
        >
          {currentLang === 'am' ? "አብረውን ያገልግሉ" : "Partner With Us"}
        </motion.h2>

        {/* Centerized Initial CTA Button */}
        {!showForm && (
          <div className="flex justify-center w-full"> 
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(16,185,129,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="group flex items-center gap-3 bg-emerald-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-xl"
            >
              <Heart className="group-hover:fill-white transition-all" />
              {currentLang === 'am' ? "አሁኑኑ ይለግሱ" : "Donate Now"}
            </motion.button>
          </div>
        )}

        {/* Animated Donation Form */}
        <AnimatePresence mode="wait">
          {showForm && !showBankInfo && (
            <motion.div
              key="donate-form"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              <div className="bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                <button onClick={() => setShowForm(false)} className="absolute top-6 right-8 text-slate-400 hover:text-red-500 transition-colors">
                  <X size={28} />
                </button>

                <form onSubmit={handleSubmit} className="text-left space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
                        {currentLang === 'am' ? "ሙሉ ስም" : "Full Name"}
                      </label>
                      <input type="text" name="name" required className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 dark:text-white outline-none" placeholder={currentLang === 'am' ? "ስምዎን ያስገቡ" : "John Doe"} />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
                        {currentLang === 'am' ? "ኢሜይል" : "Email Address"}
                      </label>
                      <input type="email" name="email" required className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 dark:text-white outline-none" placeholder="example@mail.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-2">
                      {currentLang === 'am' ? "የልገሳ መጠን ይምረጡ" : "Choose Amount"}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {[50, 100, 200, 500, 1000].map((value) => (
                        <button key={value} type="button" onClick={() => handlePresetClick(value)} className={`py-3 rounded-xl font-bold transition-all border ${amount === value ? "bg-emerald-600 border-emerald-600 text-white" : "bg-transparent border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"}`}>
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all"
                  >
                    <Send size={20} />
                    {currentLang === 'am' ? "ልገሳውን ያረጋግጡ" : "Confirm Donation"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}

          {/* MODERN BANK ACCOUNT UI DISPLAY */}
          {showBankInfo && (
            <motion.div
              key="bank-info"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-xl mx-auto"
            >
              <div className="bg-white dark:bg-slate-900 border-2 border-emerald-500/30 rounded-[3rem] p-10 shadow-2xl text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
                
                <div className="flex flex-col items-center gap-4 mb-8">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-600">
                        <Landmark size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                        {currentLang === 'am' ? "የባንክ ሂሳብ መረጃ" : "Bank Account Information"}
                    </h3>
                </div>

                <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-4 flex items-start gap-3 mb-8 text-left">
                    <AlertCircle className="text-amber-600 shrink-0" size={20} />
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        {currentLang === 'am' 
                          ? "ይቅርታ፣ የመስመር ላይ ክፍያ አገልግሎቱ ለጊዜው አልተገኘም። እባክዎ ይህን የባንክ ሂሳብ ይጠቀሙ።" 
                          : "This service is unavailable currently. Please use the bank account below."}
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 group transition-all hover:border-emerald-500/50">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">
                            {currentLang === 'am' ? "የባንክ ስም" : "Bank Name"}
                        </span>
                        <span className="text-xl font-bold text-slate-800 dark:text-emerald-400">Awash Bank</span>
                    </div>

                    <div className="p-6 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 group transition-all hover:border-emerald-500/50">
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">
                            {currentLang === 'am' ? "የሂሳብ ቁጥር" : "Account Number"}
                        </span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white tracking-widest">01325076451900</span>
                    </div>
                </div>

                <button 
                  onClick={() => {setShowBankInfo(false); setShowForm(false);}}
                  className="mt-10 text-slate-500 dark:text-slate-400 font-bold hover:text-emerald-500 transition-colors"
                >
                    {currentLang === 'am' ? "ተመለስ" : "Go Back"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Donate;