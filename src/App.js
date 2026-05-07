import React from "react";
import { Routes, Route } from "react-router-dom";
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

// Admin (hidden)
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import AdminMessages from "./admin/AdminMessages";
import ProtectedRoute from "./admin/ProtectedRoute";

// Main website layout (unchanged)
function MainSite() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#05070a] selection:bg-emerald-500/30">
      
      {/* Navbar */}
      <Navbar />

      {/* SINGLE PAGE SCROLL CONTENT */}
      <main>

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="mission">
          <Mission />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="goal">
          <Goals />
        </section>

        <section id="quotes">
          <BibleQuotes />
        </section>

        <section id="events">
          <EventsSection />
        </section>

        <section id="donate">
          <Donate />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Main website — exactly as before */}
      <Route path="/" element={<MainSite />} />

      {/* Hidden admin login */}
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Protected admin routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="messages" element={<AdminMessages />} />
      </Route>
    </Routes>
  );
}

export default App;