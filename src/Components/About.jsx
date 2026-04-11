import { motion } from "framer-motion";
import {
  HiArrowTrendingUp,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const toolkit = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Responsive UI",
  "Landing Pages",
  "Portfolio Sites",
  "Clean UX",
  "Frontend Polish",
];

const commitments = [
  {
    title: "Visual polish with purpose",
    icon: <HiArrowTrendingUp />,
    text: "Sections are designed to look premium while staying clear and useful for real visitors.",
  },
  {
    title: "Performance-minded build",
    icon: <HiOutlineBolt />,
    text: "I focus on lightweight frontend structure, good hierarchy, and smooth interactions.",
  },
  {
    title: "Easy collaboration",
    icon: <HiOutlineChatBubbleLeftRight />,
    text: "Clear communication, practical revisions, and work that stays aligned with your goal.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 py-18 md:px-8 md:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <span className="section-kicker mb-5">About Me</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">
              Building frontend experiences that help a business feel more
              trustworthy from the first visit.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              I create clean, modern, and responsive websites focused on clarity,
              visual hierarchy, and conversion. Whether it is a personal portfolio,
              service-based landing page, or polished frontend interface, I aim to
              make the final result look confident and easy to use.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              My approach is simple: understand the message, improve the
              presentation, keep the layout responsive, and deliver a site that
              feels premium without becoming heavy or confusing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {toolkit.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/72 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {commitments.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass-panel rounded-[1.8rem] p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-2xl text-sky-700 dark:bg-sky-500/14 dark:text-sky-200">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-slate-100">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
