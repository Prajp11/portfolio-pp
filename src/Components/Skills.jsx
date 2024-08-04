import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiSpringboot, SiTailwindcss, SiMysql, SiIbm } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 className="icon" />,
    CSS: <FaCss3 className="icon" />,
    JavaScript: <DiJavascript1 className="icon" />,
    Bootstrap: <FaBootstrap className="icon" />,
    Tailwind: <SiTailwindcss className="icon" />,
    Java: <FaJava className="icon" />,
    React: <FaReact className="icon" />,
    Git: <FaGitAlt className="icon" />,
    GitHub: <FaGithub className="icon" />,
    "Spring Boot": <SiSpringboot className="icon" />,
    SQL: <SiMysql className="icon" />,
    Mainframe: <SiIbm className="icon" />,
  };

  return (
    <div className="SkillBox">
      {icon[skill]}
      <p>{skill}</p>
    </div>
  );
};

export default Skills;
