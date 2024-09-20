import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apps from "./routes/Makanan";
import MenuAwal from "./routes/MenuAwal";
 /* Ini nanti bisa diganti ke apa aja */
// import MenuPage from './MenuPage'; /* ini juga */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuAwal />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path = "/Makanan" element={<Apps/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;


