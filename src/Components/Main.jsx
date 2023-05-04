import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Moviecard from "./Moviecard";
let API_key = "&api_key=5f3367b81c01f8b9a3ea6d7c7b164415";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];
const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };
  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <nav className="flex justify-center">
          <ul className="block space-x-16 m-9 sm:flex">
            {arr.map((value, pos) => {
              return (
                <li key={pos}>
                  <a
                    href="#"
                    className="text-white hover:text-purple-400 duration-200"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form className="mb-10" onSubmit={handleSubmit}>
          <div className="m-auto w-full flex">
            <input
              type="text"
              placeholder="Enter Movie Name"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
              className="w-3/4 px-2 m-auto py-2 bg-transparent outline-none border border-white rounded-md text-white placeholder-white"
            ></input>
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      {/* <Carousel /> */}
      <div className="w-[1300px] m-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {movieData.length == 0 ? (
          <p className="text-white my-20 mx-20">Not Found</p>
        ) : (
          movieData.map((res, pos) => <Moviecard key={pos} info={res} />)
        )}
      </div>
    </>
  );
};
export default Main;
