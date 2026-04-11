import { useEffect, useState } from "react";
import {
  HiMiniBars3BottomRight,
  HiMiniXMark,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

const navItems = [
  { label: "Home", href: "#hero", section: "hero" },
  { label: "About", href: "#about", section: "about" },
  { label: "Services", href: "#services", section: "services" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Contact", href: "#contact", section: "contact" },
];

const getPreferredTheme = () => {
  const storedTheme = window.localStorage.getItem("portfolio-theme");

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const nextTheme = getPreferredTheme();
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

  const scrollToSection = (href) => {
    const target = document.querySelector(href);

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 88,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  };

  const handleNavClick = (event, href) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1100] transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`section-shell flex items-center justify-between rounded-[2rem] border px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
            scrolled
              ? "border-white/50 bg-white/72 shadow-[0_18px_60px_rgba(15,23,42,0.10)] dark:border-slate-700/70 dark:bg-slate-950/72 dark:shadow-[0_18px_60px_rgba(2,6,23,0.45)]"
              : "border-white/20 bg-white/46 dark:border-slate-800/40 dark:bg-slate-950/42"
          }`}
        >
          <a
            href="#hero"
            onClick={(event) => handleNavClick(event, "#hero")}
            className="py-2 text-sm font-extrabold tracking-[0.18em] text-slate-900 transition-colors dark:text-white md:text-base"
          >
            MUHAMMAD BILAL
            <span className="text-sky-500">.</span>
          </a>

          <div className="hidden items-center rounded-full border border-white/50 bg-white/55 p-1 shadow-lg shadow-slate-900/5 dark:border-slate-700/70 dark:bg-slate-900/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.section}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  activeSection === item.section
                    ? "bg-sky-400/20 text-sky-900 shadow-sm shadow-sky-900/10 dark:bg-sky-500/20 dark:text-sky-100 dark:shadow-none hover:bg-sky-400/30 dark:hover:bg-sky-500/30"
                    : "text-slate-700 hover:text-sky-700 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-900 shadow-lg shadow-slate-900/5 transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-500/40 dark:hover:bg-slate-900 cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <HiOutlineSun className="text-xl" />
              ) : (
                <HiOutlineMoon className="text-xl" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="btn-primary hidden rounded-full px-5 py-3 text-sm font-semibold shadow-[0_14px_32px_rgba(14,165,233,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(14,165,233,0.34)] md:inline-flex"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-900 shadow-lg shadow-slate-900/5 transition-all hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900 lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <HiMiniXMark className="text-2xl" />
              ) : (
                <HiMiniBars3BottomRight className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[1080] bg-slate-950/30 transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav"
        className={`fixed inset-x-4 top-24 z-[1090] rounded-[2rem] border p-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        } border-white/70 bg-white/94 shadow-slate-900/12 dark:border-slate-700/70 dark:bg-slate-950/94 dark:shadow-slate-950/40`}
      >
        <div className="grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                activeSection === item.section
                  ? "bg-sky-400/20 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100 hover:bg-sky-400/30 dark:hover:bg-sky-500/30"
                  : "text-slate-700 hover:text-sky-700 dark:text-slate-200 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="mt-4 grid gap-3">
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="btn-primary inline-flex w-full justify-center rounded-2xl px-5 py-3.5 text-sm font-semibold shadow-[0_14px_32px_rgba(14,165,233,0.28)]"
          >
            Start a Project
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-secondary inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold dark:border-slate-700"
          >
            {theme === "dark" ? <HiOutlineSun /> : <HiOutlineMoon />}
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
