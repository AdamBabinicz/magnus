import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Turnieje",
    path: "/turnieje",
    icon: <FaIcons.FaChessBoard />,
    cName: "nav-text",
  },
  {
    title: "Życiorys",
    path: "/zyciorys",
    icon: <ImIcons.ImFileText />,
    cName: "nav-text",
  },
  {
    title: "Następcy",
    path: "/narybek",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Klasyfikacja",
    path: "/klasyfikacja",
    icon: <SiIcons.SiApachespark />,
    cName: "nav-text",
  },
  //   {
  //     title: "Support",
  //     path: "/support",
  //     icon: <IoIcons.IoMdHelpCircle />,
  //     cName: "nav-text",
  //   },
];
