import React, { useState } from "react";
import data from "../data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  // eslint-disable-next-line
  const [posts, setPosts] = useState(data);

  return (
    <>
      <div className="px-4 lg:px-32 pt-4 lg:pb-10 flex items-center justify-between">
        <h2 className="text-2xl lg:text-3xl">Wyniki turniejów</h2>
        <Link target="_blank" rel="noopener noreferrer" to="//ratings.fide.com">
          Klasyfikacja
        </Link>
      </div>
      <section className="lg:px-32 grid lg:grid-cols-3 gap-10">
        {posts.map((post) => {
          const { id, image, desc, tag, date } = post;

          return (
            <div key={id} className="px-4 border py-5 rounded-lg">
              <img src={image} alt="..." className="rounded-lg w-full" />
              <h4 className="font-bold my-2">{desc}</h4>
              <div className="flex items-center justify-between">
                <p className="text-sm bg-black bg-opacity-30 text-white text-opacity-90 px-2 py-1 rounded-lg">
                  {tag}
                </p>
                <p className="text-sm text-black text-opacity-60">{date}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Blog;
