import React from "react";
const NavItem = ({ text }) => {
  return (
    <div className="  text-white cursor-pointer hover:text-slate-300 font-sans">
      {text}
    </div>
  );
};

export default NavItem;
