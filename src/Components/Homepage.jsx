import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx"; 
import Tilt from "react-parallax-tilt";
import WebDev from "../Images/WebDev.png"; // Make sure this path is correct
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Prajwal Pandgale</b>
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
    </div>
  );
};

export default Home;
