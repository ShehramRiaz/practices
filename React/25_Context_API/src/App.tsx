import { createContext, useContext, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

function Button() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Button must be used inside ThemeContext.Provider");
  }

  const { theme, setTheme } = context;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Current theme: {theme}
    </button>
  );
}

function Page() {
  return (
    <>
      <Button />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Page />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
