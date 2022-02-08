import React from "react";
import Buy from "./Pages/Buy";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
