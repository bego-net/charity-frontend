import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import "./fonts.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import BibleQuotes from "./components/BibleQuotes";
import EventsSection from "./components/EventsSection";
import Donate from "./components/Donate";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] selection:bg-emerald-500/30">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Mission />
                <Projects />
                <Goals />
                <BibleQuotes />
                <EventsSection />
                <Donate />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;