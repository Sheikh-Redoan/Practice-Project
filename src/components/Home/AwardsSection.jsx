import CountUp from "react-countup";
import { BiCheckCircle } from "react-icons/bi";
import Container from "../Container/Container";
import { BsBehance } from "react-icons/bs";
import { FaLayerGroup, FaVuejs } from "react-icons/fa";

const AwardsSection = () => {
  const data = [
    {
      icon: <BsBehance className="w-12 h-12 text-white" />,
      title: "BEHANCE AWARDS",
      desc: "2x Featured design of the week",
      year: "2010",
    },
    {
      icon: <FaLayerGroup className="w-12 h-12 text-white" />,
      title: "DESIGN AWARDS",
      desc: "Creative Best design of the day",
      year: "2013",
    },
    {
      icon: <FaVuejs className="w-12 h-12 text-white" />,
      title: "CODING AWARDS",
      desc: "Creative agency of the day",
      year: "2016",
    },
  ];

  return (
    <section className="relative bg-[#0E0F11] py-18">
      {/* Glow Background */}
      <div className="absolute right-4 bottom-0 h-[400px] w-[400px] bg-[#3b86f6] opacity-30 blur-[150px] "></div>

      <Container className="flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Left Column */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-white">
              <div className="bg-[#2a2d32] px-10 py-11 hidden md:block ">
                {item?.icon}
              </div>

              <div className="bg-[#2a2d32] px-8 py-[30px] max-sm:w-[350px] sm:w-[500px] flex flex-col md:flex-row justify-between items-center">
                <div className="bg-[#2a2d32] px-10 py-0 md:py-11 md:hidden block mb-2 ">
                  {item?.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] uppercase font-semibold">
                    {item.title}
                  </h4>
                  <p className="font-normal text-gray-400 text-[12px]">
                    {item.desc}
                  </p>
                </div>
                <p className="text-[50px] font-bold text_stroke_year">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <table className="order-1 md:order-2">
          <tr>
            <td
              style={{
                borderLeft: "1px solid #27282A",
                borderBottom: "1px solid #27282A",
                padding: "0px 0px 20px 20px",
              }}
            >
              <h2 className="md:text-[200px] text-[150px] font-bold leading-none text-white">
                <CountUp end={40} suffix="+" duration={2} enableScrollSpy />
              </h2>
              <p className="text-[27px] text-white font-medium max-w-sm">
                We have won 40+ awards and we believe in quality.
              </p>
            </td>
          </tr>

          <tr>
            <td
              style={{
                borderLeft: "1px solid #27282A",
                padding: "20px 0px 0px 20px",
              }}
            >
              <div className="mt-4 flex flex-col gap-6">
                {[
                  {
                    label: "Top Brand",
                    desc: "We help brands stand out via visual design",
                  },
                  {
                    label: "Skill Developer",
                    desc: "With more than 12 years real experience.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <BiCheckCircle className="text-lime-400 mt-1" size={30} />
                    <div>
                      <h4 className="font-semibold text-[20px] text-white">
                        {item.label}
                      </h4>
                      <p className="text-md text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </table>
      </Container>
    </section>
  );
};

export default AwardsSection;
