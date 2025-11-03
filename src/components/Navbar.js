// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: "linear-gradient(135deg, #1b1a1a, #1b1a1a)",
        padding: "15px 20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container-fluid">
        {/* Logo + Brand Name */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <span style={{fontFamily:"'Benaiah', 'serif'",  fontWeight: "bold", color: "#FFCE1B" }}>
            የአባቱ ብሩካን
          </span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/events", label: "Events" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Donate Button */}
            <li className="nav-item">
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-danger fw-bold px-4 py-2 active-link"
                    : "btn btn-danger fw-bold px-4 py-2"
                }
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 0 15px rgba(255,0,0,0.4)",
                }}
                onClick={closeMenu}
              >
                Donate
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
