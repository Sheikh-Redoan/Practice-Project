import CountUp from "react-countup";
import { BiCheckCircle } from "react-icons/bi";
import Container from "../Container/Container";
import { BsBehance } from "react-icons/bs";

const AwardsSection = () => {
  const data = [
    {
      icon: <BsBehance className="w-12 h-12 text-white" />,
      title: "BEHANCE AWARDS",
      desc: "2x Featured design of the week",
      year: "2010",
    },
    // {
    //   icon: "/icons/design.svg",
    //   title: "DESIGN AWARDS",
    //   desc: "Creative Best design of the day",
    //   year: "2013",
    // },
    // {
    //   icon: "/icons/code.svg",
    //   title: "CODING AWARDS",
    //   desc: "Creative agency of the day",
    //   year: "2016",
    // },
  ];

  return (
    <section className="bg-[#18191b] py-20">
      <Container className="flex items-center justify-center gap-20">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-white">
              <div className="bg-[#2a2d32] px-10 py-11 ">
                {item?.icon}
              </div>

              <div className="bg-[#2a2d32] px-8 py-[30px] w-[400px] flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <h4 className="text-[20px] uppercase font-semibold">{item.title}</h4>
                  <p className="font-normal text-gray-400 text-[12px]">{item.desc}</p>
                </div>
                <p className="text-[50px] font-bold text_stroke_year">
                  {item.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-[100px] font-bold leading-none">
            <CountUp end={40} suffix="+" duration={2} enableScrollSpy />
          </h2>
          <p className="text-lg font-medium max-w-sm">
            We have won 40+ awards and we believe in quality.
          </p>

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
              <div key={i} className="flex gap-4 items-start">
                <BiCheckCircle className="text-lime-400 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold">{item.label}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AwardsSection;
