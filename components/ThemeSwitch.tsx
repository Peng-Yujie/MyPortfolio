import React, { useState } from "react";
import ReactSwitch from "react-switch";

export const darkBgClass =
  "dark:bg-none dark:bg-gray-600 dark:outline dark:outline-2 dark:outline-gray-500";
// export const darkTextClass = "dark:text-gray-300";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const switchDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="flex items-center mx-auto">
      <ReactSwitch
        checked={darkMode}
        onChange={switchDarkMode}
        onColor="#718096"
        offColor="#2d3748"
        uncheckedIcon={
          <div className="flex items-center justify-center h-full text-yellow-500">
            🌙
          </div>
        }
        checkedIcon={
          <div className="flex items-center justify-center h-full text-white">
            ☀️
          </div>
        }
      />
    </div>
  );
};

export default ThemeSwitch;
