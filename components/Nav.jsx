import NavItem from "./NavItem";
import { GoChevronDown } from "react-icons/go";
import Mobile from "./Mobile";
import { useCallback, useState, useEffect } from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import AccountMenu from "./AccountMenu";


const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 66) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = useCallback(() => {
    setShowMenu((current) => !current);
  }, []);
  const toggleProfile = useCallback(() => {
    setShowProfile((current) => !current);
  }, []);
  return (
    <nav className="w-full fixed z-30">
      <div
        className={`px-6 py-6 md:px-32  flex items-center transition duration-300 ${
          toggleNav ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <img className="max-w-[55px] " src="/images/LogoCN.webp" alt="" />
        <div className=" hidden lg:flex flex-row gap-6 ml-10">
          <NavItem text="Sci-fi" />
          <NavItem text="Adventure" />
          <NavItem text="Thriller" />
          <NavItem text="Action" />
          <NavItem text="Comedy" />
        </div>
        <div className="lg:hidden cursor-pointer flex items-center gap-3 ml-10 relative">
          <p onClick={toggleMenu} className="text-white hover:text-slate-300 ">
            Browse
          </p>
          <GoChevronDown
            onClick={toggleMenu}
            className={`text-white hover:text-slate-300 cursor-pointer ${
              showMenu ? " rotate-180 " : " rotate-0"
            }`}
          />
          <Mobile showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="flex ml-auto gap-6 ">
          <div className=" text-slate-200 hover:text-slate-400 cursor-pointer">
            <BsSearch />
          </div>
          <div className=" text-slate-200 hover:text-slate-400 cursor-pointer">
            <BsBell />
          </div>
          <div className="flex gap-2 text-slate-200 items-center relative">
            <CgProfile
              size={18}
              className="hover:text-slate-400 cursor-pointer"
              onClick={() => toggleProfile()}
            />
            <GoChevronDown
              size={18}
              className={`hover:text-slate-400 cursor-pointer ${
                showProfile ? " rotate-180 " : " rotate-0"
              }`}
              onClick={() => toggleProfile()}
            />
            <AccountMenu showProfile={showProfile} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
