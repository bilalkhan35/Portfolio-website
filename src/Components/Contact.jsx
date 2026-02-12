// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-12">
      <div className="max-w-5xl mx-auto rounded-3xl border border-white/80 bg-white/75 backdrop-blur-xl shadow-2xl shadow-slate-900/10 p-6 md:p-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 text-left"
        >
          Let us build something clients trust instantly.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 mb-8 text-left text-lg"
        >
          Share your project idea, goals, and deadline. I will get back with a
          clear plan and timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-sm uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
              Email
            </p>
            <a
              href="mailto:alinabilal999@gmail.com"
              className="text-sky-700 font-semibold break-all hover:text-sky-600"
            >
              alinabilal999@gmail.com
            </a>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <p className="text-sm uppercase tracking-[0.15em] text-slate-500 font-semibold mb-2">
              Phone / WhatsApp
            </p>
            <a
              href="tel:+923234533805"
              className="text-sky-700 font-semibold hover:text-sky-600"
            >
              03234533805
            </a>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:alinabilal999@gmail.com"
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-7 rounded-xl"
          >
            Send Email
          </a>
          <a
            href="tel:+923234533805"
            className="bg-white border border-slate-300 hover:border-sky-500 text-slate-900 font-semibold py-3 px-7 rounded-xl"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

