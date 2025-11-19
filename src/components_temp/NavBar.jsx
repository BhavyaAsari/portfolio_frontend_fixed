import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-4  text-white shadow-lg  border  border-black">
        {/* Logo */}
        <div className="text-3xl font-mono tracking-wider flex items-center cursor-pointer">
          <CgNametag className="mr-2 text-purple-300" />
          PortFolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <a
            href="#skills"
            className="px-5 py-2 rounded-full text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="px-5 py-2 rounded-full text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#education"
            className="px-5 py-2 rounded-full text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Education
          </a>
          {/* <a
            href="#achievements"
            className="px-5 py-2 rounded-full text-lg hover:bg-white hover:text-purple-700 transition-all duration-300"
          >
            Achievements
          </a> */}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {toggle ? (
            <AiOutlineClose
              size={30}
              onClick={() => setToggle(false)}
              className="cursor-pointer hover:text-purple-300/80 transition-colors"
            />
          ) : (
            <HiMenuAlt1
              size={30}
              onClick={() => setToggle(true)}
              className="cursor-pointer hover:text-purple-300/80 transition-colors"
            />
          )}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-purple-800/90 text-center py-6 z-50 shadow-lg transition-all duration-500 ease-in-out">
          <ul className="space-y-4">
            <li>
              <a
                href="#skills"
                onClick={() => setToggle(false)}
                className="block text-white text-lg hover:bg-white hover:text-purple-700/80 px-4 py-2 rounded-full mx-8 transition-all duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setToggle(false)}
                className="block text-white text-lg hover:bg-white hover:text-purple-700/90 px-4 py-2 rounded-full mx-8 transition-all duration-300"
              >
                Projects
              </a>
            </li>
             <li>
              <a
                href="#education"
                onClick={() => setToggle(false)}
                className="block text-white text-lg hover:bg-white hover:text-purple-700 px-4 py-2 rounded-full mx-8 transition-all duration-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                onClick={() => setToggle(false)}
                className="block text-white text-lg hover:bg-white hover:text-purple-700 px-4 py-2 rounded-full mx-8 transition-all duration-300"
              >
                {/* Achievements */}
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
