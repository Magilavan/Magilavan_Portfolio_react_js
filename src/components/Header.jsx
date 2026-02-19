import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>My Portfolio</Link>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
          <span className={menuOpen ? "open" : ""}></span>
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li>
              <a href="/Magilavan(Resume).pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Resume</a>
            </li>
            <li>
              <a href="/Magilavan(Resume).pdf" download className="download-link" onClick={closeMenu}>Download</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
