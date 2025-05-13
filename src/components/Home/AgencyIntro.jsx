import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
import Container from "../Container/Container";
import CountUp from "react-countup";

export default function AgencyIntro() {
  return (
    <section className="w-full relative bg-[linear-gradient(90deg,#18191B_50%,#0E0F11_50%)]">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2  bg-[#18191b] h-[400px] flex flex-col items-center justify-center">
            {/* Left - Title */}
            <div className="space-y-6">
              <button className="px-8 py-2 text-[#ccc] border-[1px] border-[rgba(255, 255, 255, .3)] rounded-full font-semibold uppercase leading-tight">
                ABOUT US
              </button>
              <h2 className="text-[30px] font-bold text-white leading-tight w-[400px]">
                We are the USA-based company offering a wide Range of services
                at a competitively low cost.
              </h2>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#18191b] md:bg-[#0e0f11] h-[400px] flex flex-col items-center justify-center pt-80 md:pt-0 pb-36 md:pb-0">
            {/* Right - Text + Button */}
            <div className="space-y-8">
              <p className="text-[#ccc] font-semibold w-[400px]">
                Step into the future of digital excellence with Softvence
                Agency, where we provide a spectrum of services at a competitive
                cost! Our passionate team blends creativity with functionality,
                ensuring success that connects with vision. Softvence Agency –
                where quality meets affordability, creating a digital impact.
              </p>

              <Link
                to="#"
                className="relative group inline-flex items-center gap-2"
              >
                <div className="w-14 h-14 border border-[#ccc] rounded-full flex items-center justify-center absolute -top-4 -left-6 transition-all duration-300 group-hover:bg-white">
                  <BsArrowRight className="text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                <span className="font-semibold uppercase text-white transition-all duration-300 group-hover:translate-x-10">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Center - Stats */}
        <div className="flex justify-center items-center absolute top-[42%] md:top-[25%] left-[15%] md:left-[46%] ">
          <div className="border-[1px] border-[#ccc] px-10 py-8 text-center">
            <h3 className="text-[100px] font-bold text_stroke">
              <CountUp end={38} enableScrollSpy suffix="K" duration={2} />
            </h3>

            <p className=" text-white font-semibold text-[20px]">
              Completed Projects
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
