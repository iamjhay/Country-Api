import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThumbDetail from "../components/ThumbDetail";

const Home = () => {
  const [countries, setCountries] = useState([]);

  //   api.coinmarketcap.com/v1/ticker/?limit=10

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const searchCountry = async (term) => {
    if (term.length < 3 || term === "") return;
    await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  };

  const filterByRegion = async (e) => {
    const countryRegion = e.target.value;
    const url =
      countryRegion === "all"
        ? "https://restcountries.eu/rest/v2/all"
        : `https://restcountries.eu/rest/v2/region/${countryRegion}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <Navbar />
      <div className="w-5/6 lg:w-full container mx-auto mb-16 flex">
        <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-3 rounded-md text-gray-400"></i>
        <input
          type="text"
          placeholder="search for a country..."
          className="pl-10 p-2 mr-2 sm:mr-0 shadow-md rounded-md w-3/5 sm:w-2/5 lg:w-1/3 dark:bg-gray-700"
          onChange={(term) => searchCountry(term.target.value)}
        />
        <select
          className="ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700"
          onChange={filterByRegion}
        >
          <option>all</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="Asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className=" w-5/6 lg:w-full container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-16 mx-auto mb-8 sm:mb-16">
        {countries.map((country, index) => (
          <Link to={{ pathname: "details", state: country }} key={index}>
            <ThumbDetail
              title={country.name}
              image_url={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
