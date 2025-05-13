import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Container from "../Container/Container";
import { Link } from "react-router";
import { BsArrowRight } from "react-icons/bs";

const teamMembers = [
  {
    name: "Istiak Ahmed",
    role: "CEO & Founder",
    image: "/src/assets/images/member_1.jpg", 
  },
  {
    name: "Kevin Martin",
    role: "Product Manager",
    image: "/src/assets/images/member_2.jpg",
  },
  {
    name: "Sarah Albert",
    role: "Financial Consultant",
    image: "/src/assets/images/member_3.jpg",
  },
  {
    name: "Jason Joey",
    role: "Developer",
    image: "/src/assets/images/member_4.jpg",
  },
];

const TeamSection = () => {
  return (
    <section
      className="text-white py-20 md:py-28 relative"
      style={{
        backgroundImage: `
      repeating-linear-gradient(
        45deg,
        #202123 0px,
        #202123 2px,
        #101113 2px,
        #101113 4px
      ),
      linear-gradient(180deg, #18191b 60%, #0E0F11 60%)
    `,
        backgroundBlendMode: "overlay",
      }}
    >
      <Container className="">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-center md:justify-between mb-14 flex-wrap gap-4 space-y-8">
            <div className="text-center md:text-start">
              <span className="inline-block border-[1px] border-[rgba(255, 255, 255, .3)] text-[#ccc] rounded-full px-5 py-1 text-sm uppercase tracking-widest mb-3 font-semibold">
                Team Member
              </span>
              <h2 className="text-[60px] font-semibold leading-14">
                Meet our experts
              </h2>
            </div>
            <Link
              to="#"
              className="relative group inline-flex items-center gap-2"
            >
              <div className="w-18 h-18 border border-[#ccc] rounded-full flex items-center justify-center absolute -top-5 -left-12 transition-all duration-300 group-hover:bg-[#C9F31D]">
                <BsArrowRight size={28} className="text-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <span className="font-semibold text-md uppercase text-white transition-all duration-300 group-hover:translate-x-10">
                All Members
              </span>
            </Link>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="rounded-3xl shadow-lg bg-black group relative"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                />
                <div className="absolute -bottom-16 left-0 right-0 p-4 text-start md:text-right mx-2">
                  <h3 className="text-[32px] font-semibold cursor-pointer hover:text-[#c8ef1a]">{member.name}</h3>
                  <p className="text-[20px] text-gray-300">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
