import { motion } from "framer-motion";
import {
  HiOutlineBolt,
  HiOutlineCodeBracketSquare,
  HiOutlineChatBubbleLeftRight,
  HiOutlineSparkles,
} from "react-icons/hi2";

const toolkit = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Prisma",
  "AI & RAG",
  "LLM Integration",
  "Tailwind CSS",
  "REST APIs",
  "PostgreSQL",
  "Git / GitHub",
  "Framer Motion",
  "Responsive UI",
];

const commitments = [
  {
    title: "Full-stack & AI development",
    icon: <HiOutlineCodeBracketSquare />,
    text: "From designing database schemas and building REST APIs to crafting polished React interfaces and integrating AI/RAG capabilities — I handle the full lifecycle.",
  },
  {
    title: "Intelligent AI & RAG systems",
    icon: <HiOutlineSparkles />,
    text: "Building retrieval-augmented generation (RAG) pipelines, grounding LLMs on custom knowledge bases, and delivering contextual, accurate AI responses.",
  },
  {
    title: "Performance & scalability",
    icon: <HiOutlineBolt />,
    text: "Optimized queries, clean component architecture, efficient API calls, and smooth interactions for a fast and reliable user experience.",
  },
  {
    title: "Easy collaboration",
    icon: <HiOutlineChatBubbleLeftRight />,
    text: "Clear communication, practical revisions, and work that stays aligned with your product goals from start to deployment.",
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
              Full-stack developer building modern web apps with native AI & RAG capabilities.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              I&apos;m a Full Stack MERN & AI Developer who builds complete web applications — from designing RESTful APIs with Node.js and Express, to managing data with MongoDB, PostgreSQL, and Prisma, to creating responsive frontends with React and Next.js.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
              I also specialize in integrating AI directly into web applications — building custom RAG (Retrieval-Augmented Generation) pipelines, conversational agents, and contextual AI workflows that make websites intelligent and interactive.
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
