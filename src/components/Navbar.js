import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Globe, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { to: "/", label: t("navbar.home"), end: true },
    { to: "/about", label: t("navbar.about") },
    { to: "/events", label: t("navbar.events") },
    { to: "/contact", label: t("navbar.contact") },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%", transition: { type: "spring", stiffness: 400, damping: 40 } },
    opened: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 400, damping: 40, staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="container mx-auto px-4 md:px-12 flex justify-center">
        
        {/* MAIN PILL CONTAINER */}
        <div className={`flex items-center justify-between w-full max-w-7xl px-5 py-2.5 rounded-[2rem] transition-all duration-500 border shadow-2xl ${
          scrolled 
            ? "bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-2xl border-slate-200/50 dark:border-white/10" 
            : "bg-transparent border-transparent shadow-none"
        }`}>

          {/* BRANDING */}
          <NavLink to="/" className="flex items-center gap-3 group z-[110]">
            <div className="relative">
              <img
                src={logo}
                alt="Logo"
                className="w-9 h-9 md:w-11 md:h-11 rounded-full p-1 bg-white shadow-sm transition-transform group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm md:text-lg font-black tracking-tighter text-slate-900 dark:text-white uppercase font-heading">
                {t("navbar.orgName")}
              </span>
              <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 tracking-[0.2em] uppercase">
                {i18n.language === 'am' ? "በጎ አድራጎት" : "Charity"}
              </span>
            </div>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/50 dark:border-white/10">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to} className="relative">
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `relative px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                        isActive ? "text-white dark:text-slate-900" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div 
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full -z-10 shadow-lg"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                        {link.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* UTILITIES (Theme Toggle & Mobile Trigger) */}
          <div className="flex items-center gap-2 z-[110]">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all active:scale-90"
            >
              {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2.5 rounded-2xl transition-all ${isOpen ? 'bg-emerald-500 text-white rotate-90 scale-0 opacity-0' : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white'}`}
              onClick={() => setIsOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* MODERN FULL-SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="lg:hidden fixed inset-0 bg-white dark:bg-[#0d0d0d] z-[150] flex flex-col p-8"
          >
            {/* MOBILE HEADER (Always contains X and Dark Mode) */}
            <div className="flex justify-between items-center w-full mb-12">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 rounded-full bg-white shadow-md p-1" />
                <span className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  {t("navbar.orgName")}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-3 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300"
                >
                  {isDark ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Decorative Background for Mobile Menu */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={itemVariants}>
                  <NavLink 
                    to={link.to} 
                    className={({ isActive }) => `text-5xl font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-emerald-500' : 'text-slate-900 dark:text-white'}`}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="h-px bg-slate-200 dark:bg-white/10 my-4" />

              {/* Mobile Lang & Action */}
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Globe size={20} />
                    <span className="text-xs font-black uppercase tracking-widest">
                      {i18n.language === 'am' ? "ቋንቋ" : "Language"}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => changeLanguage('am')} className={`text-xl font-black ${i18n.language === 'am' ? 'text-emerald-500' : 'text-slate-300'}`}>AM</button>
                    <button onClick={() => changeLanguage('en')} className={`text-xl font-black ${i18n.language === 'en' ? 'text-emerald-500' : 'text-slate-300'}`}>EN</button>
                  </div>
                </div>

                <NavLink to="/donate" className="block">
                  <button className="w-full py-6 rounded-[2rem] bg-emerald-600 text-white font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20 active:scale-95 transition-transform">
                    <Heart size={24} fill="white" />
                    {t("navbar.donate")}
                  </button>
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;