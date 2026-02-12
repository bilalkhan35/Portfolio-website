function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/75 border-b border-white/60">
      <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center">
        <a
          href="#top"
          className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-900"
        >
          Muhammad Bilal Rathore<span className="text-sky-600">.</span>
        </a>
        <ul className="flex items-center space-x-6 text-slate-700 font-semibold text-sm md:text-base">
        <li>
            <a href="#about" className="hover:text-sky-600">
            About
          </a>
        </li>
        <li>
            <a href="#projects" className="hover:text-sky-600">
            Projects
          </a>
        </li>
        <li>
            <a href="#contact" className="hover:text-sky-600">
            Contact
          </a>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
