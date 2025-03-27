import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Rehome from "./Rehome";
import PetListing from "./PetListing"; // Import PetListing
import Header from "./Header";
import Signup from "./Signup";
import Signin from "./Signin";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rehome" element={<Rehome />} />
        <Route path="/pets" element={<PetListing />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;
