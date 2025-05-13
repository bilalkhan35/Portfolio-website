function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-800 shadow-2xl cursor-pointer hover:font-medium">
        MBK
      </h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
