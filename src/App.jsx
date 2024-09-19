import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import apps from './apps/apps'; /* Ini nanti bisa diganti ke apa aja */
import MenuPage from './MenuPage'; /* ini juga */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<apps />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
};


