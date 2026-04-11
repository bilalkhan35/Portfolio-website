import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  HiArrowUpRight,
  HiCheckBadge,
  HiMiniSparkles,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
} from "react-icons/hi2";
import profilePhoto from "../../fiverr-assets/newprofile.webp";

const quickFacts = [
  { value: "6", label: "Live project demos" },
  { value: "React", label: "Frontend-first workflow" },
  { value: "Mobile", label: "Responsive-ready design" },
];

const promiseCards = [
  {
    title: "Premium presentation",
    icon: <HiOutlinePaintBrush />,
    text: "Modern layouts, cleaner spacing, and visuals that feel more trustworthy.",
  },
  {
    title: "Smooth interactions",
    icon: <HiMiniSparkles />,
    text: "Motion and section flow that make the experience feel polished, not generic.",
  },
  {
    title: "Cross-device clarity",
    icon: <HiOutlineDevicePhoneMobile />,
    text: "Built to look sharp on desktop, tablet, and mobile from the first scroll.",
  },
];

function Hero() {
  return (
    <section
      id="hero"
      className="relative px-4 pb-18 pt-32 md:px-8 md:pb-24 md:pt-36"
    >
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="section-kicker mb-6">
              <HiCheckBadge className="text-base" />
              Available for Fiverr Projects
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl lg:text-7xl">
              I design <span className="gradient-text">modern websites</span>
              <br />
              that help your brand look serious, clear, and premium.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-slate-700 dark:text-slate-200 md:text-2xl">
              I am Muhammad Bilal Rathore, a{" "}
              <span className="text-sky-700 dark:text-sky-300">
                <Typewriter
                  words={[
                    "React Frontend Developer",
                    "Landing Page Specialist",
                    "Portfolio Website Designer",
                    "AI Chatbot Integrator",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={68}
                  deleteSpeed={42}
                  delaySpeed={1100}
                />
              </span>
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              I build conversion-focused portfolio sites, landing pages, and
              frontend experiences with React, Tailwind CSS, and thoughtful
              motion. The goal is always the same: make the work feel
              professional and make your audience trust it fast.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold shadow-[0_18px_40px_rgba(14,165,233,0.26)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(14,165,233,0.34)] md:text-base"
              >
                View My Work
                <HiArrowUpRight className="text-lg" />
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-sky-200 dark:border-slate-700 dark:hover:border-sky-500/40 md:text-base"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="glass-panel rounded-3xl p-5">
                  <p className="text-2xl font-extrabold text-slate-950 dark:text-slate-50">
                    {fact.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/40 via-white/10 to-cyan-300/20 dark:from-sky-500/10 dark:via-slate-900/5 dark:to-blue-500/10" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/60 bg-white/55 px-4 py-3 dark:border-slate-700/70 dark:bg-slate-900/68">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
                      Fiverr-Ready
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                      Frontend design that feels current and client-facing
                    </p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_0_8px_rgba(74,222,128,0.12)]" />
                </div>

                <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-3 dark:bg-slate-900">
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="rounded-[1.3rem] bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 p-3 pt-10">
                    <div className="overflow-hidden rounded-[1.25rem] border border-white/30 bg-white/90 dark:bg-slate-950/90">
                      <img
                        src={profilePhoto}
                        alt="Muhammad Bilal Rathore"
                        className="h-[420px] w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {promiseCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[1.4rem] border border-white/70 bg-white/70 p-4 shadow-lg shadow-sky-100/60 dark:border-slate-700/70 dark:bg-slate-900/72 dark:shadow-none"
                    >
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700 dark:bg-sky-500/14 dark:text-sky-200">
                        {card.icon}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {card.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
