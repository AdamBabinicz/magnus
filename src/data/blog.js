import { v4 as uuidv4 } from "uuid";
import img1 from "../images/25.jpg";
import img2 from "../images/24.jpg";
import img3 from "../images/16.jpg";
import img4 from "../images/28.jpg";
import img5 from "../images/1.png";
import img6 from "../images/23.jpg";

const data = [
  {
    id: uuidv4(),
    image: img6,
    desc:
      "Fabiano Caruana z USA, pokonał lidera turnieju Maxime’a Vachier-Lagrave. Amerykanin wygrał w wielkim stylu, poświęcając materiał w debiucie, aby stworzyć bardzo ostrą i niebezpieczną pozycję. Francuski arcymistrz nadział się na przygotowanie debiutowe Caruany, ale bronił się wyjątkowo dobrze na tym, co wydawało się polem minowym.",
    tag: "Jekaterynburg",
    date: "19 kwietnia 2021 r.",
  },
  {
    id: uuidv4(),
    image: img1,
    desc:
      "Holender Anish Giri pokonał Rosjanina Jana Niepomniaszczego po dogrywce w finale turnieju online w szachach szybkich Magnus Carlsen Invitational, czwartego z cyklu Champions Chess Tour. Pula nagród wynosiła 200 tys. dol., zwycięzca otrzymał 60, a pokonany 40 tysięcy.",
    tag: "online",
    date: "21 marca 2021 r.",
  },
  {
    id: uuidv4(),
    image: img4,
    desc:
      "Jan-Krzysztof Duda zremisował z Pentalą Harikrishną z Indii, podobnie jak Radosław Wojtaszek z Irańczykiem Alirezą Firouzją, w ostatniej rundzie turnieju szachowego w Wijk aan Zee. Triumfował Holender Jorden Van Foreest po wygranej w dogrywce z rodakiem Anishem Girim.",
    tag: "Wijk Aan Zee",
    date: "31 stycznia 2021 r.",
  },
  {
    id: uuidv4(),
    image: img5,
    desc:
      "Wielkie zwycięstwo podczas turnieju Altibox Norway Chess odniósł Jan-Krzysztof Duda. Polak pokonał mistrza świata, Norwega Magnusa Carlsena. Przerwał tym samym jego serię 125 partii bez porażki.",
    tag: "Stavanger ",
    date: "16 października 2020 r.",
  },
  {
    id: uuidv4(),
    image: img2,
    desc:
      "Daniił Dubow pokonał Hikaru Nakamurę 3:2 po dogrywce w trzecim finałowym meczu i triumfował w drugim turnieju online z cyklu Magnus Carlsen Invitational w szachach szybkich. Rosjanin zwyciężył z Amerykaninem 2-1.",
    tag: "online",
    date: "03 czerwca 2020 r.",
  },
  {
    id: uuidv4(),
    image: img3,
    desc:
      "Norweg Magnus Carlsen wygrał z Amerykaninem Fabiano Caruaną 3:1, a inny reprezentant USA Hikaru Nakamura pokonał Irańczyka Alirezję Firouzję 3,5:0,5 w piątym dniu szachowego turnieju online z udziałem czołowych arcymistrzów świata.",
    tag: "online",
    date: "23 kwietnia 2020 r.",
  },
];

export default data;
