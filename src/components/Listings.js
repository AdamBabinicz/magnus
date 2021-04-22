import React, { useState } from "react";
import data from "../data/listings";
import { FaPhone } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Listings = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(data);

  return (
    <>
      <div className="flex items-center justify-between pt-4 px-4 lg:px-32 mb-5">
        <h2 className="text-color font-bold text-2xl lg:text-3xl">
          Zobacz listę najbliższych turniejów:
        </h2>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="//fide.com/calendar"
          className="text-sm text-black text-opacity-60 transition-all cursor-pointer hover:text-black text-opacity-40 hover:underline"
        >
          więcej
        </Link>
      </div>
      <section className="lg:px-32 grid lg:grid-cols-2 gap-10">
        {cards.map((card) => {
          const {
            id,
            image,
            tag1,
            tag2,
            tag3,
            tag4,
            title,
            details,
            location,
            phone,
            to,
          } = card;

          return (
            <div key={id} className="border rounded p-5 relative">
              <img src={image} alt={title} className="w-full rounded-lg mb-2" />
              <div className="mb-4">
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag1}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag2}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag3}
                </small>
                <small className="mx-2 px-2 py-1 rounded-lg text-xs">
                  {tag4}
                </small>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl">{title}</h3>
                <Link
                  key={id}
                  target="_blank"
                  rel="noopener noreferrer"
                  to={to}
                  className="text-sm cursor-pointer text-black text-opacity-60 hover:text-black text-opacity-40 hover:underline"
                >
                  {details}
                </Link>
              </div>
              <p className="flex items-center text-black text-opacity-60 text-sm mb-3">
                <HiLocationMarker className="mr-3 text-black text-opacity-40 text-xl" />
                {location}
              </p>
              <p className="flex items-center text-black text-opacity-60 text-sm">
                <FaPhone className="mr-3 text-black text-opacity-40 text-xl" />
                {phone}
              </p>
              <div className="absolute top-8 right-8 bg-white bg-opacity-60 inline-block p-2 rounded-full">
                <BsHeart className="text-xl" />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Listings;
