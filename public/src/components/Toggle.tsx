import React, { useState, useEffect, FC, memo } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
const Toggle: FC = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (localStorage.getItem("hivend-color-theme") === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
    // localStorage.setItem("hivend-color-theme", "light");
  }, [theme]);
  return (
    <div className="transition duration-500 ease-in-out p-4">
      {theme === "dark" ? (
        // <button role="link" className="text-xl cursor-pointer">
        <SunIcon
          onClick={() => {
            setTheme("light");
            localStorage.setItem("hivend-color-theme", "light");
            return theme === "dark"
              ? document.documentElement.classList.remove("dark")
              : document.documentElement.classList.add("dark");
          }}
          className="h-6 w-6 text-gray-500 dark:text-gray-400 fill-current stroke-current"
        />
      ) : (
        // </button>
        <div className="">
          <MoonIcon
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("hivend-color-theme", "dark");
              return theme === "dark"
                ? document.documentElement.classList.remove("dark")
                : document.documentElement.classList.add("dark");
            }}
            className="h-6 w-6 text-2xl cursor-pointer text-gray-500 dark:text-gray-400"
          />
        </div>
      )}
    </div>
  );
};

export default Toggle;
