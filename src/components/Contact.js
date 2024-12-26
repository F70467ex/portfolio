import React from "react";
import "../styles/Contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Contact = () => {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <p>Email: meftouhi123@gmail.com</p>
      <p>Téléphone: +212 6 48 01 30 68</p>
      <div className="social-links">
        <a href="https://github.com/F70467ex" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/ayoub-el-meftouhi-94731916a/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin icon"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
