// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ Home Page (contains everything) */}
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
              <Contact />
            </>
          }
        />

        {/* ✅ Optional: Separate pages if you want to navigate directly */}
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsSection />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
