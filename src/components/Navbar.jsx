import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl text-indigo-600">
              GrammarSimplified
            </h1>
            <p className="text-xs text-gray-500">
              by Sonali Bhanwar
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-indigo-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-indigo-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#courses"
              className="hover:text-indigo-600 transition"
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="#community"
              className="hover:text-indigo-600 transition"
            >
              Community
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="https://www.youtube.com/@grammarsimplified?sub_confirmation=1"
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition"
        >
          Subscribe
        </a>

      </div>
    </nav>
  );
}

export default Navbar;