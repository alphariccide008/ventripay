import { navLinks } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <header className=" w-full py-5 bg-blue-400 sm:px-16 px-8">
      <nav className="flex justify-between max-container items-center  ">
        <a href="/" className="text-[30px]">
          ventripay 
        </a>

        <ul className="flex flex-1 gap-16 justify-center max-xl:hidden">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href="#" className="text-lg uppercase">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-10 max-xl:hidden text-lg ">
          <a href="#" className=" flex items-center py-3 px-12 bg-blue-800 rounded-lg text-white">login</a>
          <a href="#" className="flex items-center py-3 px-12 bg-slate-400 rounded-lg text-white">register</a>
        </div>
        <div className=" hidden max-xl:block ">
          <GiHamburgerMenu className="text-[30px]" />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
