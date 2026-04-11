import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlinePhone,
} from "react-icons/hi2";

const CONTACT_EMAIL =
  import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || "alinabilal999@gmail.com";

const contactCards = [
  {
    title: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry`,
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Phone / WhatsApp",
    value: "03234533805",
    href: "tel:+923234533805",
    icon: <HiOutlinePhone />,
  },
  {
    title: "Availability",
    value: "Open for portfolio and landing page work",
    icon: <HiOutlineClock />,
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  budget: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const hasEmailJsConfig =
    Boolean(emailJsConfig.serviceId) &&
    Boolean(emailJsConfig.templateId) &&
    Boolean(emailJsConfig.publicKey);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!hasEmailJsConfig) {
      setStatus({
        type: "error",
        message:
          "Real email sending is not active yet. Add your EmailJS keys in .env, then restart the app.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          budget: formData.budget || "Not specified",
          message: formData.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: emailJsConfig.publicKey }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. I will get back to you soon.",
      });

      setFormData(initialForm);
    } catch {
      setStatus({
        type: "error",
        message:
          "The message could not be sent right now. Please use the direct email or phone option below.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-18 md:px-8 md:py-24">
      <div className="section-shell">
        <div className="glass-panel-strong rounded-[2.2rem] p-6 md:p-10">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="section-kicker mb-4">Contact</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 md:text-5xl">
                Let&apos;s build something that looks strong enough to win trust
                quickly.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                Share your idea, target audience, and what kind of look you want.
                I can help shape a cleaner frontend direction and turn it into a
                modern, responsive site.
              </p>

              <div className="mt-8 grid gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.6rem] border border-white/75 bg-white/75 p-5 dark:border-slate-700/70 dark:bg-slate-900/72"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-2xl text-sky-700 dark:bg-sky-500/14 dark:text-sky-200">
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                          {card.title}
                        </p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="mt-2 block text-base font-semibold text-slate-900 transition-colors hover:text-sky-700 dark:text-slate-100 dark:hover:text-sky-300 md:text-lg"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100 md:text-lg">
                            {card.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-[1.6rem] border border-sky-100 bg-sky-50/80 p-5 dark:border-sky-500/20 dark:bg-sky-500/8">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                  Send Email Now
                </p>
                <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
                  The form on the right sends real emails through EmailJS. Add your
                  EmailJS keys in the local .env file to activate live sending from
                  this website.
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-panel rounded-[1.9rem] p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-xl text-white shadow-[0_12px_26px_rgba(14,165,233,0.26)]">
                  <HiOutlinePaperAirplane />
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-300">
                    Project Form
                  </p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    Tell me what you need
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                    placeholder="Muhammad Bilal Rathore"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                    placeholder="your@email.com"
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Subject
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                    placeholder="Portfolio redesign request"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Budget
                  </span>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-colors focus:border-sky-400 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100"
                  placeholder="Tell me about your website, references, goal, and deadline."
                />
              </label>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={isSending}
                  className="btn-primary inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-sm font-semibold shadow-[0_18px_40px_rgba(14,165,233,0.26)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(14,165,233,0.34)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Email Now"}
                </button>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Project%20Inquiry`}
                  className="btn-secondary inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-sky-200 dark:border-slate-700 dark:hover:border-sky-500/40"
                >
                  Direct Email
                </a>
              </div>

              {status.message ? (
                <div
                  className={`mt-5 rounded-[1.4rem] border px-4 py-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-300"
                      : status.type === "error"
                      ? "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-500/25 dark:bg-rose-500/10 dark:text-rose-300"
                      : "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
