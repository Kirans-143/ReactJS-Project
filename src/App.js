import React from "react";
import "./App.css";
import CreateBurger from "./CreateBurger";
import { BurgerComponentEnum } from "./Resources";

function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.CHEESE,
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.TOMATOES,
        ]}
      />
    </div>
  );
}

export default App;
