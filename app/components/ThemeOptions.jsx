"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
import { themeIcons } from "@/app/constants";

export default function ThemeOptions() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const getNextTheme = () => {
    const currentIndex = themeIcons.findIndex((t) => t.theme === theme);
    const nextIndex = (currentIndex + 1) % themeIcons.length;
    return themeIcons[nextIndex].theme;
  };

  const handleThemeChange = (nextTheme) => {
    changeTheme(nextTheme);
  };

  return (
    <>
      <div
        tabIndex={0}
        role="button"
        onClick={() => handleThemeChange(getNextTheme())}
        onTouchStart={() => handleThemeChange(getNextTheme())}
        className="btn btn-ghost rounded-btn hover:text-secondary"
      >
        Theme: {themeIcons.find((t) => t.theme === theme)?.icon}
      </div>
    </>
  );
}
