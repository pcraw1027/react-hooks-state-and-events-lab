import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(true)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

function handleToggleDarkMode() {
  setIsDarkMode(!isDarkMode)
}

  return (
    <div className={"App " + (isDarkMode ? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleDarkMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
