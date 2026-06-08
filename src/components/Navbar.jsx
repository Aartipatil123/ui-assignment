import { Menu } from "lucide-react";
import logo from '../assets/partners/logo.jpg'

const Navbar = () => {
  const links = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5"];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="cursor-pointer">
            <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
            />
            </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <li
              key={index}
              className="
                text-gray-700
                font-medium
                cursor-pointer
                hover:text-indigo-600
                transition-colors
                duration-300
              "
            >
              {link}
            </li>
          ))}
        </ul>

        <button
          className="
            hidden md:block
            px-5 py-2.5
            rounded-lg
            bg-indigo-600
            text-white
            font-medium
            hover:bg-indigo-700
            transition-all
            duration-300
          "
        >
          Contact
        </button>

        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;