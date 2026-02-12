// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="bg-slate-950 text-slate-100 py-10 px-4 md:px-12 mt-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-xl font-bold tracking-tight">
          Muhammad Bilal Rathore Portfolio<span className="text-sky-400">.</span>
        </h2>

        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/bilalkhan35"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-sky-300 hover:text-sky-200 flex items-center gap-2"
        >
          <FaArrowUp /> Back to top
        </button>
      </div>

      <p className="text-center text-sm text-slate-400 mt-6">
        &copy; {new Date().getFullYear()} Muhammad Bilal Rathore. Crafted with
        React and attention to detail.
      </p>
    </motion.footer>
  );
}

export default Footer;

