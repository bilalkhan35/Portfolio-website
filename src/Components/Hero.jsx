import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl text-left">
          <p className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-sky-200 rounded-full py-2 px-4 text-sm font-semibold text-sky-700 mb-6">
            Available for Fiverr Projects
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            I build conversion-focused websites that look premium and perform.
          </h2>

          <p className="text-lg md:text-2xl text-slate-700 mb-8 font-semibold">
            I am Muhammad Bilal Rathore.{" "}
            <span className="text-sky-700">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Specialist & Tailwind Developer",
                  "UI Systems Designer",
                  "AI Chatbot Integration",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1100}
              />
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-7 rounded-xl shadow-lg shadow-slate-900/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white/80 hover:bg-white text-slate-900 font-semibold py-3 px-7 rounded-xl border border-slate-300"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
