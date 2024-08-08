import React from "react";
import BMSClone from "../Images/BMSClone.png";
import CPSProject from "../Images/CPSProject.png"; // Import your CPSProject image
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <div className="project-image">
          <img src={BMSClone} alt="Book My Show Clone" />
          <div className="overlay">
            <div className="text">
              <h3>Book My Show Clone</h3>
              <p>
                <span className="technologies">Technologies:</span>{" "}
                <span className="skill">React</span>,{" "}
                <span className="skill">Tailwind CSS</span>,{" "}
                <span className="skill">TMDB API</span>
              </p>
              <a
                href="https://github.com/Prajp11/book-my-show-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-image">
          <img src={CPSProject} alt="Claims Processing System" />
          <div className="overlay">
            <div className="text">
              <h3>Claims Processing System</h3>
              <p>
                <span className="company">
                  Projects done under Mainframe Domain in Wipro:
                </span>
                <br />
                <span className="technologies">Technologies:</span>{" "}
                <span className="skill">CICS</span>,{" "}
                <span className="skill">DB2</span>,{" "}
                <span className="skill">COBOL</span>,{" "}
                <span className="skill">ADV-COBOL</span>,{" "}
                <span className="skill">JCL</span> <br />
                Similar to the <span className="skill">Banking System</span>{" "}
                project. Both the projects are mentioned in my resume for your
                reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
