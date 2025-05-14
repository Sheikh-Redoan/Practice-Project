import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { HiPlus } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router";

const Menu = ({ className, onClose }) => {
  const accordionItems = [
    {
      question: "Home",
      answer:
        "Game day seats are rentals that will be in place for the first game of the season, unless you are in sections 409-421. Those sections will have game day seats midway through the football season.",
    },
    {
      question: "Blog",
      answer:
        "You can cancel your reservation up to 24 hours before the event for a full refund. Cancellations made within 24 hours will be charged 50% of the ticket price.",
    },
    {
      question: "Services",
      link: "/services"
    },
    {
      question: "About",
      link: "about_us"
    },
    {
      question: "Contact",
      link: "/contact"
    },
  ];

  // State to track which item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle accordion item
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`fixed right-0 top-0 z-50 bg-[#18191B] h-full w-full ${className}`}
    >
      <div className="side-nav">
        <div className="flex items-center justify-between px-15 mb-12 py-8 border-b border-white/10">
          <div className="logo">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>
          <a
            href="#"
            className="text-white font-semibold flex items-center"
            onClick={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            Close <ImCross className="text-white ml-[10px]" />
          </a>
        </div>
        <div className="p-8">
          <div className="flex justify-center items-center h-full">
            {/* <!-- Main Menu --> */}
            <div className="border-r border-white/10 pr-[40px]">
              <div className="max-w-xl mx-auto my-8  rounded-lg overflow-hidden">
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    {/* Accordion header/button */}
                    <button
                      className={`w-full px-6 py-4 text-left flex justify-between items-center transition-colors duration-200 focus:outline-none`}
                      onClick={() => toggleItem(index)}
                      aria-expanded={openIndex === index}
                    >
                      <Link to={item.link} className="text-white font-semibold text-[50px] max-[918px]:text-[40px] max-[700px]:text-[30px]">
                        {item.question}
                      </Link>
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out 
                      ${openIndex === index ? "max-h-96" : "max-h-0"}`}
                      aria-hidden={openIndex !== index}
                    >
                      <div className="px-6 py-4 ">
                        <p className="text-white">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <!-- Side Widgets --> */}
            <div className="w-[442px] max-[650px]:hidden">
              <div className="pl-[40px] mb-[50px]">
                <ul>
                  <li className="mt-[15px]">
                    <div className="content">
                      <p className="text-[18px] font-medium text-white">
                        Address
                      </p>
                      <strong className="text-[17px] text-[#cccccc] font-normal">
                        California, TX 70240
                      </strong>
                    </div>
                  </li>
                  <li className="mt-[15px]">
                    <div className="content">
                      <p className="text-[18px] font-medium text-white">
                        Email
                      </p>
                      <strong className="text-[17px] text-[#cccccc] font-normal">
                        support@validtheme.com
                      </strong>
                    </div>
                  </li>
                  <li className="mt-[15px]">
                    <div className="content">
                      <p className="text-[18px] font-medium text-white">
                        Contact
                      </p>
                      <strong className="text-[17px] text-[#cccccc] font-normal">
                        +44-20-7328-4499
                      </strong>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pl-[40px] mb-[50px]">
                <h4 className="text-[25px] mb-[25px] font-bold text-white">
                  Get Subscribed!
                </h4>
                <form>
                  <div className="flex justify-center items-center w-full">
                    <input
                      placeholder="Enter your e-mail"
                      className="w-full text-[#cccccc] border min-h-[60px] shadow-none ml-px p-[15px] rounded-[inherit] border-solid border-[#cccccc] outline-0"
                      autocomplete="off"
                      type="email"
                      name="email"
                    />
                    <div className="w-[69px] h-[60px] border border-solid border-[#cccccc]">
                      <button
                        type="submit"
                        className="w-full h-full flex justify-center items-center"
                      >
                        <FaArrowRight className="text-[20px] text-white transform rotate-[-45deg]" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="pl-[40px] mb-[50px] flex justify-start gap-[10px] items-center">
                <a
                  href="#"
                  className="w-[45px] h-[45px] border rounded-full border-white flex justify-center items-center hover:bg-[#C9F31D] duration-300 ease-in"
                >
                  <ImFacebook className="text-[18px] text-white" />
                </a>
                <a
                  href="#"
                  className="w-[45px] h-[45px] border rounded-full border-white flex justify-center items-center hover:bg-[#C9F31D] duration-300 ease-in"
                >
                  <FaXTwitter className="text-[18px] text-white" />
                </a>
                <a
                  href="#"
                  className="w-[45px] h-[45px] border rounded-full border-white flex justify-center items-center hover:bg-[#C9F31D] duration-300 ease-in"
                >
                  <FaPinterestP className="text-[18px] text-white" />
                </a>
                <a
                  href="#"
                  className="w-[45px] h-[45px] border rounded-full border-white flex justify-center items-center hover:bg-[#C9F31D] duration-300 ease-in"
                >
                  <FaLinkedinIn className="text-[18px] text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
