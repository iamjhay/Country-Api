import React from "react";

const ThumbDetail = ({ title, image_url, population, region, capital }) => {
  return (
    <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
      <img
        src={image_url}
        alt={title}
        className="h-1/2 w-full rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <h3 className="font-bold mb-4">{title}</h3>
        <p className="text-xs">
          Population:
          <span className="text-gray-700 dark:text-gray-700 pl-1">
            {population}
          </span>
        </p>
        <p className="text-xs">
          Region:{" "}
          <span className="text-gray-700 dark:text-gray-700 pl-1">
            {region}
          </span>
        </p>
        <p className="text-xs">
          Capital:{" "}
          <span className="text-gray-700 dark:text-gray-700 pl-1">
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThumbDetail;
