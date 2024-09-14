import { useState } from "react";
import { navLinks } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/icons";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the hamburger menu

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header
      className="w-full sm:px-16"
      style={{ position: "fixed", width: "100%", backgroundColor: "#fff" }}
    >
      <nav className="flex justify-between max-container px-4 items-center">
        <a href="/" className="text-[30px]">
          <img src={logo} style={{ height: "50%", width: "70px" }} alt="logo" />
        </a>

        {/* Desktop menu */}
        <ul className="flex flex-1 gap-16 justify-center max-xl:hidden">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href="#" className="text-sm uppercase">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Login/Register buttons for desktop */}
        <div className="flex gap-10 max-xl:hidden text-sm">
          <a
            href="#"
            className="flex items-center py-3 px-12 text-blue border-2  border-[#003366] rounded-lg uppercase hover:bg-[#003366] hover:text-white"
          >
            login
          </a>
          <a
            href="#"
            className="flex items-center py-3 px-12 bg-[#003366] rounded-lg text-white uppercase hover:text-green-500"
          >
            register
          </a>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="max-xl:block md:hidden px-2">
          <GiHamburgerMenu
            className="text-[30px] text-[#003366] cursor-pointer"
            onClick={handleMenuToggle} // Handle click to toggle the dropdown menu
          />
        </div>

        {/* Dropdown menu for mobile */}
        {menuOpen && (
          <div className="absolute top-full md:hidden left-0  w-full bg-white shadow-lg z-10 max-xl:flex flex-col items-start px-5 ">
            <ul className="w-full ">
              {navLinks.map((item) => (
                <li key={item.name} className="w-full py-2">
                  <a
                    href="#"
                    className="block w-full p-2 text-sm uppercase hover:bg-gray-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 w-full">
              <a
                href="#"
                className="w-full flex items-center py-3 px-4 text-blue border-2 border-[#003366] rounded-lg uppercase hover:bg-[#003366] hover:text-white text-center"
              >
                login
              </a>
              <a
                href="#"
                className="w-full flex items-center py-3 mb-2 px-4 bg-[#003366]  hover:text-green-500 rounded-lg text-white uppercase text-center"
              >
                register
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
