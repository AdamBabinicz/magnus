import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    text: "Home",
    to: "/",
  },
  {
    id: uuidv4(),
    text: "Turnieje",
    to: "/turnieje",
  },
  {
    id: uuidv4(),
    text: "Życiorys",
    to: "/zyciorys",
  },
  {
    id: uuidv4(),
    text: "Następcy",
    to: "/narybek",
  },
  {
    id: uuidv4(),
    text: "Klasyfikacja",
    to: "/klasyfikacja",
  },
];

export default data;
