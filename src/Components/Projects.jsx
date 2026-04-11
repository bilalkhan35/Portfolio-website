import { motion } from "framer-motion";
import { HiArrowUpRight, HiCodeBracket } from "react-icons/hi2";

const projects = [
  {
    title: "Islamic Chatbot",
    description:
      "An AI-powered chatbot that answers questions using Quran and Sunnah, deployed on Vercel.",
    github: "https://github.com/bilalkhan35/Islamic-Ai-app.git",
    demo: "https://islamic-ai-template.vercel.app/",
    stack: ["React", "AI", "UI/UX"],
    label: "AI Web App",
    accent: "from-slate-950 via-sky-900 to-cyan-500",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS, deployed on Vercel.",
    github: "https://github.com/bilalkhan35/Portfolio-website",
    demo: "https://portfolio-website-xnt9.vercel.app/",
    stack: ["React", "Tailwind", "Branding"],
    label: "Personal Branding",
    accent: "from-slate-900 via-blue-700 to-indigo-500",
  },
  {
    title: "Search Photos",
    description:
      "A fast web app for searching and displaying photos, deployed on Vercel.",
    github: "https://github.com/bilalkhan35/Search-photos",
    demo: "https://photovault.vercel.app",
    stack: ["API", "React", "Performance"],
    label: "Search Experience",
    accent: "from-slate-950 via-cyan-700 to-sky-400",
  },
  {
    title: "Online Store",
    description:
      "A clean and responsive e-commerce UI demo, deployed on Vercel.",
    github: "",
    demo: "https://online-store-coral-nine.vercel.app/",
    stack: ["Ecommerce", "Layout", "Tailwind"],
    label: "E-Commerce UI",
    accent: "from-slate-950 via-emerald-700 to-cyan-400",
  },
  {
    title: "FoodBlog",
    description:
      "A content-focused food blogging web app, deployed on Netlify.",
    github: "",
    demo: "https://foodiblogapp.netlify.app/",
    stack: ["Blog", "Responsive", "Frontend"],
    label: "Content Website",
    accent: "from-slate-900 via-orange-500 to-amber-300",
  },
  {
    title: "Modern SaaS Landing",
    description:
      "A modern and professional SaaS landing page with conversion-focused design, deployed on Vercel.",
    github: "",
    demo: "https://modern-saas-landing-lilac.vercel.app/",
    stack: ["SaaS", "Landing", "Design"],
    label: "SaaS Landing Page",
    accent: "from-slate-950 via-violet-700 to-fuchsia-400",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-18 md:px-8 md:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker mb-4">Selected Work</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">
              Live projects that show how I approach layout, presentation, and
              frontend quality.
            </h2>
          </div>

          <div className="glass-panel rounded-[1.6rem] p-5 lg:max-w-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
              Focus Areas
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              React interfaces, landing pages, branded portfolios, and modern
              frontend experiences with cleaner structure and stronger polish.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="glass-panel group flex h-full flex-col overflow-hidden rounded-[1.9rem]"
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.accent} p-6 text-white`}
              >
                <div className="absolute left-5 top-4 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>

                <div className="mt-7 rounded-[1.4rem] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                    {project.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {project.stack.join(" | ")}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="min-h-20 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary group inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.05] hover:border-sky-300 hover:shadow-xl hover:shadow-sky-400/30 hover:ring-2 hover:ring-sky-400/50 hover:ring-offset-2 hover:ring-offset-white/50 dark:border-slate-700 dark:shadow-slate-800/50 dark:hover:border-sky-400 dark:hover:shadow-sky-500/40 dark:hover:ring-sky-500/60 dark:hover:ring-offset-slate-950/50"
                    >
                      <HiCodeBracket className="text-lg" />
                      GitHub
                    </a>
                  ) : null}

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-[0_12px_26px_rgba(14,165,233,0.24)] transition-colors hover:brightness-105"
                    >
                      Live Demo
                      <HiArrowUpRight className="text-lg" />
                    </a>
                  ) : (
                    <span className="cursor-not-allowed rounded-xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
