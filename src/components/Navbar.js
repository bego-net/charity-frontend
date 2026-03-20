import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Heart, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "mission", "projects", "goal", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 85;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    { id: "home", label: t("navbar.home") },
    { id: "mission", label: currentLang === "am" ? "ራዕይ" : "Mission" },
    { id: "projects", label: t("navbar.events") },
    { id: "goal", label: currentLang === "am" ? "ግብ" : "Goal" },
    { id: "contact", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 flex justify-center">
        <div
          className={`flex items-center justify-between w-full max-w-7xl px-4 lg:px-6 py-2 rounded-[2.5rem] transition-all duration-700 border shadow-xl ${
            scrolled
              ? "bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-2xl border-white/40 dark:border-white/10 shadow-emerald-500/5"
              : "bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/5 shadow-none"
          }`}
        >
          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer z-[110]"
          >
            <img
              src={logo}
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full shadow-lg border-2 border-emerald-500/20"
              alt="Logo"
            />
            <span className="hidden sm:block font-black text-[14px] lg:text-[16px] tracking-tight text-slate-900 dark:text-white uppercase">
              {t("navbar.orgName")}
            </span>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center bg-slate-200/40 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 group ${
                      activeSection === link.id
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-500 rounded-full transition-all ${
                        activeSection === link.id
                          ? "w-4"
                          : "w-0 group-hover:w-4"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 lg:gap-4 z-[110]">
            {/* Theme */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-full bg-slate-200/60 dark:bg-white/10 border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white transition-all duration-500"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* LANGUAGE SWITCHER WITH FLAGS */}
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-white/10 rounded-full p-1 border border-black/5 dark:border-white/10">
  
  <button
    onClick={() => changeLanguage("am")}
    className={`flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-black transition-all ${
      currentLang === "am"
        ? "bg-emerald-500 text-white shadow-lg"
        : "text-slate-600 dark:text-slate-300"
    }`}
  >
    <img
      src="https://flagcdn.com/w20/et.png"
      alt="ET"
      className="w-4 h-4 rounded-full object-cover"
    />
    አማርኛ
  </button>

  <button
    onClick={() => changeLanguage("en")}
    className={`flex items-center gap-2 px-2 py-1 rounded-full text-[10px] font-black transition-all ${
      currentLang === "en"
        ? "bg-emerald-500 text-white shadow-lg"
        : "text-slate-600 dark:text-slate-300"
    }`}
  >
    <img
      src="https://flagcdn.com/w20/gb.png"
      alt="UK"
      className="w-4 h-4 rounded-full object-cover"
    />
    English
  </button>

</div>

            {/* MENU */}
            <button
              className="lg:hidden p-2.5 rounded-full text-slate-900 dark:text-white"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-[150] p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <img src={logo} className="w-10 h-10 rounded-full" alt="logo" />

              <button
                onClick={() => setIsOpen(false)}
                className="p-3 bg-slate-100 dark:bg-white/10 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* LINKS WITH ACTIVE STATE */}
            <div className="flex flex-col gap-6 mt-16">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center justify-between text-4xl font-black transition-all group ${
                    activeSection === link.id
                      ? "text-emerald-500 translate-x-2"
                      : "text-slate-900 dark:text-white hover:text-emerald-500"
                  }`}
                >
                  {link.label}

                  <ChevronRight
                    className={`transition-all ${
                      activeSection === link.id
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    } text-emerald-500`}
                    size={32}
                  />
                </motion.button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-5 bg-emerald-600 text-white rounded-[2rem] font-black"
              >
                <Heart size={20} className="inline mr-2" />
                {currentLang === "am" ? "ይርዱ" : "Donate"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;