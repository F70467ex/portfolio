import React from "react";
import "../styles/Header.css";


const Header = () => {
  return (
    <header className="header">
      <img src="/profile.png"  alt="Profile" className="profile-image" />
      <h1> Ayoub EL Meftouhi</h1>
      <p>Développeur Full Stack | Laravel | React.js</p>
    </header>
  );
};

export default Header;
