import React from "react";
import "./styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Aboutme"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
            a
          >
            ABOUT ME
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            CONTACT
          </a>
        </li>

        <li className="nav-item" id="resume">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            RESUME
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
