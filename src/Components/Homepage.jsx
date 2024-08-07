import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import WebDev from "../Images/WebDev.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello Everyone</h1>
          <h1>
            I am <b>Prajwal Pandgale</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>
          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="WebDev" src={WebDev} alt="Web Developer" />
        </Tilt>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
