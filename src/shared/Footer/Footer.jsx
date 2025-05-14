import Container from "../../components/Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#0E0F11] text-white">
      <Container className="bg-[#18191B] w-[90%] rounded-t-2xl border-[1px] border-[#303032] border-b-0 border-e-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 py-20">
          {/* Left Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img src="/src/assets/images/logo.png" alt="Softvence Logo" className="h-8 mr-2" />
            </div>

            {/* Locations */}
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-2">Australia</h4>
                <p>
                  Travel World House,
                  <br />
                  Level 7, 17 Jones St,
                  <br />
                  NSW, 2060
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Dubai</h4>
                <p>
                  Sheikh Mohammed bin salah,
                  <br />
                  #234 B - Downtown - Dubai
                </p>
              </div>
            </div>

            {/* Contact */}
            <hr className="my-6 border-gray-700" />
            <div className="flex flex-col space-y-2 text-base font-semibold">
              <a href="mailto:info@dixor.com" className="text-white">
                info@dixor.com
              </a>
              <a href="tel:+4733378901" className="text-lime-400">
                +47 333 78 901
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Useful Link</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-300 mb-6">
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

        {/* Footer Bottom */}
        <div className=" border-t border-[#303032] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="bg-[#222] p-2 rounded-full">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-[#222] p-2 rounded-full">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-[#222] p-2 rounded-full">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
          <p>Copyright © 2025 Dixor. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
