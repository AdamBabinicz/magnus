import React, { useState } from "react";
import data from "../data/footer";
import footerIcon from "../images/chess.png";
import { Link } from "react-router-dom";
// import { scroller } from "react-scroll";

const Footer = () => {
  // eslint-disable-next-line
  const [footerLinks, setFooterLinks] = useState(data);
  return (
    <>
      <footer className="px-10 flex-cols lg:flex lg:justify-between lg:px-40 py-20 pb-28">
        <Link
          to=""
          // smooth={true}
          className="relative flex justify-center lg:items-start"
        >
          <img
            src={footerIcon}
            alt="chess"
            className="w-44 h-auto -mt-10 lg:mt-0 lg:w-20"
          />
        </Link>
        {footerLinks.map((fl) => {
          const { id, title, links, to } = fl;

          return (
            <div key={id} className="mt-5 lg:-mt-2 text-center lg:text-left">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => {
                  return (
                    <Link
                      key={link}
                      className="my-1 text-sm text-black transition-all text-opacity-60 tracking-wide hover:text-opacity-90"
                      target="_blank"
                      rel="noopener noreferrer"
                      to={to}
                    >
                      {link}
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </footer>
      <p className="text-center -mt-16 mb-10 font-bold text-black text-opacity-60">
        Radom 2021 - {new Date().getFullYear()}.
      </p>
    </>
  );
};

export default Footer;
