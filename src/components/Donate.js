import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, X, Send, CreditCard, Sparkles } from "lucide-react";

function Donate() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const handlePresetClick = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donationData = {
      donorName: e.target.name.value,
      donorEmail: e.target.email.value,
      amount: amount || customAmount,
      message: message
    };

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/donate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      const data = await res.json();
      if (data.success && data.checkout_url) {
        localStorage.setItem("last_tx_ref", data.tx_ref);
        window.location.href = data.checkout_url;
      } else {
        alert(currentLang === 'am' ? "❌ ክፍያው አልተሳካም። እባክዎ እንደገና ይሞክሩ።" : "❌ Payment initialization failed.");
      }
    } catch (error) {
      console.error(error);
      alert(currentLang === 'am' ? "⚠️ ከሰርቨር ጋር መገናኘት አልተቻለም።" : "⚠️ Error connecting to server.");
    }
  };

  return (
    <section id="donate" className="relative min-h-screen py-24 flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-[#05070a] transition-colors duration-700">
      
      {/* Decorative Background Elements - Matches Goals page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
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
          className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white mb-12"
        >
          {currentLang === 'am' ? "አብረውን ያገልግሉ" : "Partner With Us"}
        </motion.h2>

        {/* Initial CTA Button */}
        {!showForm && (
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
        )}

        {/* Animated Donation Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="relative w-full max-w-2xl mx-auto mt-10"
            >
              <div className="bg-white dark:bg-slate-900/50 backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                
                {/* Form Close Button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-6 right-8 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X size={28} />
                </button>

                <form onSubmit={handleSubmit} className="text-left space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
                        {currentLang === 'am' ? "ሙሉ ስም" : "Full Name"}
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 dark:text-white outline-none transition-all"
                        placeholder={currentLang === 'am' ? "ስምዎን ያስገቡ" : "John Doe"}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
                        {currentLang === 'am' ? "ኢሜይል" : "Email Address"}
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 dark:text-white outline-none transition-all"
                        placeholder="example@mail.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4 px-2">
                      {currentLang === 'am' ? "የልገሳ መጠን ይምረጡ" : "Choose Amount"}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                      {[50, 100, 200, 500, 1000].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => handlePresetClick(value)}
                          className={`py-3 rounded-xl font-bold transition-all border ${
                            amount === value 
                            ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20 scale-105" 
                            : "bg-transparent border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-emerald-500"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                       <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                       <input
                        type="number"
                        className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 pl-12 text-slate-900 dark:text-white outline-none transition-all"
                        placeholder={currentLang === 'am' ? "ሌላ መጠን ያስገቡ" : "Or enter custom amount"}
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount("");
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
                      {currentLang === 'am' ? "መልእክት (ካለዎት)" : "Message (Optional)"}
                    </label>
                    <textarea
                      className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-emerald-500/50 rounded-2xl p-4 text-slate-900 dark:text-white outline-none transition-all"
                      rows="3"
                      placeholder={currentLang === 'am' ? "መልእክትዎን እዚህ ይጻፉ..." : "Your words of encouragement..."}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-3 transition-all"
                  >
                    <Send size={20} />
                    {currentLang === 'am' ? "ልገሳውን ያረጋግጡ" : "Confirm Donation"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Donate;