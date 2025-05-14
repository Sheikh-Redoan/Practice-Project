import teamImage from "../../assets/images/team_meting.jpg";
import girlReading from "../../assets/images/girl_eading.jpg";
import arrowRightImg from "../../assets/images/arrow_right.png";
import bannerCircle from "../../assets/images/banner_circle.png";
import Container from "../Container/Container";

export default function Banner() {
  return (
    <section className="bg-[#0e0f11] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background (optional) */}
      <div className="absolute inset-0 bg-[linear-gradient(#bfbdbd_1px,transparent_1px),linear-gradient(90deg,#bfbdbd_1px,transparent_1px)] bg-[size:54px_54px] opacity-6 pointer-events-none z-0" />
      <Container>
        <div className=" px-4 md:px-0 z-10 flex flex-col md:flex-row gap-10 md:gap-24 items-center">
          {/* Left Content */}
          <div className="md:space-y-8 space-y-4">
            <div>
              <h1 className="text-[50px] md:text-[80px] font-semibold leading-tight">
                Branding{" "}
                <span className="border border-white px-2 md:px-3 py-0 md:py-1 inline-block rounded-md">
                  Design
                </span>
              </h1>
              <div className="flex items-center gap-4 ">
                <img
                  src={arrowRightImg}
                  alt="arrowRightImg"
                  className="w-16 hidden md:block"
                />
                <h2 className="text-[50px] md:text-[80px] font-bold">
                  Development
                </h2>
              </div>
            </div>

            {/* Bottom text + circle image */}
            <div className="flex items-center gap-[50px]">
              <img
                src={girlReading}
                alt="Girl Reading"
                className="max-w-[200px] max-h-[200px] object-cover rounded-full hidden md:block"
              />
              <p className="text-[#ccc] text-[20px]">
                A digital agency focused on web design and development! We have
                designers, developers, strategists, and producers building
                elevated websites in USA.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full">
            <img
              src={teamImage}
              alt="Team Work"
              className="rounded-lg object-cover w-full md:w-[400px] h-[422px] shadow-lg"
            />
            <img
              src={bannerCircle}
              alt="Banner Circle"
              className="absolute -left-16 -bottom-4 hidden md:block w-32 h-44"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
