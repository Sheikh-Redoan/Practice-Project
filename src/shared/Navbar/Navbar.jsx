import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png";
import { useState } from "react";
import Menu from "../../components/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="bg-[#0E0F11]">
      <div className="w-full max-w-[1920px] mx-auto h-28 border-b border-white/10">
        <div className="w-full h-full flex items-center justify-between px-15 ">
          {/* <!-- Logo --> */}
          <div className="border-r border-white/10 pr-4 h-full flex items-center">
            <a href="#">
              <img className="w-46 h-auto" src={Logo} alt="Company Logo" />
            </a>
          </div>

          {/* <!-- Contact Info --> */}
          <div className="flex items-center gap-4 max-lg:flex-col max-[778px]:hidden">
            <div className="relative group mr-[31px]">
              <p className="text-white text-base font-semibold font-barlow leading-7">
                Contact
              </p>
              <div className="bg-white w-[20px] h-[1px] absolute right-[-31px] top-[50%] translate-y-[-50%]"></div>
            </div>
            <a
              href="mailto:hello@softvence.agency"
              className="text-stone-300 text-base font-semibold font-barlow leading-7 hover:text-white transition-colors"
            >
              hello@softvence.agency
            </a>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="flex gap-4 max-[600px]:hidden">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base">
                <FiFacebook />
              </span>
            </a>
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base">
                <FaLinkedinIn />
              </span>
            </a>
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base">
                <FaXTwitter />
              </span>
            </a>
          </div>

          {/* <!-- Menu Button --> */}
          <div className="border-l border-white/10 pl-4 h-full flex items-center w-[130px]">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <p className="text-white text-base font-semibold font-barlow capitalize leading-7">
                MENU
              </p>
              <div className="flex flex-col gap-1.5 items-end overflow-hidden w-10">
                <div
                  className="h-0.5 bg-white transition-all duration-400 ease-in-out 
                  origin-right
                  group-hover:w-3.5 group-hover:scale-x-100
                  w-6 scale-x-[0.783]"
                ></div>

                <div
                  className="h-0.5 bg-white transition-all duration-400 ease-in-out 
                  origin-right
                  group-hover:w-6 group-hover:scale-x-100
                  w-9 scale-x-[0.866]"
                ></div>

                <div
                  className="h-0.5 bg-white transition-all duration-400 ease-in-out 
                  origin-right
                  group-hover:w-9 group-hover:scale-x-100
                  w-4 scale-x-[0.588]"
                ></div>
              </div>
            </button>
          </div>

          {/* <!-- Toggle Menu --> */}
            <Menu
              className={`transform transition-transform duration-500 ease-in-out ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClose={toggleMenu}
            />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
