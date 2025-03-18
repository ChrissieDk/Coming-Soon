import background from "../assets/background_with birds.png";

export default function ComingSoon() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat m-0 p-0 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "#FFD100", // Fallback color
      }}
    >
      {/* Grid overlay for easy positioning */}
      <div className="grid grid-cols-12 h-screen">
        {/* Left spacer */}
        <div className="hidden md:block md:col-span-0 lg:col-span-1"></div>

        {/* Content area */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex flex-col justify-center px-8 md:px-4">
          <p className="text-white text-lg md:text-2xl mb-3 font-roboto font-medium">
            Head's-up! We're Almost Here!
          </p>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-roboto font-bold mb-8  w-full">
            Get Notified When
            <br />
            We Launch.
          </h1>

          {/* Name and surname input */}
          <div className="flex mb-4 w-full max-w-md">
            <div className="flex-grow rounded-full overflow-hidden bg-white shadow-md">
              <input
                type="text"
                placeholder="Enter your name and surname"
                className="w-full p-2 pl-5 text-gray-700 outline-none border-none"
              />
            </div>
          </div>

          {/* Email input with button */}
          <div className="flex mb-3 w-full max-w-md">
            <div className="flex-grow rounded-l-full overflow-hidden bg-white shadow-md">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-2 pl-5 text-gray-700 outline-none border-none"
              />
            </div>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-r-full font-medium text-sm md:text-base tracking-wider shadow-md hover:bg-blue-400 hover:text-black transition-all duration-200 active:scale-95">
              NOTIFY ME
            </button>
          </div>

          <p className="text-black text-md font-roboto font-semibold pl-5 mb-10">
            No spam, just good vibes.
          </p>
        </div>

        {/* Right side */}
        <div className="hidden md:block md:col-span-6 lg:col-span-6"></div>
      </div>
    </div>
  );
}
