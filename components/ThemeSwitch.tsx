import React from "react";
import ReactSwitch from "react-switch";
import { useTheme } from "../context/theme-context";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center mx-auto">
      <ReactSwitch
        checked={theme === "dark"}
        onChange={toggleTheme}
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
