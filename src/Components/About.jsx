// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpg";

const highlights = ["React", "Tailwind CSS", "Responsive UI", "Clean UX"];

function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[280px_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/20 border border-white/70 bg-white/80 backdrop-blur-xl justify-self-center"
        >
          <img
            src={myPhoto}
            alt="Muhammad Bilal Rathore"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-left"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-700 font-bold mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Building UI that helps businesses win clients.
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl mb-7">
            I create modern and responsive websites focused on clarity, speed,
            and conversion. My goal is simple: make your business look more
            trusted and more valuable to the people visiting your website.
          </p>
          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="bg-white/80 border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

