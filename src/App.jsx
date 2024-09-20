import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import Review from "./components/Review";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="hidangan">
          <Dishes />
        </div>

        <div id="spesial">
          <Menu />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

    </div>
  );
};

export default App;
