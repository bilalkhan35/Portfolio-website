// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Islamic Chatbot",
    description:
      "An AI-powered chatbot that answers questions using Quran and Sunnah.",
    github: "https://github.com/bilalkhan35/Islamic-Ai-app.git",
    demo: "https://islamic-ai-lhoea7kut-bilalkhans-projects-2eb8284d.vercel.app",
    stack: ["React", "AI", "UI/UX"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    github: "https://github.com/bilalkhan35/Portfolio-website",
    demo: "#",
    stack: ["React", "Tailwind", "Branding"],
  },
  {
    title: "Search Photos",
    description: "A fast web app for searching and displaying photos.",
    github: "https://github.com/bilalkhan35/Search-photos",
    demo: "https://photovault.vercel.app",
    stack: ["API", "React", "Performance"],
  },
  {
    title: "Online Store",
    description: "A clean and responsive e-commerce UI demo.",
    github: "",
    demo: "https://online-store-coral-nine.vercel.app/",
    stack: ["Ecommerce", "Layout", "Tailwind"],
  },
  {
    title: "FoodBlog",
    description: "A content-focused food blogging web app.",
    github: "",
    demo: "https://foodiblogapp.netlify.app/",
    stack: ["Blog", "Responsive", "Frontend"],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-left mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-700 font-bold mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Projects that show how I design for real users.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/80 bg-white/75 backdrop-blur-xl shadow-lg shadow-slate-900/5 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <FaArrowRight className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition" />
              </div>

              <p className="text-slate-600 mb-5 min-h-16">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 rounded-full px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-slate-900 text-white py-2.5 px-4 rounded-lg hover:bg-slate-800"
                  >
                    GitHub
                  </a>
                ) : null}

                {project.demo && project.demo !== "#" ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-sky-600 text-white py-2.5 px-4 rounded-lg hover:bg-sky-500"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm bg-slate-200 text-slate-500 py-2.5 px-4 rounded-lg cursor-not-allowed">
                    Demo Soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

