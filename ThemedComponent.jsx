import React, { useState, createContext, useContext } from "react";

// Create Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ margin: "20px", padding: "10px" }}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

function ThemedComponent() {
  const { isDarkMode } = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return <div style={themeStyles}>This is {isDarkMode ? "Dark" : "Light"} Mode</div>;
}

function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
