import { motion } from "framer-motion";

const projects = [
  {
    title: "Islamic Chatbot",
    description:
      "An AI-powered chatbot that answers questions using Quran and Sunnah.",
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
  },
  {
    title: "Portfolio Website",
    description: "This personal portfolio built with React & Tailwind.",
    github: "https://github.com/your-portfolio",
    demo: "#",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
