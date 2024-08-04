import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Prajwal Pandgale</b> and I am from Pune,
            India. I'm a <b>Web Developer</b> with experience in <b>Java, HTML, CSS, Spring Boot, JavaScript, SQL,</b> and <b>Mainframe Technologies</b>. <br />
            <br />
            I love to create projects with efficient designs and innovative solutions. You can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new opportunities and collaborations where I can contribute and grow. Feel free to connect with me, links are in the footer.
            <br />
            Apart from coding, I enjoy exploring new technologies and working on personal projects to enhance my skills.
          </p>
          <a href="/MyResume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload />
            </button>
          </a>
        </div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="JavaScript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="GitHub" />
        <Skills skill="Java" />
        <Skills skill="Spring Boot" />
        <Skills skill="SQL" />
        <Skills skill="Mainframe" />
      </div>
    </>
  );
};

export default About;
