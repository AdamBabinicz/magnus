import React from "react";
import testImg from "../images/22.jpg";

const Testimonial = () => {
  return (
    <>
      <h2 className="lg:px-32 px-6 text-center lg:text-left pt-4 pb-10 text-2xl lg:text-3xl">
        Wielka pasja do szachów - idą nowi!
      </h2>
      <section className="relative pb-96">
        <div className="lg:bg-black lg:bg-opacity-20 py-10 lg:py-20 lg:px-32 lg:w-2/3">
          <p className="lg:w-2/3 mb-5 px-5 lg:px-0">
            W Akademii Szachowej Marka Niedźwieckiego dojrzewają do tytułów
            mistrzów i arcymistrzów w szachach nowe pokolenia dzieci, młodzieży
            i dorosłych, którzy marzą o karierze na miarę Carlsena, Kasparowa
            czy Fishera.
          </p>
          <h3 className="text-xl lg:text-2xl text-center lg:text-left">
            Następcy Carlsena
          </h3>
          <p className="uppercase mt-2 text-center lg:text-left">
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
        <div className="relative lg:px-32 text-center lg:text-left mt-48 lg:mt-24">
          <button className="absolute left-36 top-72 lg:top-48 outline-none bg-black bg-opacity-60 text-white font-bold uppercase py-4 px-10 transition-all rounded-full hover:bg-black bg-opacity-40">
            Czytaj więcej
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
