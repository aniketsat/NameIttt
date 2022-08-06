import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navData = [
    {
      id: 1,
      title: "Portfolio",
      icon: <i className="bi bi-person-fill"></i>,
      url: "https://aniketsat.netlify.app/",
    },
    {
      id: 2,
      title: "Twitter",
      icon: <i className="bi bi-twitter"></i>,
      url: "https://twitter.com/aniketsat",
    },
    {
      id: 3,
      title: "Github",
      icon: <i className="bi bi-github"></i>,
      url: "https://github.com/aniketsat",
    },
  ];

  return (
    <div className="navbar">
      <ul>
        {navData.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <a
                className="list-item-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="list-item-icon">{item.icon}</span>
                <p className="list-item-title">{item.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
