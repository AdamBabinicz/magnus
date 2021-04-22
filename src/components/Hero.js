import React from "react";
import heroImg from "../images/magnus.png";

const Hero = () => {
  return (
    <>
      <section className="relative h-full -my-14">
        <div className="flex flex-col lg:justify-center h-screen px-10 lg:px-32">
          <h1 className="text-color mt-20 font-bold text-2xl lg:text-5xl leading-snug lg:w-1/2 mb-10">
            <span className="span-color ml-0 text-3xl lg:text-6xl">
              Magnus Carlsen
            </span>{" "}
            pierwsze szachowe turnieje rozegrał w&nbsp;roku 2001.
          </h1>
          <p className="lg:w-1/2">
            Dwa lata później posiadał już tytuł mistrza międzynarodowego,
            a&nbsp;w&nbsp;roku 2004 otrzymał tytuł arcymistrza. 🏆
          </p>
        </div>
        <div className="absolute lg:right-20 top-80 lg:top-48">
          <img src={heroImg} alt="Magnus Carlsen" />
        </div>
      </section>
    </>
  );
};

export default Hero;
