import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Dev from "./components/Services/WebDevelopment.js";
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import Work from "./components/work";
import Digital from "./components/Services/DigitalMarketing.js";
import BusinessAnalysis from "./components/Services/BusinessAnalysis.js";
import Brand from "./components/Services/Branding.js";
import Research from "./components/Services/MarketResearch.js";
import Production from "./components/Services/ContentProduction.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page" element={<Page />} />
        <Route path="/work" element={<Work />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/dig" element={<Digital />} />
        <Route path="/business" element={<BusinessAnalysis />} />
        <Route path="/research" element={<Research />} />
        <Route path="/production" element={<Production />} />
        <Route path="/brands" element={<Brand />} />
      </Routes>
    </Router>
  );
}

export default App;
