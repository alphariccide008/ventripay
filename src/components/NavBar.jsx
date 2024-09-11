import { navLinks } from "../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/icons";

const NavBar = () => {
  return (
    <header className=" w-full py-5  sm:px-16 px-8">
      <nav className="flex justify-between max-container items-center  ">
        <a href="/" className="text-[30px]">
         <img src={logo} 
         width={100}
         height={100}
         alt="logo" />
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
          <a href="#" className=" flex items-center py-3 px-12 text-blue border-2 border-[#003366] rounded-lg uppercase">login</a>
          <a href="#" className="flex items-center py-3 px-12 bg-[#003366] rounded-lg text-white uppercase">register</a>
        </div>
        <div className=" hidden max-xl:block ">
          <GiHamburgerMenu className="text-[30px] text-[#003366]" />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
