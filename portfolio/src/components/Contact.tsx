import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Waypoint } from "react-waypoint";
import { useReward } from "react-rewards";
import { useState } from "react";

type Props = {};

const Contact = (props: Props) => {
  const [firstRun, setFirstRun] = useState(false);

  const { reward: leftConfetti } = useReward("leftConfetti", "confetti", {
    zIndex: 10000,
    position: "absolute",
    angle: 45,
  });

  const { reward: leftBaloonConfetti } = useReward(
    "leftBaloonConfetti",
    "balloons",
    {
      zIndex: 10000,
      position: "absolute",
      angle: 60,
      startVelocity: 10,
      elementCount: 6,
      spread: 80,
      lifetime: 150,
    }
  );

  const { reward: rightConfetti } = useReward("rightConfetti", "confetti", {
    zIndex: 10000,
    position: "absolute",
    angle: 135,
    startVelocity: 50,
  });

  const { reward: rightBaloonConfetti } = useReward(
    "rightBaloonConfetti",
    "balloons",
    {
      zIndex: 10000,
      position: "absolute",
      angle: 150,
      startVelocity: 10,
      elementCount: 6,
      spread: 50,
      lifetime: 150,
    }
  );


  return (
    <>
      <div id='contact' className="bg-dark overflow-x-clip lg:h-auto lg:w-screen px-4 md:px-0  text-light flex justify-center relative">
        <div className=" lg:h-auto">
          <div className="my-16 flex flex-col md:flex-row lg:w-[1050px]">
            <div className="md:w-3/5 ">
              <h2 className="capitalize text-5xl font-bold font-roboto mb-10">
                Let's Talk
                <div id="leftConfetti" className=" absolute top-1/2 left-0" />
                <div
                  id="leftBaloonConfetti"
                  className=" absolute top-1/2 left-0"
                />
                <div
                  id="rightConfetti"
                  className=" absolute bottom-1/2 md:bottom-0 right-0"
                />
                <div
                  id="rightBaloonConfetti"
                  className=" absolute bottom-1/2 md:bottom-0 right-0 "
                />
              </h2>
              <div className="font-mulish text-base md:w-3/4 leading-7">
                <p className="mb-4 font-bold text-lg">You've made this far!</p>

                <p className="mb-4">
                  My inbox is always open. Whether you’d like to chat about a
                  project, have a question or just want to say hi, don't feel
                  shy to message me.
                </p>
                <p className="mb-4">
                  I am always ready to work on something challenging and fun!
                </p>
                <p className="mb-4">
                  Feel free to use the links below. I'll try my best to get back
                  to you!
                </p>
                <Waypoint
                  onEnter={() => {
                    if (!firstRun) {
                      leftConfetti();
                      leftBaloonConfetti();

                      rightConfetti();
                      rightBaloonConfetti();
                      setFirstRun(true);
                    }
                  }}
                />
                <div className="flex flex-col items-center md:items-start md:flex-row md:gap-5">
                  <a
                    href="mailto:@sahajdavework@pm.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      data-tip="Professional? Email Me!"
                      className="bg-dark text-light mt-6 md:mt-10 text-sm h-10 w-52 md:w-36 font-roboto hover:bg-light border border-light hover:border hover:border-dark hover:text-dark ease hover:ease transition-all flex items-center justify-center gap-2"
                    >
                      <MdEmail />
                      Email
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sahajdave/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      data-tip="Connect with me on Linkedin"
                      className="bg-dark text-light mt-6 md:mt-10 text-sm h-10 w-52 md:w-36 font-roboto hover:bg-light border border-light hover:border hover:border-dark hover:text-dark ease hover:ease transition-all flex items-center justify-center gap-2"
                    >
                      <FaLinkedin />
                      LinkedIn
                    </div>
                  </a>

                  <a
                    href="https://www.github.com/davesahaj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      data-tip="Checkout my Github!"
                      className="bg-dark text-light mt-6 md:mt-10 text-sm h-10 w-52 md:w-36 font-roboto hover:bg-light border border-light hover:border hover:border-dark hover:text-dark ease hover:ease transition-all flex items-center justify-center gap-2"
                    >
                      <BsGithub />
                      Github
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className=" mt-16 md:mt-0 md:w-2/5">
              <img src="/contact-me.svg" alt="contact me" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
