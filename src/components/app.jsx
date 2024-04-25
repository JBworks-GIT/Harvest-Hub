import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Route from react-router-dom
import Shop from "./Shop";
import Landing from "./landing.jsx";
import Contact from "./contact.jsx"
import Footer from "./footer.jsx";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
