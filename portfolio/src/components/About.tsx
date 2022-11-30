import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaNpm,
  FaSass,
  FaYarn,
  FaGit,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiAntdesign,
  SiJavascript,
  SiGraphql,
  SiRedux,
  SiPostman,
  SiVite,
  SiPnpm,
  SiPostcss,
  SiDocker,
  SiEslint,
  SiNetlify,
  SiHeroku,
  SiArchlinux,
} from "react-icons/si";



type Props = {};

const About = (props: Props) => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    { name: "NPM", icon: <FaNpm /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "React", icon: <FaReact /> },
    { name: "Pnpm", icon: <SiPnpm /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Yarn", icon: <FaYarn /> },
    { name: "Ant Design", icon: <SiAntdesign /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "Sass", icon: <FaSass /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "ESLint", icon: <SiEslint /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "PostCSS", icon: <SiPostcss /> },
    { name: "Netlify", icon: <SiNetlify /> },
    { name: "Heroku", icon: <SiHeroku /> },
    { name: "Linux", icon: <SiArchlinux /> },
  ];

  useEffect(() => {
    let i = 0;
    const toggleSkills = setInterval(() => {
      setActiveSkill(i);
      i++;
      if (i == skills.length) {
        i = 0;
      }
    }, 300);

    return () => {
      clearInterval(toggleSkills);
    };
  }, []);

  return (
    <div id='about' className="bg-dark lg:h-[700px] lg:w-screen  px-4 md:px-0 text-dark flex items-center justify-center">
      <div className="h-auto lg:w-[1050px]">
        <div className=" mt-16">
          <h2 className="capitalize text-3xl text-light font-light font-roboto border-b border-cherry">
            about me
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className="text-md text-light font-mulish md:w-1/2 my-10 md:mb-0 md:mt-14 text-left md:text-right leading-6">
            <p className="mb-3">
              I am Sahaj Dave, a Front-End Web Developer based out of Pune. I
              love to combine logic and design to develop accessible
              user-friendly{" "}
              <span className="text-cherry">web applications</span>.
            </p>
            <p className="mb-3">
              I currently work with React Typescript Ecosystem, I have exquisite
              knowledge on JS debugging, optimisations and
              <span className="text-cherry"> accessibility</span>.
            </p>
            <p className="mb-3">
              I have a{" "}
              <span className="textx-cherry">diverse set of skills</span>,
              ranging from scalable complex web development to working on{" "}
              <span className="text-cherry">system level applications</span> and
              custom kernels. I have a passion for open source alternatives,
              code optimizations, and creating intuitive, user friendly
              applications.
            </p>
            <p className="mb-3">
              I'm a well-organised person with good problem solving skills. I'm
              excited to refine my skills with the right company and ambitious
              people. Feel free to take a look at{" "}
              <span className="text-cherry">my recent projects</span> below.
            </p>
            BTW, I use Arch.
          </div>
          <div className="text-light md:w-1/2 mt-14 flex items-center justify-center text-5xl md:text-7xl flex-col md:h-72">
            <div data-tip="Things I work with" className="mb-4">
              {skills[activeSkill].icon}
            </div>
            <div
              data-tip="Things I work with"
              className="font-sans font-thin"
            >
              {skills[activeSkill].name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
