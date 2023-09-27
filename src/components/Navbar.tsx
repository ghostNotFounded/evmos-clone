import { useState } from "react";
import TechnologyDropdown from "./TechnologyDropdown";
import logoWhite from "/logo-white.png";
import logoBlack from "/logo-black.png";

import { ArrowDownIcon } from "@heroicons/react/24/solid";
import CommunityDropdown from "./CommunityDropdown";
import AboutDropdown from "./AboutDropdown";

const Navbar = () => {
  const navlinks = ["Technology", "Community", "About"];

  const [active, setActive] = useState("");

  return (
    <div
      className={`bg-transparent px-20 py-5 flex justify-between absolute w-full z-20 ${
        active === "" ? "" : "text-black"
      }`}
    >
      <h1 className=" font-semibold text-4xl flex items-center space-x-2 cursor-pointer hover:scale-95 duration-300">
        <img
          src={active === "" ? logoWhite : logoBlack}
          alt=""
          className="w-16"
        />
        <span>Evmos</span>
      </h1>
      <ul className="flex space-x-20 items-center">
        {navlinks.map((link) => (
          <li
            key={link}
            className={`text-xl cursor-pointer font-semibold duration-300 flex items-center space-x-2 ${
              active === link ? "text-[#f7610c]" : ""
            }`}
            onMouseEnter={() => {
              setActive(link);
            }}
          >
            <p>{link}</p>
            <ArrowDownIcon
              className={`w-5 duration-1000 ${
                active === link ? "rotate-180" : ""
              }`}
            />
          </li>
        ))}
        <button className="text-black px-8 py-3 rounded-lg bg-[#f4620f]  font-semibold text-xl">
          Launch App
        </button>
      </ul>
      {active === "Technology" ? (
        <TechnologyDropdown setActive={setActive} />
      ) : active === "Community" ? (
        <CommunityDropdown setActive={setActive} />
      ) : active === "About" ? (
        <AboutDropdown setActive={setActive} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
