import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            About Me !
          </h1>
          <p>
            Hi there! I’m Prajwal Pandgale, a <b>Web Developer</b> from Pune, India. 
            My journey in tech has been shaped by working with <b>Java, HTML, CSS, Spring Boot, JavaScript, SQL</b> and <b>Mainframe Technologies.</b> 
            <br />
            <br />I love diving into projects that challenge me and push the envelope on design and functionality. 
            Creating user-friendly and innovative solutions is what drives me. I am always excited to do experiments with new technologies and find fresh ways to solve problems. If you check out my projects, you'll see how I turn ideas into reality with a blend of creativity and technical expertise.
            <br />
            <br />
            <br />I am <b>open</b> to new opportunities and collaborations where I can contribute and grow. Feel free to connect with me, links are in the footer.
            <br />
            Apart from coding, I enjoy exploring new technologies and working on personal projects to enhance my skills.
          </p>
          <a href="../Resume/MyResume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload />
            </button>
          </a>
        </div>

        <div></div>
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
