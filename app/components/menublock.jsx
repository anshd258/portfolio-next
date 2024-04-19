import React from "react";
import NavLink from "./navbarlink";

function MenuBlock({ links }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((value, index) => (
        <li key={index}>
            <NavLink link={value.link} title={value.title}/>
        </li>
      ))}
    </ul>
  );
}

export default MenuBlock;
