import { v4 as uuidv4 } from "uuid";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/5.jpg";

const data = [
  {
    id: uuidv4(),
    image: img4,
    tag1: "90min/40mvs+2x30min...",
    tag2: "Standard",
    tag3: "9",
    tag4: "01 - 11.05.2021'",
    title: "FIRST SATURDAY 2021 May, Budapest GM-IM-ELO-Shev. Nadassy Sys. FM",
    details: "więcej",
    location: "Budapest (HUN)",
    phone: "+36 30 230 1914",
    to: "//fide.com/calendar/50933",
  },
  {
    id: uuidv4(),
    image: img1,
    tag1: "90'x40m.+15'+30",
    tag2: "Standard",
    tag3: "7",
    tag4: "29.04 - 02.05.2021'",
    title: "MEDIGLIA International Open",
    details: "więcej",
    location:
      "Ristorante CLAN DESTINO Strada Provinciale Bettola-Sordio, 7 - Mediglia (MI)",
    phone: "+39 3458596995",
    to: "//fide.com/calendar/51180",
  },
  {
    id: uuidv4(),
    image: img2,
    tag1: "90min+30sec",
    tag2: "Standard",
    tag3: "9",
    tag4: "24 - 30.04.2021'",
    title: "IM Round Robin",
    details: "więcej",
    location: "Belgrade",
    phone: "063/1758302",
    to: "//fide.com/calendar/51238",
  },
  {
    id: uuidv4(),
    image: img3,
    tag1: "90min+ 30 sec",
    tag2: "Standard",
    tag3: "9 - 12",
    tag4: "23 - 30.04.2021'",
    title: "IM RR third saturday",
    details: "więcej",
    location: "	Novi Sad",
    phone: "0628047003",
    to: "//fide.com/calendar/51232",
  },
];

export default data;
