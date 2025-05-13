import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="bg-gray-100 h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Assalamu Alaikum, I’m MBK
      </h2>

      <p className="text-lg text-green-700 mb-6 font-semibold">
        <Typewriter
          words={[
            "Frontend Developer",
            "React & Tailwind Enthusiast",
            "UI Designer",
            "Backend Developer",
          ]}
          loop={0} // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
