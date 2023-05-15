import React from "react";
const NavItem = ({ text, setFilter }) => {
  return (
    <div
      className="  text-white cursor-pointer hover:text-slate-300 font-sans"
      onClick={() => setFilter(text)}
    >
      {text}
    </div>
  );
};

export default NavItem;
