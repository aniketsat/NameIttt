import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Made with ❤️ by{" "}
        <a
          className="footer-link"
          href="https://aniketsat.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Aniket Satapathy
        </a>
      </p>
    </div>
  );
};

export default Footer;
