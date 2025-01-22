import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import ContentMarketing from "./components/ContentMarketing";
import Contact from "./components/Contact";
import Choose from "./components/Choose";
import Page from "./components/Page";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/content" element={<ContentMarketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/page" element={<Page />} />



      </Routes>
    </Router>
  );
}

export default App;
