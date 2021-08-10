import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Details = () => {
  let { state } = useLocation();
  let history = useHistory();

  const goHomeBtn = () => history.push("/");

  return (
    <div className="bg-gray-100 dark:bg-gray-700 dark:text-white">
      <Navbar />
      <div className="w-5/6 lg:w-full container mx-auto mb-16">
        <button
          className="px-8 py-2 bg-white text-gray-600 shadow-md rounded-lg dark:bg-gray-500 dark:text-white"
          onClick={goHomeBtn}
        >
          <i className="fa fa-arrow-left"></i> Back
        </button>
      </div>
      <div className="w-5/6 lg:w-full container flex flex-col sm:flex-row mx-auto p-8 pr-0 pl-0">
        <img
          src={state.flag}
          className="w-100 sm:w-1/2 pr-0 sm:pr-8"
          alt={state.name}
        />
        <div className="pl-0 p-0">
          <h2 className="font-bold text-2xl mb-8 mt-3">{state.name}</h2>
          <div className="grid grid-cols-2 gap-20 gap-y-4">
            <p>
              Native Name:
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.nativeName}
              </span>
            </p>
            <p>
              Capital:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.capital}
              </span>
            </p>
            <p>
              Region:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.region}
              </span>
            </p>
            <p>
              Sub Region:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm">
                {state.subregion}
              </span>
            </p>
            <p>
              Country code:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                +{state.callingCodes}
              </span>
            </p>
            <p>
              Population:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.population}
              </span>
            </p>
            <p>
              Top Level Domain:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.topLevelDomain[0]}
              </span>
            </p>
            <p>
              Currencies:{" "}
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.currencies.map(
                  (currency) => `${currency.name}, ${currency.code}`
                )}
              </span>
            </p>
            <p>
              Languages:
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.languages.map((language) => language.name + `, `)}
              </span>
            </p>
            <p>
              Timezones:
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {state.timezones}
              </span>
            </p>
            <p>
              Lat/Lng:
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {`${state.latlng}`}
              </span>
            </p>
            <p>
              Land Borders:
              <span className="text-gray-700 dark:text-gray-400 text-sm pl-1">
                {`${state.borders}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
