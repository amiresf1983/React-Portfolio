import React from "react";
import "../styles/footer.css";
import gitIcon from "../images/symbole-github-violet.png";
import mobileIcon from "../images/mobile-phone-icon.png";
import emailIcon from "../images/Mail-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import twitterIcon from "../images/twitter-bird-symbols-png.png";

function footer() {
  return (
    <footer className="footer" id="contactMe">
      <nav className="navDiv">
        <a className="contactIcon" href="https://github.com/amiresf1983">
          <img className="icon" src={gitIcon} alt="icon image" />
        </a>

        <a className="contactIcon" href="tel:+61490798966">
          <img className="icon" src={mobileIcon} alt="icon image" />
        </a>

        <a className="contactIcon" href="mailto:amir.esf1983@gmail.com">
          <img className="icon" src={emailIcon} alt="icon image" />
        </a>

        <a
          className="contactIcon"
          href="https://www.linkedin.com/in/amir-esfandiari-ba34641b1/"
        >
          <img className="icon" src={linkedinIcon} alt="icon image" />
        </a>

        <a href="https://twitter.com/amiresfandy" className="contactIcon">
          <img className="icon" src={twitterIcon} alt="icon image" />
        </a>
      </nav>
    </footer>
  );
}

export default footer;
