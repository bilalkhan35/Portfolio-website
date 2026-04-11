import { motion } from "framer-motion";
import {
  HiOutlineCodeBracketSquare,
  HiOutlineRectangleGroup,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const services = [
  {
    title: "Landing Pages",
    icon: <HiOutlineRectangleGroup />,
    text: "High-impact sections for services, products, and brands that need a stronger online first impression.",
    points: ["Clear hero messaging", "Strong CTA structure", "Responsive layout"],
  },
  {
    title: "Portfolio Websites",
    icon: <HiOutlineRocketLaunch />,
    text: "Portfolio experiences that present work in a cleaner, more premium, and more client-ready way.",
    points: ["Project storytelling", "Modern card layouts", "Personal branding"],
  },
  {
    title: "React Frontend UI",
    icon: <HiOutlineCodeBracketSquare />,
    text: "Reusable frontend sections and polished interfaces built with React, Tailwind CSS, and motion.",
    points: ["Component-based build", "Smooth micro-interactions", "Clean responsive behavior"],
  },
];

const process = [
  "Understand the project goal",
  "Shape the layout and visual direction",
  "Build responsive sections carefully",
  "Refine details for a cleaner final result",
];

function Services() {
  return (
    <section id="services" className="px-4 py-18 md:px-8 md:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-kicker mb-4">What I Can Build</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">
              Modern frontend work that feels more polished, structured, and ready
              to impress clients.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            The focus is not just writing code. It is making the final website look
            clearer, more premium, and more professional for the people who see it.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel rounded-[1.9rem] p-6"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-2xl text-white shadow-[0_12px_26px_rgba(14,165,233,0.26)]">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-100">{service.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{service.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <span
                    key={point}
                    className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-sky-700 dark:bg-sky-500/14 dark:text-sky-200"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel-strong mt-8 rounded-[2rem] p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 dark:border-slate-700/70 dark:bg-slate-900/70"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-slate-800 dark:text-slate-100">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
