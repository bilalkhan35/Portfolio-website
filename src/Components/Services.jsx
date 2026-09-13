import { motion } from "framer-motion";
import {
  HiOutlineCodeBracketSquare,
  HiOutlineRectangleGroup,
  HiOutlineSparkles,
  HiOutlineServerStack,
} from "react-icons/hi2";

const services = [
  {
    title: "Full Stack Web Apps",
    icon: <HiOutlineCodeBracketSquare />,
    text: "Complete MERN stack applications with React frontends, Node.js/Express backends, and MongoDB/PostgreSQL databases — fully deployed and production-ready.",
    points: ["React + Node.js", "MongoDB / PostgreSQL", "Auth & CRUD"],
  },
  {
    title: "AI & RAG Integrations",
    icon: <HiOutlineSparkles />,
    text: "Integration of LLMs and custom Retrieval-Augmented Generation (RAG) into web applications, enabling smart Q&A over custom documents and knowledge bases.",
    points: ["RAG Pipelines", "Chatbots & LLMs", "Context Retrieval"],
  },
  {
    title: "Next.js Applications",
    icon: <HiOutlineRectangleGroup />,
    text: "Server-side rendered and static applications with Next.js, Prisma ORM, and modern deployment on Vercel for optimal performance and SEO.",
    points: ["SSR & SSG", "Prisma ORM", "API Routes"],
  },
  {
    title: "REST API Development",
    icon: <HiOutlineServerStack />,
    text: "RESTful backend services built with Express and MongoDB/PostgreSQL — including authentication, data validation, and clean API architecture.",
    points: ["Express APIs", "Data Modeling", "Error Handling"],
  },
];

const process = [
  "Plan architecture & data models",
  "Build backend APIs, database & AI/RAG",
  "Develop frontend UI & integration",
  "Deploy, test & optimize",
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
              Full-stack and AI services from database to deployment — clean,
              scalable, and production-ready.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            Whether you need a complete MERN application, custom AI/RAG integration,
            a Next.js dashboard, or a scalable backend API — I build end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="glass-panel rounded-[1.9rem] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-2xl text-white shadow-[0_12px_26px_rgba(14,165,233,0.26)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 dark:text-slate-100">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.text}</p>
              </div>

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
