import { FaGithub } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";

type Props = {};

const Extras = (props: Props) => {
  return (
    <div className="bg-dark h-auto lg:w-screen  text-dark flex items-center justify-center py-16">
      <div className=" lg:h-auto lg:w-[1050px]">
        <div className="my-10 md:my-16 flex flex-col gap-20 md:gap-0 md:flex-row items-center  justify-evenly">

          <div className="flex flex-col text-light gap-4 items-center capitalize">
            <div className="h-[140px] w-[140px] bg-gradient-to-tr from-[#a31af0] to-[#fe006f] rounded-full flex items-center justify-center text-5xl">
              <FaGithub />
            </div>
            <p>59+ Github Repositories</p>
            <p className="text-sm">700+ commits</p>
          </div>

          <div className="flex flex-col text-light gap-4 items-center capitalize">
            <div className="h-[140px] w-[140px] bg-gradient-to-tr from-[#a31af0] to-[#fe006f] rounded-full flex items-center justify-center text-5xl">
              <SiCodechef />
            </div>
            <p>Global Rank 44</p>
            <p className="text-sm capitalize"> Codechef FZBZ21C</p>
          </div>

          <div className="flex flex-col text-light gap-4 items-center capitalize">
            <div className="h-[140px] w-[140px] bg-gradient-to-tr from-[#a31af0] to-[#fe006f] rounded-full flex items-center justify-center text-5xl">
              <SiLeetcode />
            </div>
            <p>250+ DSA questions solved</p>
            <p className="text-sm "> accross all coding platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extras;
