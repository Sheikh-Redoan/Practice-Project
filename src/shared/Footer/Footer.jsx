import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Container from "../../components/Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#0E0F11] text-white">
      <Container className="bg-[#18191B] w-full md:w-[90%] rounded-t-2xl">
        <div className="rounded-t-2xl border-y-[1px] border-[#303032] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 px-3 md:px-10 py-10 md:py-24 border-b md:border-b-0 md:border-r-[1px] border-[#303032] ">
              <div className="space-y-8">
                <div className="flex items-center">
                  <img src="/src/assets/images/logo.png" alt="Softvence Logo" className="h-8 mr-2" />
                </div>

                {/* Locations */}
                <div className="flex flex-col md:flex-row justify-between border-b-[1px] border-[#303032] w-[90%]">
                  <div className="mb-4">
                    <h4 className="text-white text-xl font-semibold mb-3">Australia</h4>
                    <p className="md:w-[70%] w-full font-normal text-[#ccc] text-[16px] leading-7">
                      Travel World House,
                      Level 7, 17 Jones St,
                      NSW, 2060
                    </p>
                  </div>
                  <div className="mr-0">
                    <h4 className="text-white text-xl font-semibold mb-3">Dubai</h4>
                    <p className="md:w-[80%] w-full font-normal text-[#ccc] text-[16px] leading-7">
                      Sheikh Mohammed bin salah,
                      #234 B - Downtown - Dubai
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-[90%] space-y-3 md:space-y-0">
                  <Link to="mailto:info@dixor.com" className="text-white text-[20px] font-medium hover:text-[#C9F31D]">
                    hello@softvence.agency
                  </Link>
                  <Link to="tel:+4733378901" className="text-[20px] font-medium text-[#C9F31D]">
                    +44-20-7328-4499
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 px-3 md:px-10 py-10 md:py-24">
              <h4 className="text-white font-semibold text-xl mb-4">Useful Link</h4>
              <div className="grid grid-cols-2 gap-y-2 text-md text-gray-300 mb-6">
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">FAQS</a>
                <a href="#">Services</a>
                <a href="#">Term & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Careers</a>
                <a href="#">Help Desk</a>
              </div>

              {/* Email Subscription */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
                  ➜
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#18191B] px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="#" className="bg-[#222] p-2 rounded-full hover:text-white">
                <FaFacebookF size={24} />
              </Link>
              <Link to="#" className="bg-[#222] p-2 rounded-full hover:text-white">
                <FaLinkedinIn size={24} />
              </Link>
              <Link to="#" className="bg-[#222] p-2 rounded-full hover:text-white">
                <FaXTwitter size={24} />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-[18px] text-[#ccc]">Copyright © 2025 Softvence. All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;