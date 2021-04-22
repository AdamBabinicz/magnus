import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "FIDE",
    links: ["Międzynarodowa Federacja Szachowa"],
    to: "//www.fide.com",
  },
  {
    id: uuidv4(),
    title: "PZSz",
    links: ["Polski Związek Szachowy"],
    to: "//pzszach.pl",
  },
  {
    id: uuidv4(),
    title: "UKS ROSZADA",
    links: ["Uczniowski Klub Sportowy"],
    to: "//roszada.radom.pl",
  },
  {
    id: uuidv4(),
    title: "Wiktor-chess",
    links: ["Radomski Szachista"],
    to: "//wiktor-chess.netlify.app",
  },
];

export default data;
