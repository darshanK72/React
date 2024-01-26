import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  toggleTheme: () => {},
});


function ThemeContextProvider({ children }) {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    console.log(themeMode)
    if (themeMode == "light") setThemeMode("dark");
    else setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider