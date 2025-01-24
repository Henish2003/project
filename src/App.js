import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import Work from "./components/work";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/work" element={<Work />} />




      </Routes>
    </Router>
  );
}

export default App;
