import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import { FaGithub, FaLock } from "react-icons/fa";

type Props = {};

const AutoplaySlider = withAutoplay(AwesomeSlider);

const projectItems = [
  {
    id: "cinenights",
    tech: ["rt", "sc", "js", "css", "rd", "ex", "db"],
    title: "Cine Nights",
    img: ["projectA1.png", "projectA2.png"],
    description: [
      `A full-stack web application to stream movies in sync using with Express serving a REST API with React as the frontend.`,
      `The live chat service and movie synchronization is implemented using socket.io.`,
      `Cine nights is an open source alternative to amazon prime watchparty to allow anyone to create their own movie server within minutes.`,
    ],
    githubURL: "https://www.github.com/davesahaj/cine-nights",
  },
  {
    id: "writepro",
    tech: ["rt", "js", "css", "dj"],
    title: "Write Pro",
    img: ["projectB2.png", "projectB5.png", "projectB4.png", "projectB3.png"],
    description: [
      `I Collaborated with a team of 4 to develop a research automation tool using django and React for academia.`,
      `I designed responsive data-driven components in the frontend to effectively search information using SPA.`,
      `I also worked on a learning algorithm using NLTK to tokenize information for AI based summary generation of research papers.`,
    ],
    githubURL: null,
  },
  {
    id: "linuxmonitor",
    tech: ["cpp"],
    title: "Linux System Monitor",
    img: ["projectE.png"],
    description: [
      `A terminal based system monitor built in C++ with NCurses as the display API.`,
      `Optimised to use GPU rendering in alacritty OpenGL emulator.`,
      `Made using OOPS approach in C++ with focus on Arch Linux and distros.`,
      `Supports StarShip and PowerLine to an extend.`,
    ],
    githubURL: "https://github.com/davesahaj/Linux-System-Monitor",
  },
  {
    id: "movementpattern",
    tech: ["htm", "js", "css", "bs", "db", "py", "fl"],
    title: "Movement Analyzer",
    img: ["projectC1.png", "projectC2.png", "projectC3.png", "projectC4.png"],
    description: [
      `Developed a data analyzer and a web interface in Bootstrap and flask.`,
      `I worked with PhD researchers to co-relate student movement behavior with academics.`,
      ` We analyzed and modeled huge chunks of raw Wi-Fi data to study movement patterns and created a full-stack web application to query the dataset for further research.`,
    ],
    githubURL: "https://github.com/davesahaj/student-movement-pattern",
  },
  {
    id: "coderscatalogue",
    tech: ["rt", "js", "css", "rd", "bs"],
    title: "Coders Catalogue",
    img: ["projectD.png"],
    description: [
      `An Open Source Cross Browser Extension built using React, Redux, Bootstrap.`,
      `Coders Catalogue allows users to manage and subscribe to upcoming competitive contests.`,
      `Kontest API is consumed to get data into redux middleware. A manual update button is also implemented.`,
    ],
    githubURL: "https://github.com/davesahaj/coders-catalogue-react-version",
  },
];

const Projects = (props: Props) => {
  return (
    <AutoplaySlider
      bullets={false}
      fillParent={false}
      play={true}
      cancelOnInteraction={true} // should stop playing on user interaction
      interval={2500}
    >
      {projectItems.map((item, index) => (
        <div className="flex flex-col-reverse justify-end md:justify-start md:flex-row w-full h-full py-20 md:py-0 px-6 lg:px-48 bg-light md:text-right">
          <div className="w-full md:w-2/5  md:flex items-end md:pr-10 justify-center flex-col md:relative">
            <h3 className="absolute text-3xl md:text-6xl top-0 md:top-[20%] md:left-5 font-monts mt-6 md:mt-0">{`Project .0${
              index + 1
            }`}</h3>
            <div className="font-roboto text-xl md:text-4xl mb-3 mt-10 md:mt-0">
              {item.title}
            </div>
            <div className="text-sm md:text-base text-justify md:text-left font-mulish md:leading-6">
              {item.description}
            </div>
            <a href={item.githubURL || ""}>
              <button className="bg-dark text-light mt-20 md:mt-10 text-sm h-10 w-full md:w-48 font-roboto hover:bg-light border border-dark hover:border hover:border-dark hover:text-dark ease hover:ease transition-all flex items-center justify-center gap-2">
                {item.githubURL === ("" || null) ? <FaLock /> : <FaGithub />}
                {item.githubURL === ("" || null) ? "proprietary" : "Github"}
              </button>
            </a>
          </div>
          <div className="md:w-3/5 xl:pl-12 2xl:pl-20 flex items-center relative">
            <img
              src={`/projects/${item.img[0]}`}
              alt={item.id}
              className="grayscale-[80%] hue-rotate-30 blur-sm"
            />
            <img
              src={`/projects/${item.img[1] || item.img[0]}`}
              alt={item.id}
              className="absolute left-0 w-3/4 md:w-[350px] 2xl:w-[600px] shadow-custom"
            />
          </div>
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Projects;
