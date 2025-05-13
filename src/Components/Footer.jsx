import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white py-8 px-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-xl font-semibold">MBK Portfolio</h2>

        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/your-username" target="_blank">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank">
            <FaLinkedin className="hover:text-gray-400 transition" />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2"
        >
          <FaArrowUp /> Back to top
        </button>
      </div>

      <p className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} MBK. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
