///Bu bir denemedir


import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import RCLockup from "./rc-lockup/RCLockup";
import SearchBar from "./search-bar/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Art from "./pages/art";
import Campus from "./pages/campus";
import News from "./pages/news";
import Signup from "./pages/sign-up";
import Team from "./pages/team";
import Topics from "./pages/topics";
import All from "./pages/all";
import Slider from "./news-carousel/slider";
import { FooterContainer } from './containers/footer'

function App() {
  return (
    <Router>
      <SearchBar />
        <RCLockup />
        <Navbar />
        <Routes>
          <Route path="/art" element={<Art />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/news" element={<News />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/all" element={<All />} />
        </Routes>
        <Slider />
        <FooterContainer />
    </Router>
  );
}

export default App;
