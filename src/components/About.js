import React from "react";
import img1 from "../images/12.jpg";
import img2 from "../images/11.jpg";
import img3 from "../images/10.jpg";
import img4 from "../images/13.jpg";
import img5 from "../images/8.jpg";
import img6 from "../images/9.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/6.jpg";
// import { scroller } from "react-scroll";

const About = () => {
  return (
    <>
      <h2 className="px-32 pt-4 pb-10 text-2xl text-center lg:text-left lg:text-3xl">
        Życiorys
      </h2>
      <section className="px-4 lg:px-32 grid lg:grid-cols-2 gap-10 pb-10">
        <div className="grid gap-y-5 lg:grid-cols-2 gap-5">
          <div>
            <img src={img1} alt="..." className="w-full" />
          </div>
          <div>
            <img src={img2} alt="..." />
          </div>
          <div>
            <img src={img3} alt="..." />
          </div>
          <div>
            <img src={img4} alt="..." />
          </div>
          <div>
            <img src={img5} alt="..." />
          </div>
          <div>
            <img src={img6} alt="..." />
          </div>
          <div>
            <img src={img7} alt="..." />
          </div>
          <div>
            <img src={img8} alt="..." />
          </div>
        </div>

        <div className="px-5 lg:px-0">
          <p className="text-black text-opacity-60 mb-4 text-xl">
            <b>Sven Magnus Øen Carlsen</b> urodził się 30 listopada 1990 r.
            w&nbsp;Tønsberg, Vestfold w Norwegii. Jego rodzice, Sigrun Øen
            i&nbsp;Henrik Albert Carlsen, są inżynierami z&nbsp;zawodu. Zaczął
            pokazywać swoje zdolności intelektualne, gdy był jeszcze małym
            dzieckiem. W&nbsp;wieku dwóch lat mógł samodzielnie rozwiązać
            50-częściowe układanki, a&nbsp;w&nbsp;wieku czterech lat przystąpił
            do składania zestawów Lego przeznaczonych dla znacznie starszych
            dzieci. Jego ojciec rozpoznał błyskotliwość i&nbsp;ducha rywalizacji
            chłopca i&nbsp;nauczył go grać w&nbsp;szachy. Carlsen bardzo
            zafascynował się tą grą i&nbsp;grał sam przez długie godziny. Zaczął
            także czytać książki o&nbsp;szachach, które pomogły mu
            w&nbsp;opracowaniu planu gry i&nbsp;umiejętności. Obdażony wspaniałą
            pamięcią, wkrótce stał się budzącym grozę szachistą, mimo młodego
            wieku. Grał w&nbsp;swoim pierwszym turnieju - najmłodszej lidze
            Mistrzostw Norwegii w 1999 roku - w wieku ośmiu lat. W&nbsp;latach
            2000 – 2002 Carlsen rozegrał prawie 300 gier turniejowych,
            a&nbsp;w&nbsp;2002 r. zajął drugie miejsce w&nbsp;kategorii chłopców
            do lat 12 w&nbsp;Fédération Internationale des Échecs (FIDE)
            Światowych Młodzieżowych Mistrzostwach Szachowych w Iráklion
            w&nbsp;Grecji.
          </p>
          <p className="text-black text-opacity-60 mb-4 text-xl">
            W&nbsp;2004 roku zyskał międzynarodową uwagę po zwycięstwie
            w&nbsp;grupie C na turnieju szachowym Corus w&nbsp;Wijk aan Zee.
            Carlsen był tylko młodym nastolatkiem, a&nbsp;jego zwycięstwo w
            grupie C doprowadziło arcymistrza <b>Lubomira Kavalka</b> do nadania
            mu tytułu <b>„Mozarta szachowego”</b>. W&nbsp;marcu 2004 roku
            pokonał byłego mistrza świata <b>Anatolija Karpowa</b> podczas
            błyskawicznego turnieju szachowego, a&nbsp;następnie wygrał z&nbsp;
            <b>Garrym Kasparowem</b>, który był wówczas najwyżej ocenianym
            graczem na świecie. Carlsen został następnie pokonany przez
            Kasparowa w&nbsp;innej rundzie i&nbsp;tym samym odpadł
            z&nbsp;turnieju. Ukończył na drugim miejscu w Dubai Open Chess
            Championship w&nbsp;kwietniu 2004 r. i został arcymistrzem.
            W&nbsp;tym czasie był najmłodszym arcymistrzem na świecie
            i&nbsp;trzecią najmłodszą osobą, która kiedykolwiek miała status GM.
            Świetnie grał na Mistrzostwach Norwegii w&nbsp;2006 roku, ale
            przegrał z&nbsp;<b>Berge Østenstad</b> w&nbsp;ostatniej rundzie.
            Jednak udało mu się zdobyć tytuł po raz pierwszy w&nbsp;dogrywce.
            W&nbsp;prestiżowym turnieju szachowym Linares w&nbsp;2007 roku
            spotkał kilku groźnych przeciwników, których wielu uważa za
            <b> „Wimbledon szachów”</b>. Carlsen grał z&nbsp;najwyżej ocenianymi
            graczami, takimi jak
            <b>
              {" "}
              Veselin Topałow, Viswanathan Anand, Peter Svidler, Alexander
              Morozevich
            </b>{" "}
            i&nbsp;<b> Levon Aronian</b>, i&nbsp;osiągnął drugie miejsce. Został
            najmłodszą osobą, która wygrała turniej kategorii 18 w&nbsp;sierpniu
            2007 roku, kiedy wygrał Międzynarodowy Festiwal Szachowy Biel
            Grandmaster Tournament. W&nbsp;następnym roku zajął pierwsze miejsce
            z&nbsp;Levonem Aronianem w&nbsp;turnieju szachowym Corus, stając się
            najmłodszą osobą, która kiedykolwiek wygrała turniej kategorii 20.
            W&nbsp;2009 roku wygrał World Blitz Championship w&nbsp;Moskwie,
            a&nbsp;następnie wszedł do London Chess Classic jako główny punkt
            startowy. Udało mu się pokonać byłego mistrza świata
            <b> Vladimira Kramnika</b> i&nbsp;wygrać turniej. W styczniu 2010 r.
            FIDE ogłosiło, że&nbsp;Carlsen jest
            <b> najlepszym graczem na świecie</b>. W&nbsp;2013 roku Magnus
            Carlsen zmierzył się z&nbsp;mistrzem świata w&nbsp;szachach
            Viswanathanem Anandem podczas Mistrzostw Świata w&nbsp;szachach
            w&nbsp;Chennai w&nbsp;Indiach. Carlsen wygrał mistrzostwa 6½ – 3½,
            wygrywając mecze pięć, sześć i&nbsp;dziewięć, a&nbsp;remisując
            resztę. W&nbsp;ten sposób został nowym mistrzem świata
            w&nbsp;szachach, drugim najmłodszym zawodnikiem (po Kasparowie),
            który zdobył tytuł mistrza świata. Ponownie zmierzył się
            z&nbsp;Anandem w&nbsp;meczu o&nbsp;tytuł mistrza świata
            w&nbsp;szachach w&nbsp;listopadzie 2014 roku i&nbsp;skutecznie
            obronił tytuł mistrza świata.
          </p>

          <div className="grid grid-cols-3 place-items-center text-center">
            <div>
              <h3 className="text-black text-opacity-60 font-bold text-2xl lg:text-6xl mb-1">
                2847
              </h3>
              <p className="text-black text-opacity-60">std</p>
            </div>

            <div>
              <h3 className="text-black text-opacity-60 font-bold text-2xl lg:text-6xl mb-1">
                2881
              </h3>
              <p className="text-black text-opacity-60">rapid</p>
            </div>

            <div>
              <h3 className="text-black text-opacity-60 font-bold text-2xl lg:text-6xl mb-1">
                2886
              </h3>
              <p className="text-black text-opacity-60">blitz</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
