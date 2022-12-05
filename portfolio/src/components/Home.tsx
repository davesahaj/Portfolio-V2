import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaRegFilePdf } from "react-icons/fa";

type Props = {};

const Home = (props: Props) => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current || "", {
      showCursor: true,
      strings: [
        "Frontend Engineer",
        "Open Source Enthusiast",
        "Freelance Developer",
      ],
      backDelay: 1200,
    });
  }, []);

  return (
    <div
      id="home"
      className="bg-light h-auto md:h-screen text-dark md:px-48 px-4 md:pt-[60px] flex flex-col-reverse md:flex-row items-center"
    >
      <div className="lg:w-3/5">
        <div className="text-4xl md:text-2xl mb-8">Hello,</div>
        <div className="text-5xl md:text-7xl mb-6 font-mulish font-semibold">
          <span className="block md:inline">I am </span>
          <span className="text-cherry">Sahaj</span> Dave
        </div>
        <div className="text-xl md:text-2xl mb-10 text-grey">
          I am a&nbsp;
          <span>
            <span className="text-cherry" ref={textRef}></span>
            <span>&nbsp;</span>
          </span>
        </div>
        <div className=" text-grey max-w-2xl">
          I'm a Frontend Engineer who focuses on writing clean, elegant and efficient code. Currently, I work with React ecosystem to
          develop awesome responsive web applications.
        </div>

        <button
          onClick={() =>
            window.open(
              "https://raw.githubusercontent.com/davesahaj/davesahaj/main/SahajDave_Resume.pdf",
              "_blank"
            )
          }
          className="bg-cherry text-light mt-10 md:mt-20 text-base mb-20 md:mb-0 md:text-sm h-14 md:h-10 w-48 font-roboto hover:bg-light border border-cherry hover:border hover:border-cherry hover:text-cherry ease hover:ease transition-all flex items-center justify-center gap-2"
          data-tip=""
        >
          <FaRegFilePdf />
          Resume
        </button>
      </div>
      <div className="w-screen h-72 mt-20 lg:mt-0 lg:w-2/5 md:h-full md:rounded-none bg-profile-pic bg-contain bg-no-repeat bg-bottom saturate-0"></div>
    </div>
  );
};

export default Home;
