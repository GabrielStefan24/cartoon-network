import NavItem from "./NavItem";
import { GoChevronDown } from "react-icons/go";
import Mobile from "./Mobile";
import { useCallback, useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setShowMenu((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-30">
      <div className="px-6 py-6 md:px-32  flex flex-row items-center  ">
        <img className="max-w-[55px] " src="/images/LogoCN.webp" alt="" />
        <div className=" hidden lg:flex flex-row gap-6 ml-10">
          <NavItem text="Home" />
          <NavItem text="Popular" />
          <NavItem text="Shows" />
          <NavItem text="Movies" />
          <NavItem text="My List" />
        </div>
        <div className="lg:hidden cursor-pointer flex items-center gap-3 ml-10 relative">
          <p onClick={toggleMenu} className="text-white text-lg ">
            Browse
          </p>
          <GoChevronDown
            onClick={toggleMenu}
            className="text-white transition "
          />
          {showMenu && <Mobile />}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
