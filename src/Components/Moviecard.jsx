import React, { useState, useEffect } from "react";
import { useStore } from "../zustand/store";

const Moviecard = (movie) => {
  const [active, setActive] = useState(false);

  const { wishlist, addMovie, removeMovie } = useStore();

  const handleClick = () => {
    setActive(!active);
    active
      ? removeMovie(movie.info.id)
      : addMovie({ id: movie.info.id, name: movie.info.title });
  };

  useEffect(() => {
    const isHave = wishlist?.find(({ id }) => id === movie.info.id);
    isHave ? setActive(true) : null;
  }, []);
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="m-auto cursor-pointer grid gap-4 max-w-60 w-60">
        <div>
          <img
            src={img_path + movie.info.poster_path}
            className="rounded hover:scale-105 duration-200"
          ></img>
        </div>
        <div>
          <div className="flex justify-between">
            <h4 className="text-white font-abc text-xl duration-150">
              {movie.info.title}
            </h4>

            <div
              onClick={handleClick}
              className={`${
                active === true ? "bg-red-500" : "bg-white"
              } rounded py-1 px-1 h-10 w-10 flex justify-center `}
            >
              <button className="text-black">Like</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Moviecard;
