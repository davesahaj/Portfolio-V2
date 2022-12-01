import { SiReact } from "react-icons/si";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-footer bg-cover bg-bottom 2xl:bg-center h-[540px] w-screen flex items-end justify-center">
      <h5 className="text-base text-light capitalize mb-44 flex flex-col items-center gap-2 font-mulish">
        <p className="animate-[spin_1800ms_linear_infinite] text-5xl">
          <SiReact />
        </p>
        <p>Developed by sahaj dave</p>
        <p>2022</p>
      </h5>
    </div>
  );
};

export default Footer;
