import React, { useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState(true);
  const [toggleBtn, setToggleBtn] = useState(true);

  const toggleDarkMode = () => {
    setToggleBtn(!toggleBtn);

    if (mode) {
      document.documentElement.classList.add("dark");
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setMode((current) => (current = !current));
    }
  };

  localStorage.setItem("mode", mode);
  return (
    <div className="w-screen shadow-md py-6 bg-white dark:bg-gray-700 dark:text-white mb-16">
      <div className="flex container mx-auto w-5/6 md:w-full items-center">
        <h1 className="font-bold text-xl">Countries Api</h1>
        <div className="ml-auto font-medium">
          <button onClick={() => toggleDarkMode()}>
            {toggleBtn ? (
              <span>
                <i className="fas fa-sun"></i> light mode
              </span>
            ) : (
              <span>
                <i className="fas fa-moon"></i> dark mode
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
