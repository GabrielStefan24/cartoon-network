import React from "react";
const NavItem = ({ text }) => {
  return (
    <div className=" text-lg text-white cursor-pointer underline-animation">
      {text}
    </div>
  );
};

export default NavItem;
