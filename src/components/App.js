import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
// State variable for dark mode
const [darkMode, setDarkMode] = useState(false);

// Event handler for toggling dark mode
const handleDarkModeToggle = () => {
  setDarkMode((prevDarkMode) => !prevDarkMode);
};
  //Use dark mode state variable in order to determine the app class
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Dark mode toggle button */}
        <button onClick={handleDarkModeToggle}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
} 

export default App;
