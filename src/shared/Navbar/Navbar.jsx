import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/images/logo.png"; 



const Navbar = () => {
  return (
    <nav className="bg-[#0E0F11]">
      <div className="w-full max-w-[1920px] h-28 border-b border-white/10">
        <div className="container mx-auto h-full px-12 flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div className="border-r border-white/10 pr-4 h-full flex items-center">
            <a href="#">
              <img
                className="w-36 h-10"
                src={Logo}
                alt="Company Logo"
              />
            </a>
          </div>

          {/* <!-- Contact Info --> */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <p className="text-white text-base font-semibold font-['Barlow'] leading-7">
                Contact
              </p>
              <div className="absolute w-5 h-px bg-white bottom-0 right-0 group-hover:w-full transition-all"></div>
            </div>
            <a
              href="mailto:support@avrix.com"
              className="text-stone-300 text-base font-semibold font-['Barlow'] leading-7 hover:text-white transition-colors"
            >
              support@avrix.com
            </a>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base"><FiFacebook /></span>
            </a>
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base"><FaLinkedinIn /></span>
            </a>
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-3xl hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-base"><FaXTwitter/></span>
            </a>
          </div>

          {/* <!-- Menu Button --> */}
          <div className="border-l border-white/10 pl-4 h-full flex items-center">
            <button className="flex flex-col items-end gap-2 group">
              <p className="text-white text-base font-semibold font-['Barlow'] capitalize leading-7">
                MENU
              </p>
              <div className="flex flex-col gap-1.5 items-end">
                <div className="w-6 h-0.5 bg-white group-hover:w-8 transition-all"></div>
                <div className="w-9 h-0.5 bg-white group-hover:w-7 transition-all"></div>
                <div className="w-3.5 h-0.5 bg-white group-hover:w-5 transition-all"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
