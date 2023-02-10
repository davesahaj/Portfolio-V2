type Props = {};

const workExp = [
  {
    year: "Dev 2022 - Present",
    company: "TechLadd",
    desc: "Frontend Engineer at Sprih Labs(client). My role includes React optimisations, refactoring, code reviews and development.",
  },
  {
    year: "Apr 2022 - Nov 2022",
    company: "Mcfadyen Digital",
    desc: "Developed React based progressive web app storefront components to faciliate wishlist items and cart checkout. Implemented contentful models allowing consistent information to be re-synced in storefront and CMS. Created caching solution using lodash and memoization techniques to significantly improve performance.",
  },
  {
    year: "Sept 2021 - Feb 2022",
    company: "Tribal Desert",
    desc: "Freelanced for a B2B shipping startup to work on their pilot E-Commerce project. My task was to update the existing code in a reusable scalable format using styled components and SASS along with creating custom hooks for caching purposes and implementing Redux.",
  },
  {
    year: "Jan 2021 - June 2021",
    company: "DA-IICT",
    desc: "Collaborated with a team of 4 to develop a research automation tool using django and React. I designed responsive data-driven components in the frontend to effectively search information using SPA. I also worked on a learning algorithm using NLTK to tokenize information for AI based summary generation of research papers.",
  },

  {
    year: "May 2020 - Aug 2020",
    company: "DA-IICT",
    desc: "I worked with PhD researchers for a part of the project that aims to co-relate student movement behavior with academics. We analyzed and modeled huge chunks of raw Wi-Fi locational data to study movement patterns and created a full-stack web application to manage and query the dataset for further research.",
  },
];

const Portfolio = (props: Props) => {
  return (
    <div
      id="portfolio"
      className="bg-gradient-to-tr from-[#a31af0] to-[#fe006f] lg:h-auto px-4 md:px-0 py-16 lg:w-screen  text-dark flex items-center justify-center"
    >
      <div className="lg:w-[1050px] md:px-20">
        <h2 className="capitalize text-4xl font-light text-light font-roboto text-center">
          Experience
        </h2>
        <h4 className="capitalize text-lg font-light text-light font-roboto mt-3 mb-20  text-center">
          Peek into my frontend development journey
        </h4>

        {workExp.map((item, index) => (
          <div key={index}
            className={`flex flex-col md:flex-row items-center md:items-start text-light font-roboto mb-24 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
          >
            <div
              className={`flex flex-col items-center  ${index % 2 === 0 ? "md:items-end" : "md:items-start"
                }`}
            >
              <h3 className="text-xl font-semibold font-mulish">
                {item.company}
              </h3>
              <h4 className="text-sm font-semibold font-mulish">{item.year}</h4>
            </div>
            <div className="w-[3px] md:w-[6px] h-[80px] md:h-[38px]  bg-light md:mt-1 md:mx-6 rotate-90 md:rotate-0" />
            <div
              className={`px-4 md:px-0 md:w-3/4 text-center ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
