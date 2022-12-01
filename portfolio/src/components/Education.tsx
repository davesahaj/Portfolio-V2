import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SiHackerrank } from "react-icons/si";
import {
  FaCuttlefish,
  FaUniversity,
  FaStar,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

type Props = {};

const Education = (props: Props) => {
  return (
    <div className="bg-gradient-to-tr from-[#bcbcbc] to-light px-4 md:px-0 h-auto lg:w-screen  text-dark flex items-center justify-center overflow-hidden">
      <div className=" lg:h-auto lg:w-[1050px]">
        <div className="my-16">
          <h2 className="uppercase text-4xl font-semibold text-center font-mulish mb-20">
            Qualifications
          </h2>
          <div className="">
            <h2 className="text-2xl md:text-center font-monts capitalize">
              Education
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                position="left"
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#292929", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #292929",
                }}
                iconStyle={{ background: "#292929", color: "#fff" }}
                icon={<FaUniversity />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Dhirubhai Ambani Institute of Information and Communication
                  Technology
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  2019-2021
                </h4>
                <p>Master of Science (Information Technology)</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                position="right"
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#fff", color: "#000" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #fff",
                }}
                iconStyle={{ background: "#fff", color: "#000" }}
                icon={<FaUniversity />}
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Symbiosis International University
                </h3>
                <h4 className="vertical-timeline-element-subtitle ">
                  2016-2019
                </h4>
                <p>Bachelor of Computer Applications</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <h2 className="text-2xl md:text-center font-monts capitalize">
              Certificates
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                position="left"
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#5851d3", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #5851d3",
                }}
                iconStyle={{ background: "#5851d3", color: "#fff" }}
                icon={<FaCuttlefish />}
              >
                <h3 className="vertical-timeline-element-title">
                  Cutshort Certified Javascript - Advanced
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Cutshort</h4>
                <p className="flex justify-start items-center gap-2">
                  ID: 64790{" "}
                  <a
                    className="text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cutshort.io/certificate/64790"
                  >
                    <FaExternalLinkSquareAlt />
                  </a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                position="right"
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#0d141e", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #0d141e",
                }}
                iconStyle={{ background: "#0d141e", color: "#00ea63" }}
                icon={<SiHackerrank />}
              >
                <h3 className="vertical-timeline-element-title">
                  HackerRank certified JavaScript Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  HackerRank
                </h4>
                <p className="flex justify-start items-center gap-2">
                  ID: f8397ca87dbb{" "}
                  <a
                    className="text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hackerrank.com/certificates/f8397ca87dbb"
                  >
                    <FaExternalLinkSquareAlt />
                  </a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                position="left"
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#0d141e", color: "#fff" }}
                contentArrowStyle={{
                  borderRight: "7px solid  #0d141e",
                }}
                iconStyle={{ background: "#0d141e", color: "#00ea63" }}
                icon={<SiHackerrank />}
              >
                <h3 className="vertical-timeline-element-title">
                  HackerRank certified React Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  HackerRank
                </h4>
                <p className="flex justify-start items-center gap-2">
                  ID: DD5C26BB3E45{" "}
                  <a
                    className="text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.hackerrank.com/certificates/dd5c26bb3e45"
                  >
                    <FaExternalLinkSquareAlt />
                  </a>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#000", color: "#fff" }}
                icon={<FaStar />}
              />
            </VerticalTimeline>
          </div>

          {/* <div className="flex justify-evenly items-center mb-10">
            <div className="font-bold font-mulish text-xl text-[]">2019 - 2021</div>
            <div>
              <h4 className="w-[500px] text-center font-mulish font-bold mb-2 text-xl">
                Dhirubhai Ambani Institute of Information and Communication
                Technology
              </h4>
              <h6 className="text-center  font-roboto ">Master of Science (Information Technology)</h6>
            </div>
            <img
              src="/logos/daiict.png"
              alt="DA-IICT logo"
              className="h-[100px]"
            />
          </div>
          <div className="flex justify-evenly  items-center">
            <div className="font-bold font-mulish text-xl text-[]">2016 - 2019</div>
            <div>
              <h4 className="w-[500px] text-center font-mulish font-bold mb-2 text-xl">Symbiosis International University</h4>
              <h6 className="text-center  font-roboto">Bachelor of Computer Applications</h6>
            </div>
            <img
              src="/logos/symbiosis.png"
              alt="DA-IICT logo"
              className="h-[100px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
