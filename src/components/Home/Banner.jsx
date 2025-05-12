import teamImage from "../../assets/images/team_meting.jpg";
import girlReading from "../../assets/images/girl_eading.jpg";
import arrowRightImg from "../../assets/images/arrow_right.png";
import bannerCircle from "../../assets/images/banner_circle.png";

export default function Banner() {
  return (
    <div className="bg-[#0e0f11] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background (optional) */}
      <div className="absolute inset-0 bg-[linear-gradient(#bfbdbd_1px,transparent_1px),linear-gradient(90deg,#bfbdbd_1px,transparent_1px)] bg-[size:54px_54px] opacity-6 pointer-events-none z-0" />

      <div className="md:w-[58%] z-10 flex flex-col md:flex-row gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <div>
            <h1 className="text-[100px] font-semibold leading-tight">
              Branding{" "}
              <span className="border border-white px-3 py-1 inline-block rounded-md">
                Design
              </span>
            </h1>
            <div className="mt-4 flex items-center gap-4 ">
              <img
                src={arrowRightImg}
                alt="arrowRightImg"
              />
              <h2 className="text-[100px] font-bold">Development</h2>
            </div>
          </div>

          {/* Bottom text + circle image */}
          <div className="flex items-center gap-[50px]">
            <img
              src={girlReading}
              alt="Girl Reading"
              className="max-w-[200px] max-h-[200px] object-cover rounded-full"
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
            className="rounded-lg object-cover max-w-[352px] h-full shadow-lg"
          />
          <div className="absolute -left-10 bottom-10 w-32 h-32 bg-lime-400 rounded-full z-[-1]"></div>
        </div>
      </div>
    </div>
  );
}
