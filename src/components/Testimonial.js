import React, { useState } from "react";
import testImg from "../images/22.jpg";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";

const Testimonial = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <h2 className="lg:px-32 px-6 text-center lg:text-left pt-4 pb-10 text-2xl lg:text-3xl">
        Wielka pasja do szachów - idą nowi!
      </h2>
      <section className="relative pb-64 lg:pb-96">
        <div className="lg:bg-black lg:bg-opacity-20 py-1 lg:py-20 lg:px-32 lg:w-2/3">
          <p className="lg:w-2/3 mb-5 px-5 lg:px-0 text-justify">
            W Akademii Szachowej Marka Niedźwieckiego dojrzewają do tytułów
            mistrzów i arcymistrzów w szachach nowe pokolenia dzieci, młodzieży
            i dorosłych, którzy marzą o karierze na miarę Carlsena, Kasparowa
            czy Fishera.
          </p>
          <h3 className="text-xl lg:text-2xl text-center lg:text-left">
            Następcy Carlsena
          </h3>
          <p className="uppercase mt-2 mb-3 text-center lg:text-left">
            Narybek z "kuźni talentów" Marka Niedźwiedzkiego
          </p>
        </div>
        <div>
          <img
            src={testImg}
            alt="..."
            className="absolute lg:right-0 lg:top-10 lg:w-6/12 px-4 w-full"
          />
        </div>
        <div className="relative flex justify-center lg:grid lg:place-items-start lg:px-32 lg:ml-32 mt-48 lg:mt-24">
          <button
            onClick={() => setModalIsOpen(true)}
            className="absolute top-40 lg:top-48 outline-none bg-black bg-opacity-60 text-white font-bold uppercase py-4 px-10 transition-all rounded-full hover:bg-black bg-opacity-40"
          >
            Czytaj więcej
          </button>
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,.8)",
              },
              content: {
                position: "absolute",
                top: "40px",
                left: "40px",
                right: "40px",
                bottom: "40px",
                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "4px",
                outline: "none",
                padding: "20px",
              },
            }}
          >
            <h2 className="text-center font-bold lg:text-2xl sm:text-xl mt-4 mb-6">
              Akademia Szachowa Marka Niedźwieckiego
            </h2>
            <p className="lg:px-10 sm:px-2 lg:text-left">
              Marek Niedźwiecki jest sędzią szachowym klasy centralnej
              i&nbsp;instruktorem szachowym. Zorganizował liczne turnieje
              szachowe. Koordynuje program powszechnej nauki gry w&nbsp;szachy
              oraz „Akademię szachową Marka Niedźwieckiego”. Jest autorem
              podręczników szachowych „Twój pierwszy ruch”, „Poznaj smak
              szachów. Mat w&nbsp;jednym posunięciu” oraz „Poznaj smak szachów -
              mat w&nbsp;dwóch posunięciach”. To także wieloletni prezes
              Uczniowskiego Klubu Sportowego „Roszada”.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left">
              Pierwsze szachowe kroki stawiał pod okiem swojego taty, gdy miał
              niespełna 9 lat. Jako kilkunastoletni chłopak zastanawiał się,
              dlaczego gry w&nbsp;szachy nie uczą w&nbsp;szkole, przecież to
              także dyscyplina sportowa. Wtedy też postanowił, że&nbsp;kiedyś
              dołoży wszelkich starań, aby propagować tę grę w&nbsp;szkołach.
              Pan Marek pochodzi z&nbsp;Ciechanowa, a&nbsp;do Radomia
              przeprowadził się ponad trzy dekady temu. I&nbsp;tak jak
              postanowił - wchodził z&nbsp;szachami do szkół. Jak podkreśla,
              jest wielu młodych ludzi, w&nbsp;każdym środowisku, którzy chętnie
              poznają tajniki tej gry.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left">
              Aby zachęcić mieszkańców Radomia do gry w&nbsp;szachy, przez kilka
              lat organizował warsztaty, które miały przygotować nauczycieli do
              prowadzenia zajęć szachowych w&nbsp;szkole. Z&nbsp;warsztatami
              wyjeżdżał też poza Radom - na przykład do Starachowic.
              Z&nbsp;czasem powstał tam bardzo aktywnie działający klub, który
              między innymi organizuje Ogólnopolskie Mistrzostwa Ministrantów
              Gry w&nbsp;Szachy.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left">
              Nie sposób wyliczyć wszystkie turnieje szachowe organizowane przez
              Marka Niedźwieckiego, czy takie, których był współorganizatorem.
              Ale daje się zauważyć przede wszystkim to, że&nbsp;najczęściej są
              to turnieje tematycznie, związane z&nbsp;historycznymi
              wydarzeniami czy postaciami, które zapisały się złotymi zgłoskami
              na kartach dziejów Polski. Były zatem np. z&nbsp;okazji rocznicy
              wyboru Karola Wojtyły na papieża, Mistrzostwa Radomia Szkół
              Ponadgimnazjalnych w&nbsp;Szachach im. rtm. Witolda Pileckiego czy
              z&nbsp;okazji Święta Odzyskania Niepodległości. Śmiało można
              powiedzieć, że&nbsp;działania M. Niedźwieckiego, to również
              promocja Radomia na terenie Polski.
            </p>
            <br />
            <p className="lg:px-10 sm:px-2 lg:text-left italic">
              https://radom.gosc.pl/doc/4408111.Z-szachami-w-2018-rok
            </p>
            <div>
              <button onClick={() => setModalIsOpen(false)}>
                <MdClose className="absolute right-3 top-3 text-2xl" />
              </button>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
