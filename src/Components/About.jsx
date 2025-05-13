import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpg"; // update this path if different

function About() {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-gray-100 overflow-hidden shadow-lg border-4 border-blue-500 flex items-center justify-center"
        >
          <img
            src={myPhoto}
            alt="MBK"
            className="w-full h-full object-contain scale-150"
          />
        </motion.div>

        {/* About Text with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            I'm MBK, a passionate frontend developer who loves building
            beautiful and responsive user interfaces with
            <span className="text-blue-500 font-semibold"> React</span> and
            <span className="text-purple-500 font-semibold"> Tailwind CSS</span>
            . I enjoy learning new technologies, solving UI challenges, and
            crafting projects that help people.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
