import teamImage from "/assets/img/team-meeting.jpg"; 
import girlReading from "/assets/img/girl-reading.jpg"; 

export default function Banner() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Grid Background (optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px] pointer-events-none z-0"></div>

      <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Crafting{" "}
              <span className="border border-white px-3 py-1 inline-block rounded-md">
                Digital
              </span>
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="w-12 h-px bg-white" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7m0 0l-7 7m7-7H4"
                />
              </svg>
              <h2 className="text-5xl font-bold">Experience</h2>
            </div>
          </div>

          {/* Bottom text + circle image */}
          <div className="flex items-center gap-6">
            <img
              src={girlReading}
              alt="Girl Reading"
              className="w-24 h-24 object-cover rounded-full border-4 border-black"
            />
            <p className="max-w-md text-gray-300 text-lg">
              Excellence projecting is devonshire dispatched remarkably on
              estimating. Side in so life past. Continue indulged speaking the
              was out.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full">
          <img
            src={teamImage}
            alt="Team Work"
            className="rounded-lg object-cover w-full h-auto shadow-lg"
          />
          <div className="absolute -left-10 bottom-10 w-32 h-32 bg-lime-400 rounded-full z-[-1]"></div>
        </div>
      </div>
    </div>
  );
}
