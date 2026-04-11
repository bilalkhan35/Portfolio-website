import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope, FaGithub, FaPhoneAlt } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/bilalkhan35",
    icon: <FaGithub />,
  },
  {
    label: "Email",
    href: "mailto:alinabilal999@gmail.com",
    icon: <FaEnvelope />,
  },
  { label: "Phone", href: "tel:+923234533805", icon: <FaPhoneAlt /> },
];

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true, amount: 0.15 }}
      className="mt-8 border-t border-white/50 bg-slate-950 px-4 py-12 text-slate-100 md:px-8 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Muhammad Bilal Rathore<span className="text-sky-400">.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Frontend websites and portfolio experiences designed to look
              cleaner, feel more modern, and present your work with more
              confidence.
            </p>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-300">
              Navigation
            </p>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-300">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("https") ? "_blank" : undefined}
                  rel={link.href.startsWith("https") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-sky-500/8 px-3 py-1.5 text-sm font-semibold text-slate-200 backdrop-blur-sm shadow-lg shadow-sky-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-sky-500/15 hover:shadow-xl hover:shadow-sky-500/25 hover:ring-2 hover:ring-sky-400/50 hover:ring-offset-1 hover:ring-offset-slate-950/70 dark:hover:ring-sky-400/60 dark:hover:ring-offset-sky-950 dark:text-slate-200"
                >
                  <span className="text-sky-300">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Muhammad Bilal Rathore. Built with
            React and polished for a stronger first impression.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-300 transition-colors hover:bg-sky-500/16 hover:text-white cursor-pointer"
          >
            <FaArrowUp />
            Back to top
          </button>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
