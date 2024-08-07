import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/Prajp11" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/prajwal-pandgale-976204227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:pandgale.prajwal11@gmail.com" target="_blank" rel="noopener noreferrer">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
