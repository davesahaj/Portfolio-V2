import ReactTooltip from "react-tooltip";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-40 bg-light/60 backdrop-blur-lg h-[60px] w-[100vw] flex items-end justify-between px-6 md:px-12 pb-3 shadow-md">
        <div className="">
          <span className="font-roboto text-4xl">Dave.</span>
        </div>
        <div className="hidden md:flex">
          <a
            href="/"
            onClick={(e) => {
              let about = document.getElementById("home");
              e.preventDefault();
              about && about.scrollIntoView();
            }}
          >
            <div className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 w-32 h-10 flex items-center justify-center">
              home
            </div>
          </a>
          <a
            href="/"
            onClick={(e) => {
              let about = document.getElementById("about");
              e.preventDefault();
              about && about.scrollIntoView();
            }}
          >
            <div className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 w-32 h-10 flex items-center justify-center">
              about me
            </div>
          </a>

          <a
            href="/"
            onClick={(e) => {
              let about = document.getElementById("portfolio");
              e.preventDefault();
              about && about.scrollIntoView();
            }}
          >
            <div className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 w-32 h-10 flex items-center justify-center">
              portfolio
            </div>
          </a>

          <a
            href="/"
            onClick={(e) => {
              let about = document.getElementById("contact");
              e.preventDefault();
              about && about.scrollIntoView();
            }}
          >
            <div className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 w-32 h-10 flex items-center justify-center">
              contact
            </div>
          </a>
        </div>
        <div className="flex">
          <a
            data-tip="Email"
            href="mailto:@sahajdavework@pm.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 text-xl md:text-base w-14 h-10 flex items-center justify-center"
          >
            <MdEmail />
          </a>

          <a
            data-tip="Linkedin"
            href="https://www.linkedin.com/in/sahajdave/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 text-xl md:text-base  w-14 h-10 flex items-center justify-center"
          >
            <FaLinkedin />
          </a>

          <a
            data-tip="GitHub"
            href="https://www.github.com/davesahaj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark capitalize cursor-pointer hover:text-dark ease hover:ease transition-all duration-200 text-xl md:text-base  w-14 h-10 flex items-center justify-center"
          >
            <BsGithub />
          </a>
        </div>
      </div>
      <ReactTooltip place="bottom" type="dark" effect="float" />
    </>
  );
};

export default Header;
