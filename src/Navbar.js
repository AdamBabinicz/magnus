import React, { useState } from "react";
import data from "../data/navbar";
import logo from "../images/chess.png";
import { Link } from "react-router-dom";
// import { scroller } from "react-scroll";

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(data);

  return (
    <>
      <header className="fixed bg-gray-100 w-full z-50 flex items-center justify-between py-3 px-5 lg:px-32">
        <Link to="/" smooth={true}>
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="lg:flex text-sm">
            {links.map((link) => {
              const { id, text, to } = link;

              return (
                <Link key={id} to={to} className="mx-5">
                  {text}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div>
          <button className="mx-3 text-sm text-black text-opacity-60 font-bold uppercase transition-all hover:text-black text-opacity-40">
            Log In
          </button>
          <button className="text-sm bg-white py-2 px-2 rounded-full text-black text-opacity-60 font-bold uppercase border transition-all hover:text-white text-opacity-80 hover:bg-black bg-opacity-60">
            Sign In
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
