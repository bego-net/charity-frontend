import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Sparkles } from "lucide-react";
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

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { to: "/", label: t("navbar.home"), end: true },
    { to: "/about", label: t("navbar.about") },
    { to: "/events", label: t("navbar.events") },
    { to: "/contact", label: t("navbar.contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-2" : "py-6"}`}>
      <div className="container mx-auto px-4 md:px-12 flex justify-center">
        
        {/* --- MAIN FLOATING PILL --- */}
        <div className={`flex items-center justify-between w-full max-w-7xl px-4 md:px-5 py-2.5 rounded-full transition-all duration-500 border shadow-2xl ${
          scrolled 
            ? "bg-[#F4F2F3]/80 dark:bg-[#2C2C2C]/80 backdrop-blur-2xl border-[#C0A9BD]/20 dark:border-[#E4E4E4]/10" 
            : "bg-transparent border-transparent shadow-none"
        }`}>

          {/* LOGO & DYNAMIC NAME */}
          <NavLink to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="relative">
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full p-0.5 bg-white/80 dark:bg-white/10 transition-transform group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-[#B39CD0] blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            <span className="text-sm md:text-lg font-black tracking-tight text-[#64766A] dark:text-[#E4E4E4] max-w-[120px] md:max-w-none truncate">
              {t("navbar.orgName")}
            </span>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center bg-[#C0A9BD]/10 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to} className="relative">
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                        isActive ? "text-[#64766A] dark:text-[#2C2C2C]" : "text-[#64766A]/60 dark:text-[#E4E4E4]/60 hover:text-[#64766A]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div 
                            layoutId="active-pill"
                            className="absolute inset-0 bg-white dark:bg-[#B39CD0] rounded-full shadow-sm -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
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

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* --- LANGUAGE SWITCHER (FIXED) --- */}
            {/* Added 'hidden sm:flex' - visible on tablets and desktops */}
            <div className="hidden sm:flex items-center bg-[#C0A9BD]/10 dark:bg-white/5 rounded-full p-1 border border-black/5 dark:border-white/5">
              {['am', 'en'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`px-3 py-1 text-[10px] font-black rounded-full transition-all ${
                    i18n.language === lang 
                      ? "bg-[#64766A] dark:bg-[#B39CD0] text-white dark:text-[#2C2C2C] shadow-md" 
                      : "text-[#64766A]/40 dark:text-[#E4E4E4]/40 hover:text-[#64766A]"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* THEME TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#64766A] dark:text-[#E4E4E4] transition-all active:scale-90"
            >
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </button>

            {/* DONATE CTA */}
            <NavLink to="/donate" className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#64766A] dark:bg-[#B39CD0] text-white dark:text-[#2C2C2C] text-xs font-black shadow-lg shadow-[#64766A]/10 dark:shadow-black/20"
              >
                <Sparkles size={14} />
                {t("navbar.donate")}
              </motion.button>
            </NavLink>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden p-2 text-[#64766A] dark:text-[#E4E4E4]" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="lg:hidden fixed inset-x-4 top-24 bg-[#F4F2F3]/95 dark:bg-[#2C2C2C]/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-[#C0A9BD]/20 dark:border-[#E4E4E4]/10 p-8 z-[101]"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className="text-2xl font-black text-[#64766A] dark:text-[#E4E4E4]">
                  {link.label}
                </NavLink>
              ))}
              
              {/* Language toggle inside mobile menu for easy access */}
              <div className="flex justify-center gap-4 py-4 border-y border-[#64766A]/10 dark:border-white/10">
                <button 
                  onClick={() => changeLanguage('am')} 
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    i18n.language === 'am' ? 'bg-[#64766A] text-white dark:bg-[#B39CD0] dark:text-[#2C2C2C]' : 'opacity-40'
                  }`}
                >
                  አማርኛ 🇪🇹
                </button>
                <button 
                  onClick={() => changeLanguage('en')} 
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    i18n.language === 'en' ? 'bg-[#64766A] text-white dark:bg-[#B39CD0] dark:text-[#2C2C2C]' : 'opacity-40'
                  }`}
                >
                  English 🇬🇧
                </button>
              </div>

              <NavLink to="/donate">
                <button className="w-full py-4 rounded-full bg-[#64766A] dark:bg-[#B39CD0] text-white dark:text-[#2C2C2C] font-black text-lg">
                  {t("navbar.donate")}
                </button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;